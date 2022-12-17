const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('hello moi nguoi')
})
app.listen(3000);