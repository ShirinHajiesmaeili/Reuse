import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Standalone Swagger UI for API Documentation",
    version: "1.0.0",
    description: "Standalone Swagger UI for your backend application",
  },
  servers: [
    {
      url: "http://localhost:5173", // Die URL deines API-Servers
      description: "Development Server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routers/*.js"], // Hier wird sichergestellt, dass alle Router berücksichtigt werden
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
