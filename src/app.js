const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs')
const port = process.env.PORT || 8080

// public staic path
const staticPath = path.join(__dirname,'../public')
const views_Path = path.join(__dirname,'../views')
app.set('view engine','hbs')
app.set('views', views_Path)
app.use(express.static(staticPath));

// register partials
const partialsPath = path.join(__dirname,'../views')
hbs.registerPartials(partialsPath)


//routing
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/weather',(req,res)=>{
    // res.send('this is weather page')
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.send('page not found')
})
app.listen(port,()=>{
    console.log(`listen to the port ${port}`)
})