var express = require('express');
var TaiKhoanRepo = require('../repos/TaiKhoanRepo');

var router = express.Router();

router.get('/', (req, res) => {
    TaiKhoanRepo.loadAll().then(rows => {
        res.json(rows);
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

		TaiKhoanRepo.load(id).then(rows => {
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

router.post('/', (req, res) => {
	TaiKhoanRepo.add(req.body)
		.then(insertId => {
			var poco = {
				HOTEN: req.body.HOTEN,
				MAIL: req.body.MAIL,
				PASSWORD: req.body.PASSWORD,
				DIACHI: req.body.DIACHI,
				LOAITK: req.body.LOAITK
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
		TaiKhoanRepo.update(req.body, id).then(insertId => {
			var poco = {
				HOTEN: req.body.HOTEN,
				MAIL: req.body.MAIL,
				PASSWORD: req.body.PASSWORD,
				DIACHI: req.body.DIACHI,
				LOAITK: req.body.LOAITK
			};
			res.statusCode = 201;
			res.json(poco);
		})
		.catch(err => {
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

		TaiKhoanRepo.delete(id).then(affectedRows => {
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