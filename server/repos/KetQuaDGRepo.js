var db = require('../fn/mysql-db');

exports.load = function(id) {
	var sql = `select * from ketquadg where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into ketquadg(MASP, GIA, NGDG) values('${poco.MASP}','${poco.GIA}','${poco.MATK}')`;
	return db.insert(sql);
}