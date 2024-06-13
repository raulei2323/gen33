REACT

-Es una libreria javascript (No es un framwork)
-Se encarga de manejar la interfaz de usuario (UI)
-Basado en componentes
-Mejora la reusabilidad
-Mejora la legibilidad
-Mas facil de escalar
-Ma facil de probar 
-Mas facil de colaborar



-React es Javascript
-Usamos JSX(no es HTML)
-Necesita ser "transpilado"
-Necesitamos herramientas de procesamiento
        -Bundlers como: Webpack/esbuild/rollup/parcel
        -Compiladores y transpiladores como: Babel o swc


Comando para iniciar un nuevo proyecto en vite, crea una carpeta asi que no es necesario crearla nosostros.
npm create vite@latest

react three fibber animaciones 3d y videojuegos

Comando npm run dev para levantar la aplicacion de ejemplo abriendo el browser el puerto indicado

Para deshabilitad Javascript en el navegador(Brave)
Entramos en las herramientas de desarrollador y en la terminal pulsamos ctrl shift + p y escribimos la palabra disables esto hace que se muestre la opcion "disable javascript" pulsamos y recargamos

<!-- ! todos los componentes de react son funciones -->
React solo reconoce como funciones a los componentes que empiezan con una mayuscula....
Asi que todos los componentes deberian empezar con una letra mayuscula en el nombre
en el return debemos poner el html que va con ese componente
y se debe de exportar la funcion
Todos los componentes son funciones que retornan jsx

COn jsx se puede poner codigo javascript en elhtml del jsx y todo el codigo javascript van en el jsk dentro de llaves

<!-- *Los componontes no pueden retornar mas de un solo elemennto html pero ese elemto si puede tener varios hijos y toda una estructura compleja, pero en realidad solo esta retornando un solo elemento html -->

<!-- *El archivo main es donde todo comienza -->