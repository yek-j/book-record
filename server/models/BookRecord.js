const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
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
        type: string
    },
    uid: {
        type: string,
        unique: 1
    }
})

const BookRecord = mongoose.model('BookRecord', bookSchema)

module.exports = {BookRecord}