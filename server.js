const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const mongooseURL = process.env.mongoURI;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const Neta = require('./api/models/kynModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(mongooseURL, connectionParams)
    .then(() => console.log('Connected to mongoose database'))
    .catch(err => console.log(`Error connecting to mongooseBD. \n${err}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/kynRoute');
routes(app);

app.listen(port);

console.log('app started at:' + port);