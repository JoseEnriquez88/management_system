import express from "express";
import cors from "cors";
import morgan from "morgan";
import mainRouter from "./routes/mainRouter.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../swagger.js";

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(
  cors({
    origin: "http://localhost:5173", //todo: cuando pase a produccion lo cambio a la url del front
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);
server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: "Documentación API - Sistema de Gestión de Órdenes",
  })
);
// server.use(express.urlencoded({ extended: true })); //* Para poder recibir datos en el body de las peticiones POST y PUT
// server.use(express.static("public")); //* Para poder recibir archivos estáticos (imagenes, etc) desde la carpeta public
server.get("/api/v1/openapi.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
server.use(mainRouter);

export default server;
