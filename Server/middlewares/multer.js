import multer from "multer";
import { storage } from "../config/cloudinary.js";
import ErrorResponse from "../utils/ErrorResponse.js";

/**
 * Configure Multer middleware for handling file uploads.
 */
const upload = multer({
  storage: storage, // Using Cloudinary storage
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new ErrorResponse("Only image files are allowed!", 400), false);
    }
    cb(null, true);
  },
});

export default upload;