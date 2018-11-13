var mysql = require('mysql');

var connMysql = function(){

    return mysql.createConnection({
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: '',
        database: 'devstagram'
    });

}
module.exports = function () {
    return connMysql;
}