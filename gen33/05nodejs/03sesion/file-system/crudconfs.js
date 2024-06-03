const fs = require('fs');

//?leer el contenido de un archivo
fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    throw err;
  }
  console.log(contenido);
});
//?renombrar un archivo 
fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Nombre cambiado exitosamente')

})
//?agregar contenido al final de un archivo
fs.appendFile('index.html', '<p>Hola</p>', (err)=>{
    if (err){
        throw err
    }
    console.log('Archivo actualizado.')
})
//?Reemplazar todo el contenido del archivo
fs.writeFile('index.html', 'Contenido nuevo',(err)=> {
    if(err){
        throw err
    }
    console.log('Contenido reemplazado exitosamente')
})

//? Eliminar archivos
//*Crear primero un archivo para eliminar, para asi evitar eliminar el index.html
fs.unlink('newfile.html', (err) => {
    if(err) {
        throw err
    }
    console.log('Archivo eliminado eliminado  exitosamente')
})
