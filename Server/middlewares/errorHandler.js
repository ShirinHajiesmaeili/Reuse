export const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  if (process.env.NODE_ENV !== "production") {
    res.status(err.statusCode || 500).json({
      message: err.message,
      stack: err.stack,
    });
  } else {
    res
      .status(err.statusCode || 500)
      .json({ message: "An error occurred\nError: #3816" });
  }
};
