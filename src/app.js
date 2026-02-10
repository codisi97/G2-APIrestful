
//POST
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