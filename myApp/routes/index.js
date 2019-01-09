var express = require('express');
var usermodels=require('../models/usermodels')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index')
  console.log("Hello")
  res.end()
});
router.post('/addInfo',function(req,res){
  
      name=req.body.name
      age=req.body.age
      console.log(name)
      usermodels.addInfo(name,age,function(result){
        if(result)
              console.log('Success')
      
      })
      res.end()
    

})
router.get('/showInfo',function(req,res){
  
  console.log(usermodels.con)

  usermodels.showInfo(usermodels.con,function(result){
          if(result)
          {
            console.log(result)
            res.end(JSON.stringify(result))
          }
    })
    
})

router.delete('/deleteInfo/:id',function(req,res){
      
        var name=req.params.id
        usermodels.deleteInfo(usermodels.con,name,function(result){
          if(result)
            console.log('Success')
          else  
            console.log('Not Succesful')
        })
        res.end()
      
})
router.post('/updateInfo',function(req,res){
  
      prev=req.body.prev      
      newname =req.body.new
      usermodels.updateInfo(usermodels.con,prev,newname,function(result){
        if(result)
              console.log('Success')
        else
          console.log('Name Doesnt Exist')
      
      })
    
      res.end()
})
router.post('/addName',function(req,res){
   
      name=req.body.name
      usermodels.addName(name,function(result){
        if(result)
              console.log('Success')
      
      })
      res.end()

})
router.get('/showName',function(req,res){
  
  usermodels.showInfo(usermodels.con1,function(result){
    if(result)
    {
        console.log(JSON.stringify(result))
        res.end(JSON.stringify(result))
    }
    
        res.end()
})
})

router.post('/updateName',function(req,res){
  
      prev=req.body.prev      
      newname =req.body.new
      usermodels.updateInfo(usermodels.con1,prev,newname,function(result){
        if(result)
            console.log('Success')
        else
          console.log('Unsuccesful')
      })
      res.end()

})

router.delete('/deleteName/:id',function(req,res){
  
    var name=req.params.id
    usermodels.deleteInfo(usermodels.con1,name,function(result){
      if(result)
        console.log('Success')
      else
        console.log('Not Success')
        
        res.end()

    })
  
})
module.exports = router;
