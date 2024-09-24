/* const { request } = require("express"); */

// const movie = [
//     {
//         id: 1,
//         title: "Ex-man",
//         releaseDate: 2009
//     },
//     {
//         id: 2,
//         title: "ruby golf",
//         releaseDate: 2019
//     },
//     {
//         id: 3,
//         title: "kick andy's",
//         releaseDate: 2016
//     },
//     {
//         id: 4,
//         title: "liputan6",
//         releaseDate: 2020
//     }

// ]

// const connection = require("../db/connection")
const { where } = require("sequelize");
const { movies } = require("../models")
exports.getMovies = async (req, res) => {
    try {
        const result = await movies.findAll() //buat get semua keyword pada data movies
        const resulty = await movies.findAll({
            attributes: [ // buat ngambil sebagian keyword
                "title"
            ]
        });
        const resultyy = await movies.findAll({
            attributes: { // buat ngecualiin sebagian keyword
                exclude: ["title"]
            }
        });

        res.status(200).json({
            codeStatus: "200",
            movieList: result,
            message: "success"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codeStatus: "500",
            message: "Server error",
            error: error.message
        });
    }
};

exports.getMoviesById = async (req, res) => {
    const ID = parseInt(req.params.id)
    // const findMoviesById = movie.find((item) => item.id == ID)//output  object
    try {

        const findId = await movies.findByPk(ID);
        // const findIdd = await movies.findOne({ where: {id:ID} });
        if (findId) {
            res.status(200).json({
                code: 200,
                findId,
                message: "Movie found",
            });
        } else {
            res.status(404).json({
                code: 404,
                message: `movies id : ${ID} is not found`,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "An error occurred"
        });
    }
}




exports.insertMovies = async (req, res) => {


    try {

        const newMovie = {
            title: req.body.title,
            genre: req.body.genre,
            release_years: parseInt(req.body.release_years),
            studios_id: req.body.studios_id
        }

        const result = await movies.create(newMovie)

        // console.log(result);

        res.status(201).json({ //status insert biasanya 201
            code: 201,
            movieList: result,
            massage: "add to movie list succes"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "An error occurred"
        });
    }


}


exports.editMovies = async (req, res) => {
    const ID = parseInt(req.params.id)
    const updateMovie = {
        title: req.body.title,
        genre: req.body.genre,
        release_years: parseInt(req.body.release_years),
        studios_id: req.body.studios_id
        // ID: parseInt(req.params.id)
    }
    
// console.log(updateMovie);

    try {

        const result = await movies.update(updateMovie, { where: { id: ID } })


        if (result[0] === 0) { // Sequelize `update` mengembalikan array, elemen pertama adalah jumlah baris yang diperbarui
            return res.status(404).json({
                code: 404,
                message: `id: ${ID} is not found`
            });
        }
        //hanya nampilin saat di update pada respon.json
        const updatedMovie = await movies.findOne({ where: { id: ID } });
        res.status(200).json({
            codeStatus: 200,
            movieUpdated: updatedMovie,
            massage: "succes"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "An error occurred"
        });
    }
}


exports.deleteMovies = async (req, res) => {
    const ID = parseInt(req.params.id);

    try {
        const movieToDelete = await movies.findByPk(ID);

        // Mengecek apakah film ada?
        if (!movieToDelete) {
            return res.status(404).json({
                code: 404,
                message: `id: ${ID} is not found`
            });
        }

        
        await movies.destroy({
            where: { id: ID }
        });

        // ngirim data ke respon.json
        res.json({
            codeStatus: 200,
            deletedMovie: movieToDelete, // Mengembalikan data film yang dihapus
            message: "deleted success"
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "An error occurred"
        });
    }
}
