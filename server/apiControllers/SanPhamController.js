var express = require('express');
var SanPhamRepo = require('../repos/SanPhamRepo'),
	constants = require('../fn/const');

var router = express.Router();

router.get('/LoadAll', (req, res) => {
	SanPhamRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/', (req, res) => {
	var page = 1;
	if (req.query.page) {
		page = +req.query.page;
	}

	SanPhamRepo.loadPage(page).then(rows => {
		var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
		if (hasMore) {
			rows.pop();
		}

		var data = {
			sanpham: rows,
			hasMore: hasMore
		}
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.statusCode = 500;
		res.end('View error log on console.');
	});
});

router.get('/XacNhan', (req, res) => {
	SanPhamRepo.loadXN().then(rows => {
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

router.get('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		if (isNaN(id)) {
			res.statusCode = 400;
			res.end();
			return;
		}

		SanPhamRepo.load(id).then(rows => {
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

router.get('/Search/:text', (req, res) => {
	var page = 1;
	var text = req.params.text;
	if (req.query.page) {
		page = +req.query.page;
	}

	SanPhamRepo.Search(page, text).then(rows => {
		var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
		if (hasMore) {
			rows.pop();
		}

		var data = {
			sanpham: rows,
			hasMore: hasMore
		}
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.statusCode = 500;
		res.end('View error log on console.');
	});
});

router.get('/Searchs/:dm', (req, res) => {
	var page = 1;
	var dm = req.params.dm;

	if (isNaN(dm)) {
		res.statusCode = 400;
		res.end();
		return;
	}

	if (req.query.page) {
		page = +req.query.page;
	}

	SanPhamRepo.timkiemdm(page, dm).then(rows => {
		var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
		if (hasMore) {
			rows.pop();
		}

		var data = {
			sanpham: rows,
			hasMore: hasMore
		}
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.statusCode = 500;
		res.end('View error log on console.');
	});
});

router.get('/Search/:txts/:mdm', (req, res) => {
	var page = 1;
	var txt = req.params.txts;
	var dm = req.params.mdm;

	if (isNaN(dm)) {
		res.statusCode = 400;
		res.end();
		return;
	}

	if (req.query.page) {
		page = +req.query.page;
	}

	SanPhamRepo.timkiem(page, txt, dm).then(rows => {
		var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
		if (hasMore) {
			rows.pop();
		}

		var data = {
			sanpham: rows,
			hasMore: hasMore
		}
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.statusCode = 500;
		res.end('View error log on console.');
	});
});

router.post('/', (req, res) => {
	SanPhamRepo.add(req.body)
		.then(insertId => {
			var poco = {
				NGUOIBAN: req.body.NGUOIBAN,
				TENSP: req.body.TENSP,
				MADM: req.body.MADM,
				GIAKHOIDIEM: req.body.GIAKHOIDIEM,
				GIABAN: req.body.GIABAN,
				BUOCNHAY: req.body.BUOCNHAY,
				MOTA: req.body.MOTA,
				HINH: req.body.HINH
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
		SanPhamRepo.update(req.body, id).then(insertId => {
			var poco = {
				ID: id,
				TENSP: req.body.TENSP,
				MADM: req.body.MADM,
				GIAKHOIDIEM: req.body.GIAKHOIDIEM,
				GIABAN: req.body.GIABAN,
				MOTA: req.body.MOTA,
				HINH: req.body.HINH,
				NGUOIBAN: req.body.NGUOIBAN
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

router.post('/XacNhan/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;
		SanPhamRepo.updateSP(id).then(rows => {
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

		SanPhamRepo.delete(id).then(affectedRows => {
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