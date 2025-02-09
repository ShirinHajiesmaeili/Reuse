import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

/**
 * Configure Cloudinary with credentials.
 */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Configure storage settings for uploaded files.
 */
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "reuse-app", // Your cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

export { cloudinary, storage };