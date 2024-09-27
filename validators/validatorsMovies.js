const Joi = require('joi');

const movieSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'title is required'
    }),
    genre: Joi.string().required().messages({
        'string.empty': 'genre is required'
    }),
    release_years: Joi.number().required().messages({
        'string.empty': 'release_years is required'
    }),
    studios_id: Joi.number().required().messages({
        'string.empty': 'genre is required'
    })
})


//middleWare untuk error

const validateMovie = (req,res, next) => {
    const { error } = movieSchema.validate(req.body,{ abortEarly: false});
    //abortEarly: false untuk mendapatkan semua kesalahan sekaligus

    if (error) {
        console.log(error.details);//log semua details kesalahan
        return res.status(400).json({error: error.details.map(err=>err.message)});
    }
    next();
}

module.exports = {validateMovie};