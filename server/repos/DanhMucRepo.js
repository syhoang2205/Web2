var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from danhmucsp';
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into danhmucsp(TENDM) values('${poco.TENDM}')`;
	return db.insert(sql);
}

exports.update = function(poco, id) {
	var sql = `update danhmucsp set TENDM = '${poco.TENDM}' Where ID = ${id}`;
	return db.load(sql);
}

exports.delete = function(id) {
	var sql = `delete from danhmucsp where ID = ${id}`;
	return db.delete(sql);
}