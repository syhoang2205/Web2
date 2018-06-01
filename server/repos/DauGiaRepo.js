var db = require('../fn/mysql-db');

exports.load = function(id) {
	var sql = `select * from daugia where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into daugia(MASP, MAIL, GIA) values('${poco.MASP}','${poco.MAIL}','${poco.GIA}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from daugia where ID = ${id}`;
	return db.delete(sql);
}