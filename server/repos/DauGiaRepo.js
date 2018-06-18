var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = `select * from daugia`;
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from daugia where MASP = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into daugia(MASP, MAIL, GIA, MATK) values('${poco.MASP}','${poco.MAIL}','${poco.GIA}','${poco.MATK}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from daugia where ID = ${id}`;
	return db.delete(sql);
}