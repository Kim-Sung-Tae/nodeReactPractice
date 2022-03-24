var express = require('express');
var router = express.Router();






router.get('/',(req,res)=>{
    res.send('getsend 페이지의 시작')
})




module.exports = router;