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

router.post('/', (req, res) => {
	DanhMucRepo.add(req.body)
		.then(insertId => {
			var poco = {
				TENSP: req.body.TENSP
			};
			res.statusCode = 201;
			res.json(poco);
		})
		.catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
});

router.post('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;
		DanhMucRepo.update(req.body, id).then(insertId => {
			var poco = {
				TENDM: req.body.TENDM
			};
			res.statusCode = 201;
			res.json(poco);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
	}
});

router.delete('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		if (isNaN(id)) {
			res.statusCode = 400;
			res.end();
			return;
		}
		DanhMucRepo.delete(id).then(affectedRows => {
			res.json({
				affectedRows: affectedRows
			});
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