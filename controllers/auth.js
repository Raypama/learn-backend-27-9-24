const { user } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {


    const { userName, email, password, address } = req.body
    const saltRound = 10 // waktu hash/encrypt password perdetik -10 hash perdetik
    const encryptPassword = bcrypt.hashSync(password, saltRound)

    // console.log(password, 'without encrypt');
    // console.log(encryptPassword, 'with encrypt');

    const newUser = {
        userName,
        email,
        password: encryptPassword,
        address
    }

    const result = await user.create(newUser)

    // console.log(result);

    res.status(201).json({ //status insert biasanya 201
        code: 201,
        users: result,
        massage: "add to user succes"
    })

}


exports.login = async (req, res) => {


    const { userName, email, password, address } = req.body
    const users = await user.findOne({ where: { email } })

    //untuk kondisi database tabel user- email ada atau engga
    if (!users) {
        return res.status(404).json({
            code: 404,
            message: 'email atau password false',
            testing: 'mail false'
        })
    }

    const isMatch = bcrypt.compareSync(password, users.password)

    //buat compare password di tabel user database sama/ada atau engga
    if(!isMatch){
        return res.status(400).json({
            code: 400,
            message: `email atau password false`,
            testing: 'pasw false'
        })
    }


    const secretKey = process.env.SECRET_KEY
    const accessToken = jwt.sign({
        id: users.id,
        userName: users.userName,
        email: users.email
    }, secretKey, {expiresIn: '10m'})



    res.status(201).json({ //status insert biasanya 201
        code: 201,
        data: {
            id: users.id,
            userName: users.userName,
            email: users.email,
            token: accessToken
        },
        massage: "login succes"
    })

}
