var express = require('express');
var DauGiaRepo = require('../repos/DauGiaRepo');
var router = express.Router();

router.get('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		DauGiaRepo.load(id).then(rows => {
			if (rows.length > 0) {
				res.json(rows);
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
	DauGiaRepo.add(req.body)
		.then(insertId => {
			var poco = {
				MASP: req.body.MASP,
				GIA: req.body.GIA,
				MATK: req.body.MATK
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

router.delete('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		if (isNaN(id)) {
			res.statusCode = 400;
			res.end();
			return;
		}
		DauGiaRepo.delete(id).then(affectedRows => {
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