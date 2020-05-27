const mongoose = require('mongoose')
const crypto = require('crypto');
const Grid = require("gridfs-stream");
const GridFsStorage = require("multer-gridfs-storage");

const { TIENDA_APP_MONGODB_HOST, TIENDA_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${TIENDA_APP_MONGODB_HOST}/${TIENDA_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DataBase is connected'))
    .catch(err => console.log(err));

    //create a mongoDB connection
    
    const conn = mongoose.createConnection(MONGODB_URI);

    //innit gfs
    let gfs;

    conn.once('open',() => {
        gfs = Grid(conn.db, mongoose.mongo);
        gfs.collection('uploads');
    })

    //create storage engine
    const storage = new GridFsStorage({
        url: MONGODB_URI,
        file: (req, file) => {
            return new Promise((resolve, reject) => {
                crypto.randomBytes(16, (err, buf) => {
                    if (err) {
                        return reject(err);
                    }
                    const filename = buf.toString('hex') + Path.extname(file.originalname);
                    const fileInfo = {
                        filename: filename,
                        bucketName: 'uploads'
                    };
                    resolve(fileInfo);
                });
            });
        }
    }) 
    
    module.exports= gfs;
    module.exports= storage;
