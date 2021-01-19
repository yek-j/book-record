const express = require('express');
const app = express();
const port = 5000;
// mongodb
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require("./config/key");
const {User} = require("./models/User");
const {BookRecord} = require("./models/BookRecord");
const {auth} = require("./middleware/auth");
const { response } = require('express');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected.."))
.catch(err => console.log(err));


app.get('/', (req, res) => {
   res.send("시작"); 
});


// 로그인
app.post('/api/users/login', (req, res) => {
    // 이메일 찾기
    User.findOne({email: req.body.email}, (err, user) => {
        //user x
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "해당 이메일은 등록되지 않은 이메일입니다."
            })
        }

        // user 있음
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({loginSuccess : false, message: "비밀번호가 틀렸습니다."});
            
            // 비밀번호가 일치하면 token 생성
            user.generateToken(function (err, user) {
                if(err) return res.status(400).send(err);

                // 쿠키에 저장
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess: true, userID: user._id});
            })
        })
    })
});

// 회원가입
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
  
    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    });
})

// 독서기록
app.post('/api/book/record', (req, res) => {
    const book = new BookRecord(req.body);

    book.save((err, doc) => {
        if(err) return res.json({recordSaveSuccess: false, err})
        return res.status(200).json({
            recordSaveSuccess: true
        })
    })
})

// main 화면 독서기록표
app.get('/api/book/read', (req, res) => {
    BookRecord.find({ }, function(err, record) {
        if(err) return res.json({recordReadSuccess: false, err});
        console.log(record);
        return res.status(200).json({
            recordReadSuccess: true
        })
      });
})

app.get('/api/users/auth', auth, (req,res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image
    })
})

// 로그아웃 auth에서 인증 후 user를 가져온다
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id}, 
      {token: ""},
      (err, user) => {
        if(err) return res.json({success: false, err});
        return res.status(200).send({
          success: true
        })
      })
  })

app.listen(port, () => {
    console.log(`Start... http://localhost:${port}`);
})