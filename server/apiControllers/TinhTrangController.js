var express = require('express');
var TinhTrangRepo = require('../repos/TinhTrangRepo');

var router = express.Router();

router.get('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		if (isNaN(id)) {
			res.statusCode = 400;
			res.end();
			return;
		}

		TinhTrangRepo.load(id).then(rows => {
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