'use strict'
let mongoose = require ('mongoose')

let ObjectId = mongoose.Schema.Types.ObjectId
let commentsSchema = new mongoose.Schema({
    comment : String,
    author: String,
})

let Comments = mongoose.model('comments', commentsSchema)
module.exports = Comments
