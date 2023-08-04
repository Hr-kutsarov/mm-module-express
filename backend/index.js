// import Server
const express = require('express');

// import DB client
const mongoose = require('mongoose');

// import external libs
const cors = require('cors');
const helmet = require('helmet');
require('colors');

// load environmental variables
require('dotenv').config();

// import routes
const productRoutes = require('./routes/products')

const app = express();
const PORT = process.env.PORT || 5050;

app.use((req, res, next) => {
    console.log(`${req.method} method on path ${req.path}`.cyan)
    next()
})

// Middleware

app.use(cors());
app.use(express.json());
// app.use(helmet()); -> disabled for now

// Routes

app.use("/api/products", productRoutes)

// RUN

const runServer = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log(`Database connected!`.green)
                app.listen(PORT, () => {
                    console.log(`Server running on port ${PORT}`.bgGreen)
                })
            })
            .catch(err => {
                console.log(err)
            })
        
    } catch (err) {
        console.log(err)
    }
}

runServer();
