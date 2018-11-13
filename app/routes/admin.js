module.exports = function (server) {

    server.get('/form', function (req, res) {
        server.app.controllers.admin.form(server,req,res);
    });

    server.post('/noticias/create', function (req, res) {
        server.app.controllers.admin.noticias_create(server,req,res);
    });

}