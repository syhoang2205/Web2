var db = require('../fn/mysql-db');

exports.load = function() {
	var sql = `select * from ketquadg`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into ketquadg(MASP, GIA, NGDG) values('${poco.MASP}','${poco.GIA}','${poco.MATK}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from ketquadg where MASP = ${id}`;
	return db.delete(sql);
}