var con = require('./conn')

function addInfo(tablename,name,age,cb){
  var query = "insert into "+tablename+" values('"+name+"',"+age+")"
  
  con.query(query,function(err,result){
    if(err)
      console.log(err)
    else
      cb(result)
  })

}
function showInfo(tablename,cb){
  var query = "select * from "+tablename
  con.query(query,function(err,result){
    if(err)
      console.log(err)
    else
      cb(result)
  })
}

function deleteInfo(tablename,name,cb){
  var query = "delete from "+tablename+" where Name='"+name+"'"
  con.query(query,function(err,result){
    if(err)
      console.log(err)
    else
      cb(result)
  })
}
function updateInfo(tablename,prevname,newname,cb){
  var query = "update "+tablename+" set Name = '"+newname+"' where Name='"+prevname+"'"
  console.log(query)
  con.query(query,function(err,result){
    if(err)
      console.log(err)
    else
      cb(result)
  })
}

function addName(tablename,name,cb){
  var query = "insert into "+tablename+" values('"+name+"')"
  console.log(query)
  con.query(query,function(err,result){
    if(err)
      console.log(err)
    else
      cb(result)
  })
}





module.exports={addInfo:addInfo,showInfo:showInfo,deleteInfo:deleteInfo,updateInfo:updateInfo,addName:addName}