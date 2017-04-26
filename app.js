const express = require("express");

const app = express();

app.get('/',function (req,res) {
    res.send("Hello Universe!");

});

app.listen(8080, function() {
    console.log("Listening to Port 8080!")
});