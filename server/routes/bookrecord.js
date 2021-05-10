const express = require('express');
const router = express.Router();
const {BookRecord} = require("../models/BookRecord");

// 독서기록
router.post('/record', (req, res) => {
    const book = new BookRecord(req.body);

    book.save((err, doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

// main 화면 독서기록표
router.get('/read', (req, res) => {
    BookRecord.find({ }, function(err, record) {
        if(err) return res.json({success: false, err});
   //    console.log(record);
       return res.json({
        success: true,
        record
       });

    });
})

// 작성한 유저가 자신의 기록 삭제
router.post('/delete', (req, res) => {
    console.log(req.body);
})

module.exports = router;