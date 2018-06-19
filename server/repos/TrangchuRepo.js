var db = require('../fn/mysql-db');

exports.load5SPMAX = function() {
	var sql = `SELECT * FROM sanpham WHERE TRANGTHAI = 1 ORDER BY GIAKHOIDIEM DESC LIMIT 5`;
	return db.load(sql);
}

exports.load5SPTMIN = function() {
	var sql = `SELECT * FROM sanpham WHERE TRANGTHAI = 1 ORDER BY DATEDIFF(NGAYKT,NOW()) ASC LIMIT 5`;
	return db.load(sql);
}

exports.load5SPDGN = function() {
	var sql = `SELECT s.*,COUNT(S.ID) FROM sanpham s, daugia d WHERE s.ID = d.MASP and TRANGTHAI = 1 GROUP BY S.ID ORDER BY COUNT(S.ID) DESC LIMIT 5`;
	return db.load(sql);
}

exports.loadtime = function() {
	var sql = `SELECT * FROM sanpham WHERE TRANGTHAI = 1`;
	return db.load(sql);
}