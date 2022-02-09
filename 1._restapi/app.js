// import express
const express = require("express");
const app = express();

// alternative way of doing it
// const app = require("express")();

const movies = [
    {id: 1, title: "Avengers: Infinity War"},
    {id: 2, title: "The Incredible Hulk"}
]

app.use(express.json());

// (endpoint, callback function)
app.get("/movies", (req, res) => {
    res.send({ movies: movies });
});

app.get("/movies/:id", (req, res) => {
    res.send(movies[req.params.id-1])
});

app.post("/movies", (req, res) => {
    movies.push(req.body);
})

app.put("/movies/:id", (req, res) => {
    movies[req.params.id-1] = req.body;
})

app.delete("/movies/:id", (req, res) => {
    movies.splice(movies[req.params.id-1], 1);
})



app.listen(8000);
