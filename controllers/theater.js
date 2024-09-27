const { theater } = require("../models");


exports.getTheater = async (req, res) => {

    try {
        const result = await theater.findAll() //buat get semua keyword pada data movies
        // console.log(result);
        // const resulty = await theater.findAll({
        //     attributes: [ // buat ngambil sebagian keyword
        //         "title"
        //     ]
        // });
        const resultyy = await theater.findAll();
        // console.log(resultyy.movies);
        
        res.status(200).json({
            codeStatus: "200",
            theater: result,
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

exports.getTheaterById = async (req, res) => {
    const ID = parseInt(req.params.id)
    // const findMoviesById = movie.find((item) => item.id == ID)//output  object
    try {

        // const findId = await movies.findByPk(ID);
        const findIdd = await theater.findOne({ where: { id: ID } });
        if (findIdd) {
            res.status(200).json({
                code: 200,
                findIdd,
                message: "theater found",
            });
        } else {
            res.status(404).json({
                code: 404,
                message: `theater id = ${ID} is not found`,
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

exports.insertheater = async (req, res) => {


    try {

        const newTheater = {
            theaterName: req.body.theaterName,
        }

        const result = await theater.create(newTheater)

        // console.log(result);

        res.status(201).json({ //status insert biasanya 201
            code: 201,
            theaters: result,
            massage: "add to theater list succes"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "An error occurred"
        });
    }

}