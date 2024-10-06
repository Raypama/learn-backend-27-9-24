// const deleteFile = require("../middlewares/deleteFile");
const { where } = require("sequelize");
const { TransactionNew, ProductTransaction, user, Product, } = require("../models");


exports.getTransactionNew = async (req, res) => {

    try {

        const result = await TransactionNew.findAll({
            attributes: {
                // exclude: ['createdAt','updatedAt']
            },
            include: [
                {
                    model: user,
                    as: 'user',
                    attributes: {
                        // exclude: ['createdAt','updatedAt']
                    }
                },
                {
                    model: Product,
                    attributes: {
                        // exclude: ['userId','createdAt','updatedAt' ]
                    },
                    through: {
                        model: ProductTransaction,
                        // attributes: 
                    },
                }
            ]
        })

        res.json({
            TransactionDetails: result,
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
}

// {
//     userId : ,
//     product : [
//         {productId:2,quantity:3},
//         {productId:2,quantity:3}
//     ]
// }
exports.insertTransactionNew = async (req, res) => {
    const { userId, product } = req.body
    try {

        if (!userId || !Array.isArray(product) || product.length === 0) {
            return res.status(400).json({ code: 400, message: 'userId and product is required' })
        }

        const findUser = await user.findByPk(userId)
        if (!findUser) {
            return res.status(400).json({ code: 400, message: 'userId not found' })
        }

        const newTransaction = await TransactionNew.create({
            userId: userId,
            transactionDate: new Date(),
        });

        let totalPrice = 0 // variabel untuk menyimpan data totalPrice

        for (const item of product)/* hati hati penamaaan */ {
            const productData = await Product.findByPk(item.productId)
            if (!productData) {
                return res.status(400).json({ code: 400, message: 'productId not found' })
            }
            if (productData.stock > item.quantity) {
                await Product.update({ stock: updateStock }, { where: { id: productData.id } })
            }else{
                return res.status(400).json({ code: 400, message: 'stock Gak cukup' })

            }
            const itemTotal = productData.price * item.quantity
            totalPrice += itemTotal

            // addProduct didapatkan dari asosiasi dari belongtomany
            await newTransaction.addProduct(productData, {
                through: { quantity: item.quantity }
            });

            const updateStock = productData.stock - item.quantity
           
        }



        newTransaction.totalPrice = totalPrice
        await newTransaction.save() // fungsinya untuk update total price

        res.status(201).json({
            userId,
            product,
            totalPrice,
            message: "success"
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })

    }
}
