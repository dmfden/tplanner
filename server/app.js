const express = require('express');
var cors = require('cors')
const rootRouter = require('./routes/rootRouter');
const {errorHandler} = require('./errorHandler');
const app = express();

const bodyParser = express.json();
app.use(cors());
app.use(bodyParser);
app.use('/api', rootRouter);

app.use(errorHandler);

module.exports = app;