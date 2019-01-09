var con = require('./conn')
var con1 = require('./conn1')

function addInfo(name,age,cb){
  
  con.push({ 'Name':name,'Age':age})
  cb(true)
  

}
function showInfo(data,cb){
      //console.log(data)
      cb(data)
  
}

function deleteInfo(data,name,cb){ 
  for(var i in data){
    
    if(data[i].Name==name)
    {
          data.splice(i,1)
          cb(true)
    }
    else  
      cb(false)
  
  }
}

function updateInfo(data,prevname,newname,cb){
  for(var i in data){
    if(data[i].Name==prevname)
    {
          data[i].Name = newname
          cb(true)
    }  

}
}

function addName(name,cb){
  con1.push({ 'Name':name})
  cb(true)
  
}





module.exports={addInfo:addInfo,showInfo:showInfo,deleteInfo:deleteInfo,updateInfo:updateInfo,addName:addName,con:con,con1:con1}