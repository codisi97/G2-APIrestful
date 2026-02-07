const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let libros = [
 { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Realismo mágico', fechaPublicacion: 1967 },
  { id: 2, titulo: '1984', autor: 'George Orwell', genero: 'Distopía', fechaPublicacion: 1949 },
  { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', genero: 'Novela', fechaPublicacion: 1605 },
  { id: 4, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', genero: 'Fábula', fechaPublicacion: 1943 },
  { id: 5, titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez', genero: 'Novela', fechaPublicacion:1981 },
  { id: 6, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', genero: 'Ciencia ficción', fechaPublicacion: 1953 },
];

// Aqui siguen los GET

//esto es el POST
app.post("./app.js", (req, res) => {
  const libroNuevo = req.body;

  if (!libroNuevo.titulo || !libroNuevo.autor || !libroNuevo.genero || !libroNuevo.fechaPublicacion) {
    return res.status(400).json({ messsage: 'Se requieren más datos' });
  }

  const nuevoId = libros.length > 0 ? libros[libros.length - 1].id + 1 : 1;
  libroNuevo.id = nuevoId;

  libros.push(libroNuevo);

  res.status(201).json(libroNuevo);
});

//Aqui va el Put y Delete

app.listen(PORT,()=>{
  console.log(`El servidor esta escuchando en http://localhost:${PORT}`);

});