var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = `select * from loaitk`;
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from loaitk where ID = ${id}`;
	return db.load(sql);
}