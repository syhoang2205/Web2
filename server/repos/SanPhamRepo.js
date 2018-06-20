var db = require('../fn/mysql-db'),
	constants = require('../fn/const');
	
exports.loadAll = function() {
	var sql = 'select * from sanpham where TRANGTHAI = 1';
	return db.load(sql);
}

exports.loadXN = function() {
	var sql = `select * from sanpham where TRANGTHAI = 2`;
	return db.load(sql);
}

exports.loadPage = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `select * from sanpham where TRANGTHAI = 1 limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;
	return db.load(sql);
}

exports.Search = function(page, text) {
	var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
	var sql = `select * from sanpham where TRANGTHAI = 1 and TENSP like '%${text}%' limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;
	return db.load(sql);
}

exports.timkiem = function(page, text, madm) {
	var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
	var sql = `select * from sanpham where TRANGTHAI = 1 and TENSP like '%${text}%' and MADM = ${madm} limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;
	return db.load(sql);
}

exports.timkiemdm = function(page, dm) {
	var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
	var sql = `select * from sanpham where TRANGTHAI = 1 and MADM = ${dm} limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from sanpham where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into sanpham(NGUOIBAN, TENSP, MADM, GIAKHOIDIEM, GIABAN, BUOCNHAY, MOTA, NGAYKT, HINH) values('${poco.NGUOIBAN}', '${poco.TENSP}', '${poco.MADM}','${poco.GIAKHOIDIEM}','${poco.GIABAN}','${poco.BUOCNHAY}','${poco.MOTA}',DATE_ADD(NOW(), INTERVAL 7 DAY),'${poco.HINH}')`;
	return db.insert(sql);
}

exports.update = function(poco, id) {
	var sql = `update sanpham set GIAKHOIDIEM='${poco.GIAKHOIDIEM}' Where ID = ${id}`;
	return db.load(sql);
}

exports.updateSP = function(id) {
	var sql = `update sanpham set TRANGTHAI = 1 Where ID = ${id}`;
	return db.load(sql);
}

exports.delete = function(id) {
	var sql = `delete from sanpham where ID = ${id}`;
	return db.delete(sql);
}