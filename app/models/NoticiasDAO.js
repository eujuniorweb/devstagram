function NoticiasDAO(conn){
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._conn.query('SELECT * FROM noticias',callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._conn.query('SELECT * FROM noticias WHERE id=2',callback);
}

NoticiasDAO.prototype.createNoticia = function(noticia, callback){
    this._conn.query('INSERT INTO noticias set ? ',noticia, callback);
}

module.exports = function () {

    return NoticiasDAO;
}