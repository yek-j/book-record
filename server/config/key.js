if(process.env.NODE_ENV === 'production'){ 
    module.exports = require('./prod');
} else { // 몽고db 정보 숨기기
    module.exports = require('./dev');
}