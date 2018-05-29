var md5 = require('md5');
var db = require('../fn/mysql-db');

exports.add = function (poco) {
	// poco = {
	// 	Username: 1,
	// 	Password: 'new name',
	// 	Name: 'name',
	// 	Email: 'email',
	// 	DOB: '2000-09-01',
	// 	Permission: 0
	// }

	var md5_password = md5(poco.Password);

	var sql = `insert into users(f_Username, f_Password, f_Name, f_Email, f_DOB, f_Permission) values('${poco.Username}', '${md5_password}', '${poco.Name}', '${poco.Email}', '${poco.DOB}', ${poco.Permission})`;
	return db.insert(sql);
}