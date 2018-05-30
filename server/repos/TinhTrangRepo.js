var db = require('../fn/mysql-db');

exports.load = function(id) {
	var sql = `select * from xntinhtrang where ID = ${id}`;
	return db.load(sql);
}