function UsersDAO(conn){
    this._conn = conn;
}

UsersDAO.prototype.checkCredentials = function(data, callback){
    var email = data.email;
    this._conn.query('SELECT id, pass FROM users WHERE email = ?', [email], callback);
}

module.exports = function () {

    return UsersDAO;
}