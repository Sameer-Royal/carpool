var express = require('express');
var app = express();

app.use('/users',require('./users'))


app.listen(8000,()=>{
  console.log('server is listening on 8000 port')
})

module.exports = app;

