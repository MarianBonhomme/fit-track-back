const multer = require('multer');

const storage = (subfolder) => multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `uploads/${subfolder}`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = (subfolder) => multer({ storage: storage(subfolder) });

module.exports = upload;