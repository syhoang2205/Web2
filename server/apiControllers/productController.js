var express = require('express');
var productRepo = require('../repos/productRepo'),
    constants = require('../fn/const');

var router = express.Router();

router.get('/', (req, res) => {
    // productRepo.loadAll().then(rows => {
    //     res.json(rows);
    // }).catch(err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('View error log on console.');
    // });

    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    productRepo.loadPage(page).then(rows => {
        var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
        if (hasMore) {
            rows.pop();
        }

        var data = {
            products: rows,
            hasMore: hasMore
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        productRepo.load(id).then(rows => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.statusCode = 204;
                res.end();
            }
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.json('error');
        });
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

module.exports = router;