var express = require('express');
var router = express.Router();
var dbconfig = require('../db/dbconfig')

var mysql = require('mysql')
var pool = mysql.createPool(dbconfig);


// 라우터에서 사용, 익스프레스를 url 페이지에서 사용할수 있게.
router.use(express.urlencoded({extended : true}))
router.get('/',(req,res)=>{

   var botable = req.query.botable;  // 쿼리를   ?botable

   res.send('정상 페이지 요청');

    pool.getConnection(function(err,connection){
        connection.query(
            "select * from "+botable,
            (error,result)=>{
                if(error) throw error;
                res.send(result);
            })
            connection.release();
    })
})


module.exports = router;