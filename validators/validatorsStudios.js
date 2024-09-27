const Joi = require('joi');

const studioSchema = Joi.object({
    studioName: Joi.string().required().messages({
        'string.empty': 'title is required'
    }),
    address: Joi.string().required().messages({
        'string.empty': 'genre is required'
    })
})


//middleWare untuk error

const validateStudio = (req,res, next) => {
    const { error } = studioSchema.validate(req.body,{ abortEarly: false});
    //abortEarly: false untuk mendapatkan semua kesalahan sekaligus

    if (error) {
        console.log(error.details);//log semua details kesalahan
        return res.status(400).json({error: error.details.map(err=>err.message)});
    }
    next();
}

module.exports = {validateStudio};