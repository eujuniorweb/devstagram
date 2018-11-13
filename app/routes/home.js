module.exports = function (server) {
    server.get('/', function (req, res) {
        server.v1.controllers.home.index(server,req,res);
    });
}