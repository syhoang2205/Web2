var express = require('express');
var KetQuaDGRepo = require('../repos/KetQuaDGRepo');
var router = express.Router();

router.get('/', (req, res) => {
		KetQuaDGRepo.load().then(rows => {
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
});

router.post('/', (req, res) => {
	KetQuaDGRepo.add(req.body)
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
		
		KetQuaDGRepo.delete(id).then(affectedRows => {
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