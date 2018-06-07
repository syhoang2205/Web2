var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = `select * from ketquadg`;
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from ketquadg where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into ketquadg(MASP, MAIL, GIA, MATK) values('${poco.MASP}','${poco.MAIL}','${poco.GIA}','${poco.MATK}')`;
	return db.insert(sql);
}