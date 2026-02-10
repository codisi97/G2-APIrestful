const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


// Es nuestra base de datos 
const libros= [
  { "id": 1, "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "anioPublicacion": 1967 },
  { "id": 2, "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "anioPublicacion": 1949 },
  { "id": 3, "titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "genero": "Novela", "anioPublicacion": 1605 },
  { "id": 4, "titulo": "El principito", "autor": "Antoine de Saint-Exupéry", "genero": "Fábula", "anioPublicacion": 1943 },
  { "id": 5, "titulo": "Crónica de una muerte anunciada", "autor": "Gabriel García Márquez", "genero": "Novela", "anioPublicacion":1981 },
  { "id": 6, "titulo": "Fahrenheit 451", "autor": "Ray Bradbury", "genero": "Ciencia ficción", "anioPublicacion": 1953 },
  { "id": 7, "titulo": "El código Da Vinci", "autor": "Dan Brown", "genero": "Suspenso", "anioPublicacion": 2003 },
  { "id": 8, "titulo": "La sombra del viento", "autor": "Carlos Ruiz Zafón", "genero": "Misterio", "anioPublicacion": 2001 },
  { "id": 9, "titulo": "Harry Potter y la piedra filosofal", "autor": "J. K. Rowling", "genero": "Fantasía", "anioPublicacion": 1997 },
  { "id": 10, "titulo": "Los juegos del hambre", "autor": "Suzanne Collins", "genero": "Ciencia ficción", "anioPublicacion": 2008 },
  { "id": 11, "titulo": "La comunidad del anillo","autor": "JRR Tolkien","genero": "Fantasia", "anioPublicacion": 1954 }
];

//Aqui deben de ir los apis

app.get('/api/books',(req,res)=>{
  res.json({status:200,message:'Success',data:libros});
});

app.get('/api/books/:id',(req,res)=>{
  const titulo = req.params;
  const id = parseInt(req.params.id);

  const libro = libros.find(lib => lib.id === id);
  res.json({status:200,message:'Success',data:libro});

});

app.put('/api/books/:id', (req, res) => {
  const libroActualizado = req.body;       
  const id = parseInt(req.params.id);      

  let isExists = false;

  libros.forEach(lib => {
    if (lib.id === id) {
      isExists = true;

      lib.titulo = libroActualizado.titulo;
      lib.autor = libroActualizado.autor;
      lib.genero = libroActualizado.genero;
      lib.anioPublicacion = libroActualizado.anioPublicacion;
    }
  });

  if (isExists) {
    res.status(200).json({status: 200,message: 'Libro actualizado.',data: libroActualizado});
  } else {
    res.status(404).json({status: 404,message: 'Libro no encontrado.'});
  }
});

app.delete('/api/books/:id',(req,res)=>{
  const id = parseInt(req.params.id);

  const filtroLibros = libros.filter(lib => lib.id !== id);

  if (filtroLibros.length !== libros.length){
    libros = filtroLibros;

    res.status(200).json({status:200, message:'Eliminado exitosamente...'});
    }else{
      res.status(404).json({status:404, message:'Libro no encontrado...'});
  }


});


app.listen(PORT,()=>{
  console.log(`El servidor esta escuchando en http://localhost:${PORT}`);

});