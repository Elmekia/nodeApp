const express = require('express');
const morgan = require('morgan')

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

//  Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

// Global Variables

// Routes
app.use('/api', require('./routes/index.routes'));
app.use('/api/login', require('./routes/login.routes'));
app.use('/api', require('./routes/producto.routes'));

module.exports= app;