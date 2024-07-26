const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

//Array of jokes to serve
const jokes = [  
    { id: 1, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },  
    { id: 2, joke: "Why don't scientists trust atoms? Because they make up everything!" },  
    { id: 3, joke: "What do you call fake spaghetti? An impasta!" },  
    { id: 4, joke: "Why did the math book look sad? Because it had too many problems." },  
    { id: 5, joke: "What do you call cheese that isn't yours? Nacho cheese!" },  
    { id: 6, joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!" },  
    { id: 7, joke: "What do you call a bear with no teeth? A gummy bear!" },  
    { id: 8, joke: "Why did the bicycle fall over? Because it was two tired!" },  
    { id: 9, joke: "How do you organize a space party? You planet!" },  
    { id: 10, joke: "Why can't you give Elsa a balloon? Because she will let it go!" }  
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to the Jokes REST API. Visit /jokes to see the list of jokes.");
});

app.get('/jokes', (req, res) => {
    res.send(jokes);
});

app.get('/randomjoke', (req, res) => {
    const joke = jokes[Math.floor(Math.random()*jokes.length)];
    res.send(joke);
});

app.get('/jokes/:id', (req, res) => {
    const id = jokes.findIndex(joke => joke.id == req.params.id);
    res.send(jokes[id]);
})

app.post('/jokes', (req, res) => {
    const newId = jokes[jokes.length -1].id + 1;
    const joke = req.body.joke;
    console.log(joke);
    jokes.push({
        id: newId,
        joke: joke
    });
    res.send({ id: newId, joke: joke });
});

app.delete('/jokes/:id', (req, res) => {
    const jokeId = req.params.id;
    const jokeIndex = jokes.findIndex(joke => joke.id == jokeId);
    jokes.splice(jokeIndex, 1);
    res.send({ message: "Joke deleted successfully!" });
})

app.listen(port, () => console.log(`App is listening on port ${port}`))