var express = require('express');
var TrangChuRepo = require('../repos/TrangchuRepo');

var router = express.Router();

router.get('/MAX', (req, res) => {
    TrangChuRepo.load5SPMAX().then(rows => {
        var data = {
            sanpham: rows
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/MIN', (req, res) => {
    TrangChuRepo.load5SPTMIN().then(rows => {
        var data = {
            sanpham: rows
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/SPDGNN', (req, res) => {
    TrangChuRepo.load5SPDGN().then(rows => {
        var data = {
            sanpham: rows
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/time', (req, res) => {
    TrangChuRepo.loadtime().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

module.exports = router;