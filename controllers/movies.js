/* const { request } = require("express"); */

const movie = [
    {
        id: 1,
        title: "Ex-man",
        releaseDate: 2009
    },
    {
        id: 2,
        title: "ruby golf",
        releaseDate: 2019
    },
    {
        id: 3,
        title: "kick andy's",
        releaseDate: 2016
    },
    {
        id: 4,
        title: "liputan6",
        releaseDate: 2020
    }

]

exports.getMovies = (req,res) => {
    res.json({
        movieList: movie,
        massage : "succes"
    })
}

exports.getMoviesById = (req,res) => {
    
    const ID = parseInt(req.params.id)
    const findMoviesById = movie.find((item) => item.id == ID)//output  object
    
    console.log(findMoviesById);
    
    if (!findMoviesById) {
        
        res.status(404).json({
            code: 404,
            massage : `id : ${ID} is not found  `
        })

    }

    res.json({
        movieList: findMoviesById,
        massage : "succes"
    })
}

exports.insertMovies = (req,res) => {
   const ID = movie.length +1
   const newMovie = {
    id : ID,
    title : req.body.title,
    releaseDate : req.body.releaseDate
   }
/*    console.log(newMovie);
   console.log(req.body);
 */   
    res.status(201).json({ //status insert biasanya 201
        code :201,
        movieList : newMovie,
        massage : "add to movie list succes"
    })
}


exports.editMovies = (req,res) => {
    const ID = parseInt(req.params.id)
    const indexMovie = movie.findIndex((item) => item.id == ID)//
    
    console.log(indexMovie);
    const findMoviesById = movie.find((item) => item.id == ID)//output  object

    if (!findMoviesById) {//bissa dijadikan function
        
        res.status(404).json({
            code: 404,
            massage : `id : ${ID} is not found  `
        })

    }
    movie[indexMovie].title = req.body.title
    movie[indexMovie].releaseDate = req.body.releaseDate
    

    res.status(200).json({
        movieList: movie[indexMovie],
        massage : "editted succes"
    })
}


exports.deleteMovies = (req,res) => {
    const ID = parseInt(req.params.id)
    const indexMovie = movie.findIndex((item) => item.id == ID)
    
    console.log(indexMovie);

  movie.splice(indexMovie, 1)
    

    res.status(200).json({
        massage : `id: ${ID} deleted succes`
    })
}


