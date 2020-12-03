const express = require("express");
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/data', function (req, res) {

    var sql = require("mssql");

    var config = {
        server: "localhost",
        user: "SA",
        password: "1Secure*Password1",
        database: "QM",
    };

    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from session', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
});

app.listen(5000, function () {
    console.log('Server is running..');
});