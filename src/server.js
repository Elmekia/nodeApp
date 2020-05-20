const express = require('express');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

//  Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global Variables

// Routes


module.exports= app;