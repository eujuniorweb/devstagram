module.exports = function (server) {
    server.post('/api/v1/users/login', function (req, res) {
        server.v1.controllers.UsersController.login(server,req,res);
    });
    server.post('/api/v1/users/new', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });

    server.get('/api/v1/users/:id', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });

    server.put('/api/v1/users/:id', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });
    server.delete('/api/v1/users/:id', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });
    server.get('/api/v1/users/feed/:id', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });
    server.get('/api/v1/users/photos/:id', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });
    server.post('/api/v1/users/follow/:id', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });
    server.delete('/api/v1/users/unfollow/:id', function (req, res) {
        server.v1.controllers.UsersController.create(server,req,res);
    });
}