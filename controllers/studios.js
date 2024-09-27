

// const connection = require("../db/connection")
const { studios,movies } = require("../models");


exports.getStudiosFilm = async (req, res) => {

    try {
        const result = await studios.findAll() //buat get semua keyword pada data movies
        // console.log(result);
        // const resulty = await studios.findAll({
        //     attributes: [ // buat ngambil sebagian keyword
        //         "title"
        //     ]
        // });
        const resultyy = await studios.findAll({
            include: [{
                model: movies,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
            }]
        });
        // console.log(resultyy.movies);
        
        res.status(200).json({
            codeStatus: "200",
            studios: resultyy,
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

}

exports.getStudiosById = async (req, res) => {
    const ID = parseInt(req.params.id)
    // const findMoviesById = movie.find((item) => item.id == ID)//output  object
    try {

        // const findId = await movies.findByPk(ID);
        const findIdd = await studios.findOne({ where: { id: ID } });
        if (findIdd) {
            res.status(200).json({
                code: 200,
                findIdd,
                message: "studio found",
            });
        } else {
            res.status(404).json({
                code: 404,
                message: `studios id = ${ID} is not found`,
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

exports.insertStudios = async (req, res) => {


    try {

        const newStudio = {
            studioName: req.body.studioName,
            address: req.body.address,
        }

        const result = await studios.create(newStudio)

        // console.log(result);

        res.status(201).json({ //status insert biasanya 201
            code: 201,
            productionHouse: result,
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

exports.deleteStudios = async (req, res) => {
    const ID = parseInt(req.params.id);

    try {
        const studioToDelete = await studios.findByPk(ID);

        // Mengecek apakah film ada?
        if (!studioToDelete) {
            return res.status(404).json({
                code: 404,
                message: `id: ${ID} is not found`
            });
        }


        await studios.destroy({
            where: { id: ID }
        });

        // ngirim data ke respon.json
        res.json({
            codeStatus: 200,
            deletedStudio: studioToDelete, // Mengembalikan data film yang dihapus
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
