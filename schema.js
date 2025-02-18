const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(10).required(),
        price: Joi.number().positive().required(),
        image: Joi.object({
            url: Joi.string().uri().allow("")
        }).optional(),
        country: Joi.string().required(),
        location: Joi.string().required()
    }).required()
});
const reviewSchema=Joi.object({
      review:Joi.object({
            rating:Joi.number().min(1).max(5).required(),
            comment:Joi.string().required(),
      }).required()
});

module.exports = { listingSchema, reviewSchema };