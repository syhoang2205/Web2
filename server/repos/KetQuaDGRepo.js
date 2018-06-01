var db = require('../fn/mysql-db');

exports.load = function(id) {
	var sql = `select * from ketquadg where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into ketquadg(MASP, MAIL, GIA) values('${poco.MASP}','${poco.MAIL}','${poco.GIA}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from ketquadg where ID = ${id}`;
	return db.delete(sql);
}