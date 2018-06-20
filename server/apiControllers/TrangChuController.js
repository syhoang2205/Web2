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

router.get('/wishlist/:id', (req, res) => {
    var id = req.params.id;
    TrangChuRepo.wishlist(id).then(rows => {
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

router.get('/store/:id', (req, res) => {
    var id = req.params.id;
    TrangChuRepo.store(id).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/Win/:id', (req, res) => {
    var id = req.params.id;
    TrangChuRepo.Win(id).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/buy/:id', (req, res) => {
    var id = req.params.id;
    TrangChuRepo.buy(id).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

module.exports = router;