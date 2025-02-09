import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

/**
 * Handle single file upload.
 */
export const uploadSingle = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse("Please upload a file", 400));
  }

  res.status(200).json({
    success: true,
    data: {
      url: req.file.path,
      filename: req.file.filename,
    },
  });
});

/**
 * Handle multiple files upload.
 */
export const uploadMultiple = asyncHandler(async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return next(new ErrorResponse("Please upload at least one file", 400));
  }

  const urls = req.files.map(file => ({
    url: file.path,
    filename: file.filename,
  }));

  res.status(200).json({
    success: true,
    data: urls,
  });
});