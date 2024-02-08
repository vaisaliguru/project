const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('buyer');

});
app.get('/login',(req,res)=>{
    res.render('login');

});


app.listen(port,()=>{
    console.log('server is running at http://localhost:3000');
});