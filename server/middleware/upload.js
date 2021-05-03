const path = require('path');
const moment = require('moment');
const multer = require('multer');

const storege = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve(__dirname, '../..', 'static'));
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${moment().format(DDMMYYYY - HHmmss_SSS)} `);
  },
});
const fileFilter = (req, file, cb){
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

module.exports = multer({
  storege,
  fileFilter,
  limits: { fieldSize: 1024 * 1024 * 5 },
});
