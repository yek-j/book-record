const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;  // 10자리
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name : {
        type: String,
        mexlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 7
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function (next) {
    var user =  this;

    // 비밀번호 암호화
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(error); 

            bcrypt.hash(user.password, salt, function (err, hash){
                if(err) return next(error);
                user.password = hash;
                next();
            })
        })
    }else {
        next();
    }
})

// 입력받은 비밀번호와 DB비교
userSchema.methods.comparePassword = function (inputPwd, cb){
    bcrypt.compare(inputPwd, this.password, function(err, res){
        if(err) return cb(err);
        cb(null, res);
    })
}

// Token 생성
userSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), "secretToken");

    // DBdp token 저장
    user.token = token;
    user.save(function (err, user) {
        if(err) return cb(err)

        cb(null, user);
    });
}

// 클라이언트에서 가져온 token과 DB의 token이 일치하는지 확인
userSchema.statics.findByToken = function (token, cb){
    var user = this;

    // token decode
    jwt.verify(token, 'secretToken', function (err, decoded){
        // DB에서 해당 token 찾기
        user.findOne({"_id" : decoded, "token": token}, function (err, user){
            if (err) return cb(err);
            cb(null, user);
        })
    })
}


const User = mongoose.model('User', userSchema);

module.exports = {User};