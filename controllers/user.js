const { user, transaction } = require("../models");


exports.getUser = async (req, res) => {
    console.log(req.user);

    try {
        const result = await user.findAll() //buat get semua keyword pada data movies
        // console.log(result);
        // const resulty = await user.findAll({
        //     attributes: [ // buat ngambil sebagian keyword
        //         "title"
        //     ]
        // });
        const resultyy = await user.findAll({
            attributes: {
                exclude: ['password']
            },

            include: [{
                model: transaction,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }]
        });
        // console.log(resultyy.movies);

        res.status(200).json({
            codeStatus: "200",
            user: resultyy,
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

exports.getUserById = async (req, res) => {
    const ID = parseInt(req.params.id)
    // const findMoviesById = movie.find((item) => item.id == ID)//output  object
    try {

        // const findId = await movies.findByPk(ID);
        const findIdd = await user.findOne({ where: { id: ID } });
        if (findIdd) {
            res.status(200).json({
                code: 200,
                findIdd,
                message: "user found",
            });
        } else {
            res.status(404).json({
                code: 404,
                message: `user id = ${ID} is not found`,
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

exports.insertUser = async (req, res) => {


    try {

        const newUser = {
            userName: req.body.userName,
            address: req.body.address,
        }

        const result = await user.create(newUser)

        // console.log(result);

        res.status(201).json({ //status insert biasanya 201
            code: 201,
            users: result,
            massage: "add to user succes"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "An error occurred"
        });
    }

}