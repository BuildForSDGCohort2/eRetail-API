const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const indexRoute = require('./src/routes/index');
const authRoutes = require('./src/routes/auth');
const userRoutes = require('./src/routes/user');
// import routes
// app
const app = express();
// // db
// mongoose
//     .connect(process.env.DATABASE, {
//         useNewUrlParser:true,
//         useCreateIndex:true,
//         useUnifiedTopology:true
//     })
//     .then(()=>console.log('Database connection is Up'));

// middleware functions 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(expressValidator());
app.use(cors());

// home route
app.use('/', indexRoute);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

// routes 

const port = process.env.PORT ||  5000;
app.listen(port, ()=> {
    console.log(`Server is up and running on port ${port}`);
});