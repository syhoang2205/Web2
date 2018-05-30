var express = require('express');
var DanhMucRepo = require('../repos/DanhMucRepo');

var router = express.Router();

router.get('/', (req, res) => {
    DanhMucRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});
module.exports = router;