module.exports.login = function (server, req, res) {
    //Recebendo dados via post
    var data = req.body;
    //Recuperar a conexao
    var conn = server.config.dbConnection();
    //Recuperar o Model
    var users = new server.v1.models.UsersDAO(conn);
    //Mandar para checkCredentials e implementar um callback que
    users.checkCredentials(data, function (error, results) {
        var pass = data.pass;
        if (error) {
            // console.log("error ocurred",error);
            res.json({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            // console.log('The solution is: ', results);
            if(results.length >0){
                if(results[0].pass == pass){
                    res.json({
                        "code":200,
                        "success":"login sucessfull"
                    });
                }
                else{
                    res.json({
                        "code":204,
                        "success":"Email and password does not match"
                    });
                }
            }
            else{
                res.json({
                    "code":204,
                    "success":"Email does not exits"
                });
            }
        }
    });

}

module.exports.create = function (server, req, res) {
    res.send({msg: 'Novo Usuário'});
}