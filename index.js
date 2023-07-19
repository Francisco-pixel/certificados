const express = require('express');
const frutas=[
    {'nombre':'Pera','precio':'45'},
    {'nombre':'Manzana','precio':'70'},
    {'nombre':'Aguacate','precio':'80'},
    {'nombre':'Sandía','precio':'75'}
];
//const data = frutas; // Importa los datos del archivo JSON
const data = require('./data/api.json'); // Importa los datos del archivo JSON

const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades
const ruta='/certificados/';
app.get(ruta, (req, res) => {
  res.json(data); // Envía los datos como respuesta en formato JSON
});
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
app.get(ruta+':index/', (req, res) => {
    const { index } = req.params; // Obtiene el valor del parámetro "index" de la ruta
    const item = data[index]; // Obtiene el objeto correspondiente según el índice proporcionado
  
    if (item) {
      res.json(item); // Envía todos los datos del objeto como respuesta en formato JSON
    } else {
      res.status(404).send('Objeto no encontrado'); // Devuelve un mensaje de error si no se encuentra el objeto con el índice especificado
    }
  });
  
app.get(ruta+':index/:property', (req, res) => {
    const { index, property } = req.params; // Obtiene los valores de los parámetros "index" y "property" de la ruta
    const item = data[index]; // Obtiene el objeto correspondiente según el índice proporcionado
  
    if (item) {
      const value = item[property]; // Obtiene el valor de la propiedad especificada
  
      if (value !== undefined) {
        res.send(value); // Envía el valor de la propiedad como respuesta
      } else {
        res.status(404).send('Propiedad no encontrada'); // Devuelve un mensaje de error si la propiedad no existe en el objeto
      }
    } else {
      res.status(404).send('Objeto no encontrado'); // Devuelve un mensaje de error si no se encuentra el objeto con el índice especificado
    }
  });
  // Agregar nuevo objeto al archivo JSON
