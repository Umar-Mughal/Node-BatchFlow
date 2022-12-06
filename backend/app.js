// Packages
const express = require('express');
let cors = require('cors')
// Routers
const formRouter = require('./routes/formRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors())

// Routes
app.use('/api/v1/forms', formRouter);

module.exports = app;
