Iniciamos el proyecyo con el comando para inicializar vite(herramienta de compilación para react)
Esto va a crear una carpeta asi que no es necesario crearla nosostros.

npm create vite@latest

Indicaremos el nombr del proyecto y en las opciones elegiremos react y javascript 

Y nos movemos en la terminal a la carpeta que creo el comando.

En el archivo .eslintrc.cjs deberiamos agregar una linea     'react/prop-types': 'off'
al final del archivo, eso evitara que lintern nos de avisos de advertencia cuando usemos los props.
el archivo final deberia quedar como esta especificado en el archivo eslintrcexample.md

Para este proyecto usare el framework Tailwindcss para implementar los estilos de la pagina.

Para esto y una vez realizados los pasos anteriores deberemos installar el framework de la siguiente forma
docu: https://tailwindcss.com/docs/guides/vite

En la terminal situandonos en la carpeta raiz del proyecto utilizaremos el siguiernte comando:
npm install -D tailwindcss postcss autoprefixer  ////////////(instala las 3 librerias que utiliza tailwindcss)
Despues:
npx tailwindcss init -p

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

dd the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file

@tailwind base;
@tailwind components;
@tailwind utilities;

Hay que limpiar los archivos porqu tienen la muestra de Vite...

index.css //solo debe tener las 3 lineas de import de tailwind
app.jsx //puede quedar limpia o con las lineas para exportar e importar
app.css //debe quedar limpia
index.html //con una estructurra basica html y con el scrpt     <script type="module" src="/src/main.jsx"></script>
 y eliminar de la carpeta public los svgs indeseados



