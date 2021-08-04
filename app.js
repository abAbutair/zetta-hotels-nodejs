const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbURI = 'mongodb+srv://netninja:96296935abd@cluster0.a9hsk.mongodb.net/zetta_hotels?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(3003);
    })
    .catch(err => console.log(err));

// register view engine
app.set("view engine", 'ejs');

// middleware & public files
app.use(express.static("public"));
app.use(express.static("node_modules"))

app.get('/', (req, res) => {
   res.render('index', {title: "Home"});
});

app.get('/about', (req, res) => {
   res.render('about', {title: "About us"});
});

app.get('/restaurant', (req, res) => {
   res.render('restaurant', {title: "restaurant"});
});

app.get('/contact', (req, res) => {
   res.render('contact', {title: "contact us"});
});

// 404 page
app.use((req, res) => {
   res.status(404).render("404", {title: "404"});
});