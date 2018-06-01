var md5 = require('md5');
var db = require('../fn/mysql-db');

exports.load = function(id) {
	var sql = `select * from taikhoan where ID = ${id}`;
	return db.load(sql);
}

exports.login = function(poco) {
	var md5_password = md5(poco.PASSWORD);
	var sql = `select * from taikhoan where MAIL like '${poco.MAIL}' and PASSWORD like '${md5_password}'`;
	return db.load(sql);
}

exports.add = function(poco) {
	var md5_password = md5(poco.PASSWORD);
	var sql = `insert into taikhoan(HOTEN, MAIL, PASSWORD, DIACHI, LOAITK) values('${poco.HOTEN}','${poco.MAIL}','${md5_password}','${poco.DIACHI}','${poco.LOAITK}'`;
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