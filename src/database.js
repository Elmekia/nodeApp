const mongoose = require('mongoose')

const { TIENDA_APP_MONGODB_HOST, TIENDA_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${TIENDA_APP_MONGODB_HOST}/${TIENDA_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DataBase is connected'))
    .catch(err => console.log(err));
