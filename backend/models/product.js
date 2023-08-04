const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30},
    desc: { type: String , minlength: 5, maxlength: 300 },
    status: ['Ordered', 'Stored', 'Returning', 'Breakage', 'Prep', 'Sold'],
    quantity: { type: Number, required: true , min: 0 },
    invoicePrice: { type: Number , min: 0 },
    price: { type: Number, min: 0},
    image: [{ type: Object }],
    supplier: [{ type: Object, required: true }]
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Product', ProductSchema)