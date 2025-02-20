const express = require("express");
const app = express();

const { infoCursos } = require("./datos/cursos.js");

// Routers

const routerProgramacion = require("./routers/programacion.js");
app.use("/api/cursos/programacion", routerProgramacion);

const routerMatematicas = require("./routers/matematicas.js");
app.use("/api/cursos/matematicas", routerMatematicas);

// Routing

app.get("/", (req, res) => {
  res.send("Servidor de cursos.");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});

// https://www.youtube.com/watch?v=1hpc70_OoAg&t=22479s
