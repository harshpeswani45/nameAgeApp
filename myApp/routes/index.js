var express = require('express');
var usermodels=require('../models/usermodels')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});
router.all('/addInfo',function(req,res){
  if(req.method =='GET')
    res.render('addInfo',{message:''})
  else{
      name=req.body.name
      age=req.body.age
      usermodels.addInfo('Information',name,age,function(result){
        if(result)
              res.render('addInfo',{message:'Success'})
      
      })
    }

})
router.get('/showInfo',function(req,res){
  usermodels.showInfo('Information',function(result){
    if(result)
        res.render('showInfo',{result:result})

})
})

router.all('/deleteInfo',function(req,res){
      if(req.method=='GET')
        res.render('deleteInfo',{message:''})
      else{
        var name=req.body.name
        usermodels.deleteInfo('Information',name,function(result){
          if(result)
            res.render('deleteInfo',{message:'Success'})
        })
      }
})
router.all('/updateInfo',function(req,res){
  if(req.method =='GET')
    res.render('updateInfo',{message:''})
  else{
      prev=req.body.prev      
      newname =req.body.new
      usermodels.updateInfo('Information',prev,newname,function(result){
        if(result)
              res.render('updateInfo',{message:'Success'})
      
      })
    }

})
router.all('/addName',function(req,res){
  if(req.method =='GET')
    res.render('addName',{message:''})
  else{
      name=req.body.name
      usermodels.addName('infoName',name,function(result){
        if(result)
              res.render('addName',{message:'Success'})
      
      })
    }

})
router.get('/showName',function(req,res){
  usermodels.showInfo('infoName',function(result){
    if(result)
        res.render('showName',{result:result})

})
})

router.all('/updateName',function(req,res){
  if(req.method =='GET')
    res.render('updateName',{message:''})
  else{
      prev=req.body.prev      
      newname =req.body.new
      usermodels.updateInfo('infoName',prev,newname,function(result){
        if(result)
              res.render('updateName',{message:'Success'})
      
      })
    }

})

router.all('/deleteName',function(req,res){
  if(req.method=='GET')
    res.render('deleteName',{message:''})
  else{
    var name=req.body.name
    usermodels.deleteInfo('infoName',name,function(result){
      if(result)
        res.render('deleteName',{message:'Success'})
    })
  }
})
module.exports = router;
