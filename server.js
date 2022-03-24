var app = require('express')();
var time = new Date();
var getsend = require('./api/getsend');

var dbsql = require('./api/dbsql')






app.use('/getsend',getsend);
app.use('/dbsql',dbsql)


app.set('port',8080);
app.get('/',(req,res)=>{
    res.send('index 첫 페이지 요청' + );
})

app.listen(app.get('port'),(req,res)=>{
    console.log( time +'콘솔창에서의 시간확인')
})