import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API-Dokumentation für deine Express-App",
    },
    servers: [
      {
        url: `http://localhost:${process.env.REMPORT || 3000}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // Pfade zu den JS-Dateien, in denen die Swagger-Kommentare stehen
  apis: [
    "./routers/index.js",
    "./routers/authRouter.js",
    "./routers/cartRouter.js",
    "./routers/categoryRouter.js",
    "./routers/productRouter.js",
    "./routers/zipcodesRouter.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
