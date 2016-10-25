
let express = require('express')
let router = express.Router()
let Comments = require('../models/comments')


router.get('/comment', function (req,res) {
  Comments.find({},function (err,result) {
    if(err){
      console.log(err)
    } else{
      res.json(result)
    }
  })
})

router.post('/comment', function (req,res) {
  let comment = new Comments({
    comment : req.body.comment,
    author: req.body.author
  }).save(function (err,result) {
    if(err){
      console.log(err)
    } else{
      res.json(result)
    }
  })
})

module.exports = router
