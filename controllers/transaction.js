const { transaction, movies, user, theater } = require("../models");


exports.getTransaction = async (req, res) => {

    try {
        const result = await transaction.findAll() //buat get semua keyword pada data movies
        // console.log(result);
        // const resulty = await transaction.findAll({
        //     attributes: [ // buat ngambil sebagian keyword
        //         "title"
        //     ]
        // });
        const resultyy = await transaction.findAll({
            include: [{
                model: user,
                attributes: {
                    exclude: ['id','createdAt', 'updatedAt']
                }
            },
            {
                model: movies, // Relasi dengan model movie
                attributes: {
                    exclude: ['id','studios_id','createdAt', 'updatedAt'] // Jika ingin exclude beberapa field
                }
            },
            {
                model: theater, // Relasi dengan model movie
                attributes: {
                    exclude: ['id','studios_id','createdAt', 'updatedAt'] // Jika ingin exclude beberapa field
                }
            },
        ]
        });
        // console.log(resultyy.movies);

        res.status(200).json({
            codeStatus: "200",
            transaction: resultyy,
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

exports.getTransactionById = async (req, res) => {
    const ID = parseInt(req.params.id)
    // const findMoviesById = movie.find((item) => item.id == ID)//output  object
    try {

        const findId = await movies.findByPk(ID);
        // const findIdd = await transaction.findOne({ where: { id: ID } });
        if (findId) {
            res.status(200).json({
                code: 200,
                findId,
                message: "transaction found",
            });
        } else {
            res.status(404).json({
                code: 404,
                message: `transaction id = ${ID} is not found`,
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

exports.insertTransaction = async (req, res) => {


    try {

        const newTransaction = {
            user_id: req.body.user_id,
            theater_id: req.body.theater_id,
            movie_id: req.body.movie_id,
            price: req.body.price,
            quantity: req.body.quantity,
            total: {
                get() {
                    const price = this.getDataValue('price');
                    const quantity = this.getDataValue('quantity');
                    return price * quantity; // Menghitung total
                }
            }
        }

        const result = await transaction.create(newTransaction)

        // console.log(result);

        res.status(201).json({ //status insert biasanya 201
            code: 201,
            transaction: result,
            massage: "add the transaction succes"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "An error occurred"
        });
    }

}