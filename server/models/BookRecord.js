const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = mongoose.Schema({
    writer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
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
    }
}, {timestamps:true})

const BookRecord = mongoose.model('BookRecord', bookSchema)

module.exports = {BookRecord}