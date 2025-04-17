const mongoose = require('mongoose'); // this is the mongoose library

const productSchema = mongoose.Schema( // this is the schema for the product
    {
        name: {
            type: String,
            required: true
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type:  Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        }
    }
);

const product = mongoose.model("Product", productSchema); // this is the model for the product
module.exports = product; // this is the export for the product