var express = require('express');
var axios = require('axios');
var TaiKhoanRepo = require('../repos/TaiKhoanRepo');

var router = express.Router();

router.get('/:mail', (req, res) => {
	var mail = req.params.mail;

	TaiKhoanRepo.load(mail).then(rows => {
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

router.post('/login', (req, res) => {
	TaiKhoanRepo.login(req.body).then(rows => {
		if (rows.length > 0) {
			res.json("Success");
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

router.post('/Admin', (req, res) => {
	TaiKhoanRepo.Admin(req.body).then(rows => {
		if (rows.length > 0) {
			res.json("Success");
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

	TaiKhoanRepo.checkmail(req.body.MAIL).then(rows => {
		if (rows.length > 0) {
			res.json("Mail owner");
		} else {
			res.statusCode = 204;

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
		}
	}).catch(err => {
		console.log(err);
		res.statusCode = 500;
		res.json('error');
	});
});

router.post('/captcha', (req, res) => {
    var secret = '6LfDpF0UAAAAACjw3KU9ONZUSd2ks3rnihbO7pEb';
    var captcha_response = req.body.captcha_response;

    var url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha_response}`;
    axios.post(url, {
        }, {
        	headers: {
        		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        	}
        })
    	.then(function(response) {
            res.json(response.data);
        })
        .catch(function(error) {
            res.end('fail');
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
				LOAITK: req.body.LOAITK,
				TINHTRANG: req.body.TINHTRANG
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