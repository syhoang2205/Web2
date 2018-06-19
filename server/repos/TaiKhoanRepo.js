var md5 = require('md5');
var db = require('../fn/mysql-db');

exports.load = function(mail) {
	var sql = `select * from taikhoan where TINHTRANG = 1 and MAIL = '${mail}'`;
	return db.load(sql);
}

exports.loadALL = function(mail) {
	var sql = `select * from taikhoan where LOAITK = 2`;
	return db.load(sql);
}

exports.login = function(poco) {
	var md5_password = md5(poco.PASSWORD);
	var sql = `select * from taikhoan where TINHTRANG = 1 and loaiTK = 2 and MAIL like '${poco.MAIL}' and PASSWORD like '${md5_password}'`;
	return db.load(sql);
}

exports.Admin = function(poco) {
	var md5_password = md5(poco.PASSWORD);
	var sql = `select * from taikhoan where LOAITK = 1 and MAIL like '${poco.MAIL}' and PASSWORD like '${md5_password}'`;
	return db.load(sql);
}

exports.checkmail = function(mail) {
	var sql = `select * from taikhoan where MAIL like '${mail}'`;
	return db.load(sql);
}

exports.add = function(poco) {
	var md5_password = md5(poco.PASSWORD);
	var sql = `insert into taikhoan(HOTEN, MAIL, PASSWORD, DIACHI, LOAITK) values('${poco.HOTEN}','${poco.MAIL}','${md5_password}','${poco.DIACHI}',${poco.LOAITK})`;
	return db.insert(sql);
}

exports.update = function(poco, id) {
	var md5_password = md5(poco.PASSWORD);
	var sql = `update taikhoan set HOTEN='${poco.HOTEN}',MAIL='${poco.MAIL}',PASSWORD='${md5_password}',DIACHI='${poco.DIACHI}',LOAITK='${poco.LOAITK}',TINHTRANG=${poco.TINHTRANG} Where ID='${id}'`;
	return db.load(sql);
}

exports.delete = function(id) {
	var sql = `delete from taikhoan where ID = ${id}`;
	return db.delete(sql);
}