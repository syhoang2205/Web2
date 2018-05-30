var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from sanpham';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from sanpham where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	var sql = `insert into sanpham(TENSP, MADM, GIAKHOIDIEM, GIABAN, MOTA, HINH, NGUOIBAN) values('${poco.TENSP}', '${poco.MADM}','${poco.GIAKHOIDIEM}','${poco.GIABAN}','${poco.MOTA}','${poco.HINH}','${poco.NGUOIBAN}')`;
	return db.insert(sql);
}

exports.update = function(poco, id) {
	var sql = `update sanpham set TENSP='${poco.TENSP}',MADM='${poco.MADM}',GIAKHOIDIEM='${poco.GIAKHOIDIEM}',GIABAN='${poco.GIABAN}',MOTA='${poco.MOTA}',HINH='${poco.HINH}',NGUOIBAN='${poco.NGUOIBAN}' Where ID='${id}')`;
	return db.load(sql);
}

exports.delete = function(id) {
	var sql = `delete from sanpham where ID = ${id}`;
	return db.delete(sql);
}