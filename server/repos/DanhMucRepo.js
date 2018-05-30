var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from danhmucsp';
	return db.load(sql);
}