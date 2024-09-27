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


const { movies, studios } = require("../models");


exports.getMovies = async (req, res) => {
    try {
        // const result = await movies.findAll() //buat get semua keyword pada data movies
        // const resulty = await movies.findAll({
        //     attributes: [ // buat ngambil sebagian keyword
        //         "title"
        //     ]
        // });
        const resultyy = await movies.findAll({
            include: [{
                model: studios,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
            },
            // {
            //     model: transaction, // Relasi dengan model movie
            //     attributes: {
            //         exclude: ['createdAt', 'updatedAt'] // Jika ingin exclude beberapa field
            //     }
            // }
        ]
        });

        res.status(200).json({
            codeStatus: "200",
            movieList: resultyy,
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

        // const findId = await movies.findByPk(ID);
        const findIdd = await movies.findOne({ where: { id: ID } });
        if (findIdd) {
            res.status(200).json({
                code: 200,
                findIdd,
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
            studios_id: parseInt(req.body.studios_id)
        }

        const result = await movies.create(newMovie)

        // console.log(result);

        res.status(201).json({ //status insert biasanya 201
            code: 201,
            movieList: result,
            massage: "add to movie list succes"
        })

    } catch (error) {
        console.log(error.name === 'SequelizeUniqueConstraintError');
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                code: 400,
                error: error.errors[0].message,
                message: "the name in the title already exists in the movie database"
            });

        } else {
            return res.status(500).json({
                code: 500,
                message: "An error occurred"
            });
        }
    }

}


exports.editMovies = async (req, res) => {
    const ID = parseInt(req.params.id)
    const updateMovie = {
        title: req.body.title,
        genre: req.body.genre,
        release_years: req.body.release_years ? parseInt(req.body.release_years) : req.body.release_years,//(gabisa edit 1 kl ada methot convert pasrseInt)
        studios_id: req.body.studios_id ? parseInt(req.body.studios_id) : req.body.studios_id
        // ID: parseInt(req.params.id)
    }

    // console.log(updateMovie);

    try {

        const updatedMovie = await movies.findOne({ where: { id: ID } });
        if (!updatedMovie) { // Sequelize `update` mengembalikan array, elemen pertama adalah jumlah baris yang diperbarui
            return res.status(404).json({
                code: 404,
                message: `id: ${ID} is not found`
            });
        }


        const result = await movies.update(updateMovie, { where: { id: ID } })
        //hanya nampilin saat di update pada respon.json
        res.status(200).json({
            codeStatus: 200,
            movieUpdated: updatedMovie,
            massage: "succes"
        })

    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                code: 400,
                error: error.errors[0].message,
                message: "the name in the title already exists in the movie database"
            });

        } else {
            return res.status(500).json({
                code: 500,
                message: "An error occurred"
            });
        }
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
