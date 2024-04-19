const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       return cb(null, "../public/images");
    },
    filename: function (req, file, cb) {
    //   return  cb(null, file.fieldname + "-" + Date.now());
      return  cb(null, `${file.fieldname}_${Date.now()}`);
    },
  });
  
export const upload = multer({ storage });