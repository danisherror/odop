const mongoose = require('mongoose');
const Artist = require('./artist')

const Products = mongoose.Schema({

    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
    },
    product: [
        {
            name: {
                type: String
            }
            ,
            description: {
                type: String
            }
            ,
            image: {
                type: String
            }
            ,
            price: {
                type: Number
            }
            ,
            instock: {
                type: Number
            },
            selled:{
                type:Number,
                default:0
            },
            url:{
                type:String
            }
        }
    ]
})

module.exports = mongoose.model('Products', Products);