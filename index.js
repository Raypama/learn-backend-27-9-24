/* const express = require("express"); //import same as on react
const app = express();


app.get('/', (req,res) => {
    res.send("hello world")
})

app.get('/user', (req,res) => {
    res.send("hello my bigboss")
})
app.get('/client', (req,res) => {
    res.send("hello my bigboss 22")
})
app.get('/clientUser', (req,res) => {
    res.send("hello my bigboss fix")
})


app.listen(8000,() => console.log('server is a running')); */   
//jalanin server





/* const movie = [
    {
        title: "Ex-man",
        releaseDate: 2009
    },
    {
        title: "ruby golf",
        releaseDate: 2019
    },
    {
        title: "kick andy's",
        releaseDate: 2016
    },
    {
        title: "liputan6",
        releaseDate: 2020
    }

]
*/
/* const studioFilm = [
    {
        name: "Warner Bros Pictures"
    },
    {
        name: "Walt Disney Studios"
    },
    {
        name: "Universal Sudios"
    },
    {
        name: "20th Century Studios"
    },
    {
        name: "Paramount pictures"
    },
    {
        name: "Sony Studios"
    }
]  */

const express = require ("express"); //import same as on react
const cors = require ("cors"); //import cors dlu
const router = require("./routes");

const app = express(); //cara menggunakan si corse ny
app.use(express.json())//berfungsi untuk nangkap request body dari method post
app.use(cors());
app.use(router);

const PORT = 8000







app.listen(PORT,() => console.log('server is a running'));


