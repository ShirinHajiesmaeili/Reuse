import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5173;

// Swagger UI Setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Swagger UI running at http://localhost:${port}/api-docs`);
});
