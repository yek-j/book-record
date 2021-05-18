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
   BookRecord.find()
   .populate('writer')
   .exec((err, record) => {
       if(err) return res.status(400).send(err);
       res.status(200).json({success: true, record})
   })
})

// myPage 독서기록표
router.post('/myRead', (req, res) => {
    // 해당 유저가 작성한 독서기록표만 찾는다
    BookRecord.find({ writer : req.body.writer})
    .exec((err, myread) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success: true, myread})
    })
})

// 작성한 유저가 자신의 기록 삭제
router.post('/delete', (req, res) => {
    console.log(req.body);
    BookRecord.deleteOne({_id: req.body._id})
    .exec((err, result) => {
        if(err) return res.status(400).json({success: false, err})
        res.status(200).json({success: true})
    })
})

// update 페이지에 독서기록 불러오기
router.post('/readDetail', (req, res) => {
    BookRecord.find({_id: req.body.bookId})
    .exec((err, record) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success: true, record});
    })
})

// 작성한 독서기록 수정을 위해 불러오기
router.post('/update', (req, res) => {
    let id = req.body._id;
    let bookname = req.body.bookname;
    let author = req.body.author;
    let record = req.body.record;
    let date = req.body.date;

    BookRecord.findOneAndUpdate({_id: id}, 
        {$set: { bookname: bookname, author: author, record:record, date: date }},
        {upsert: false})
    .exec((err, result) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success: true});
    })
})

module.exports = router;