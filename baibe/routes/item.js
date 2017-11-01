var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'taobao'
})
/* GET home page. */
router.post('/list',function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*")
    //var a=req.body.abc;
    //console.log(a);
    con.query('SELECT * FROM text',function(err,rows){

        res.send(rows)
        //console.log(rows)
    })
});
router.post('/in',function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*")
    var bb=req.body.abc;
    console.log(bb);
    con.query('SELECT * FROM text WHERE title LIKE "%'+bb+'%"', function(err,rows){
        res.send(rows)
        console.log(rows)
    })
});

module.exports = router;