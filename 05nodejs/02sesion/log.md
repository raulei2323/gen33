Node

Comando para inicializar NODE: npm init 
npm init -y     para aceptar todas las configuraciones por defecto

{
  "name": "first-node-proyect",
  "version": "1.0.0",
  "description": "\"This is my first node project\"",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [
    "node",
    "first"
  ],
  "author": "Raul Elizalde",
  "license": "ISC"
}
Formato del package.json por ahora

Y esta configuracion siempre se debe revisar para poner los scripts requeridos

Cuando empecemos a trabajar en algun proyecto ya iniciado, debemos del el archivo package.json para ver la version, las dependencias, los scripts y demas configuraciones que deberiamos revisar

<!-- !Un proyecto que bajemos de github o que nos provean desde un trabajo no traera la carpeta node-modules pero si el archivo package.json
para instalar las dependencias que el pakcage.json del proyecto necesita utilizaremos el siguiente comando
!npm install     y comenzara a instalar por si mismo todas las dependencias listadas en el archivo package.json -->

<!-- !El archivo package-lock.json -->
DEbe ser versionado (que  si sea agregado a GIT)
No debe borrarse
En caso de tener algun conflicto de git, se puede resolver corriendo npm install para generarlo nuevamente
En esta clase se uso un poco el paquete prompt-sync para obtener informacion ingresada por el usuario.


