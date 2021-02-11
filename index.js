// const db = require('./queries');
const {Article} = require('./models');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/articles', (req,res) => {
    Article.findAll()
    .then(artikels => {
        res.status(200).json(artikels);
    })
    .catch(err => console.log(err));
});

app.get('/articles/:id', (req,res) => {
    Article.findOne({where: {id:req.params.id}})
    .then(articles => {
        res.status(200).json(articles);
    })
})
// app.get('/api/v1/authors/:id', db.getAuthorsById);
// app.post('/api/v1/authors', db.createAuthors);

app.listen(3000);

