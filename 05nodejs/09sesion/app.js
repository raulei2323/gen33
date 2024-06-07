const express = require('express');

const server = express();
server.use(express.json());

const koders = [];

server.get('/koders', (request, response) => {
  response.json({
    message: 'Esta es la lista de los koders',
    koders: koders
  });
});

server.post('/koders', (request, response) => {
  const newKoderName = request.body.name
  const newKoderGender = request.body.gender
  const newKoderId = request.body.id

  const newKoder = {
      name: newKoderName,
      genero: newKoderGender,
      id: newKoderId
  }

  
  
  if (!newKoder) {
    response.status(400);
    response.json({
      message: 'Un nuevo koder es requerido '
    });
    return;
  }
  

  koders.push(newKoder);

  response.json({
    message: 'Nuevo Koder anadido',
    koders: koders
  });
});

server.delete('/koders/:id', (request, response) => {
  const idToDelete = request.params.id;
  const idAsInteger = parseInt(idToDelete)

  if ( idToDelete === koders.id) {

    koders.splice(idAsInteger, 1);
  
    response.json({
      message: 'Koder Eliminado',
      koders: koders
    })
  } else {
    response.status(400)
        response.json({
            message: "Id invalido usa el id de un koder para eliminarlo"
        })
        return
  }
  
});


server.listen(8080, () => {
  console.log('server running in port 8080');
});
