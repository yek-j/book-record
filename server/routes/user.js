const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

router.get('/auth', auth, (req,res) => {
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

// 로그인
router.post('/login', (req, res) => {
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
router.post('/register', (req, res) => {
    const user = new User(req.body);
  
    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    });
})

// 로그아웃 auth에서 인증 후 user를 가져온다
router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id}, 
      {token: ""},
      (err, user) => {
        if(err) return res.json({success: false, err});
        return res.status(200).send({
          success: true
        })
      })
  })

  module.exports = router;