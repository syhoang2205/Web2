var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from taikhoan';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from taikhoan where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into taikhoan(HOTEN, MAIL, PASSWORD, DIACHI, LOAITK) values('${poco.HOTEN}','${poco.MAIL}','${poco.PASSWORD}','${poco.DIACHI}','${poco.LOAITK}'`;
	return db.insert(sql);
}

exports.update = function(poco, id) {
	var sql = `update taikhoan set HOTEN='${poco.HOTEN}',MAIL='${poco.MAIL}',PASSWORD='${poco.PASSWORD}',DIACHI='${poco.DIACHI}',LOAITK='${poco.LOAITK}' Where ID='${id}')`;
	return db.load(sql);
}

exports.delete = function(id) {
	var sql = `delete from taikhoan where ID = ${id}`;
	return db.delete(sql);
}