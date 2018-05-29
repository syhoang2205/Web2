var db = require('../fn/mysql-db'),
    constants = require('../fn/const');

exports.loadAll = function() {
    var sql = 'select * from products';
    return db.load(sql);
}

exports.loadPage = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `select * from products limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;
    return db.load(sql);
}

exports.load = function(id) {
    var sql = `select * from products where ProID = ${id}`;
    return db.load(sql);
}