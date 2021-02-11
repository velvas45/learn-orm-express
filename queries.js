const {Client} = require("pg");
const client = new Client({
    user:'helmi',
    host:'localhost',
    database:'nodedb',
    password:'123456',
    port: 5432
});
client.connect();


const getAuthors = (req,res) => {
    client.query("SELECT * FROM authors ORDER BY id DESC", (err, results) => {
        if(err) throw(err)
        res.status(200).json(results.rows);
    })
}

const getAuthorsById = (req,res) => {
    const id = parseInt(req.params.id);
    client.query("SELECT * FROM authors WHERE id = $1", [id], (err,results) => {
        if (err) throw(err);
        res.status(200).json(results.rows);
    })
}

const createAuthors = (req,res) => {
    const {name,email} = req.body;
    client.query("INSERT INTO authors (name,email) VALUES ($1, $2)", [name,email], (err,results) => {
        if(err) throw(err);
        res.status(200).json({
            error: false,
            message: 'Data terbuat!'
        });
    })
}

module.exports = {getAuthors , getAuthorsById, createAuthors};