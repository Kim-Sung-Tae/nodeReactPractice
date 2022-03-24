var getsend = require('express')();




getsend.get('/',(req,res)=>{
    res.send('getsend 페이지의 시작')
})




module.exports = getsend;