const {User} = require("../models/User");

let auth = (req, res, next) => {
    // 인증 처리
    // 쿠키에서 토큰 가져오기
    let token = req.cookies.x_auth;

    // 유저찾기
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: ture});

        req.token = token;
        req.user = user;

        next();  
    })
}

module.exports = {auth};