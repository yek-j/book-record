const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    bookname: {
        type: String,
        maxlength: 50
    },
    author: {
        type: String,
        maxlength: 50
    },
    record: {
        type: String,
        maxlength: 300
    },
    date: {
        type: String
    },
    uid: {
        type: String
    }
})

const BookRecord = mongoose.model('BookRecord', bookSchema)

module.exports = {BookRecord}