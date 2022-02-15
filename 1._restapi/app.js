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
    res.send({ data: movies });
});

app.get("/movies/:id", (req, res) => {
    const foundMovie = movies.find(movie => movie.id === Number(req.params.id));
    foundMovie ? res.send({data: foundMovie}) : res.sendStatus(404).send({})
});

app.post("/movies", (req, res) => {
    movies.push(req.body);
    res.send({})
})

app.put("/movies/:id", (req, res) => {
    const foundMovie = movies.find(movie => movie.id === Number(req.params.id));
    foundMovie ? movies[foundMovie.id-1] = req.body : res.sendStatus(404).send({});
    res.send({})
})

app.delete("/movies/:id", (req, res) => {
    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.params.id));
    foundMovieIndex !== -1 ? movies.splice(foundMovieIndex, 1) : res.sendStatus(404).send({})
    res.send({})
})



app.listen(8080, ()=>{
    console.log("Server is running on port" , 8080)
});

console.log("_______________________________________________________________");