module.exports.form = function (server, req, res) {
    res.render("admin/form");
}

module.exports.noticias_create = function (server,req,res) {
    //Recebendo dados via post
    var noticia = req.body

    //Recuperar a conexao
    var conn = server.config.dbConnection();

    //Recuperar o Model
    var noticias = new server.app.models.NoticiasDAO(conn);

    //Mandar para createNoticia e implementar um callback qu retorne para a tela que lista noticias
    noticias.createNoticia(noticia, function(error, result){

        if(error){
            res.send(error)
        }
        res.redirect('/noticias');
    });
}