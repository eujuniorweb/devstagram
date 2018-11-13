var server = require('./config/server');

var port = 8080;
server.listen(port, function(){
    console.log('Servidor esta escutando na porta ' + port);
});