const express = require('express');
const app = express();
const port = 5000;
// mongodb
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require("./config/key");
const {User} = require("./models/User");
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
app.post('/users/login', (req, res) => {
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
app.post('/users/register', (req, res) => {
    const user = new User(req.body);
  
    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    });
})

app.listen(port, () => {
    console.log(`Start... http://localhost:${port}`);
})