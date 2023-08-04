const express = require('express');
const { cloudinary } = require('../utils/cloudinary');
const Product = require('../models/product');

const router = express.Router();

// CREATE

const createNewProduct = async (req, res) => {
    const { name, desc, status, quantity, invoicePrice, price, image, supplier } = req.body;
    try {
        if (image) {
            const uploadedImage = await cloudinary.uploader.upload(image, {
                upload_preset: "product_images"
            })

            if (uploadedImage) {
                const product = new Product({
                    name,
                    desc,
                    status,
                    quantity,
                    invoicePrice,
                    price,
                    image: uploadedImage,
                    supplier
                })

                const savedProduct = await product.save();
                req.status(200).json(savedProduct);
            }
        }
    } catch(err) {
        console.log(err)
        res.status(400).json({error: err.message})
    }
}

// READ

const getAllProducts = async (_, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
        res.status(400).json({error: err.message})
    }
}

router.post('/', createNewProduct);
router.get('/', getAllProducts);

module.exports = { router };