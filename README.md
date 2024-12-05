# OtakuHaven - Aplicación de Anime en React

OtakuHaven es una aplicación web desarrollada con React y Vite que permite a los usuarios ver un listado de animes existentes y guardar sus animes favoritos. 

La aplicación ofrece funcionalidades como filtro de animes por ranking, visualización de detalles, y la posibilidad de agregar animes a una lista de favoritos. la aplicacion tiene implementada paginacion y permite desplazarse a lo largo de las diferentes listas.

## Características

- **Exploración de Animes**: Navega a través de una lista de animes obtenida de la API de Jikan.
- **Detalles del Anime**: Visualiza información detallada sobre cada anime, incluyendo su sinopsis y calificación.
- **Favoritos**: Agrega animes a tu lista de favoritos para un acceso rápido.
- **Formulario de Contacto**: Envía mensajes a través del formulario de contacto integrado.
- **Filtro por ranking de calificacion**: botón para ordenar por calificacion de mayor a menor y resetear para volver al orden inicial.
- **Paginacion**: por cada pagina se pueden ver 25 items de anime, sin embargo se puede navegar a traves de las paginas para conocer todos los animes. 

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **React Router**: Librería para el manejo de rutas en aplicaciones React.
- **Jikan API**: API para obtener información sobre animes.
- **Vitest** : Herramienta para realizar test ( en este caso se aplicaron a ContactForm.jsx y Navbar.jsx)

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/otakuhaven.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd otakuhaven
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso
Para iniciar la aplicación en modo de desarrollo, ejecuta:
```sh
npm run dev
```
Esto abrirá la aplicación en `http://localhost:5174/`.

## Comandos Disponibles

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.
- `npm run lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- `npx vitest`: Ejecuta los test realizados en el formulario y renderizado de navbar.

# Estructura de Carpetas y Archivos

## Descripción de Carpetas y Archivos

### Raíz del Proyecto
- **.gitignore**: Archivo que especifica los archivos y directorios a ignorar por Git.
- **eslint.config.js**: Configuración de ESLint para mantener la calidad del código.
- **index.html**: Archivo HTML principal utilizado por la aplicación.
- **package.json**: Archivo de configuración de npm que incluye las dependencias y scripts del proyecto.
- **vite.config.js**: Configuración de Vite para la compilación y el servidor de desarrollo.

### Carpetas Principales
- **public/**: Contiene archivos estáticos que se sirven directamente, como imágenes y otros recursos.

- **src/**: Carpeta principal del código fuente de la aplicación.
  - **App.jsx**: Componente principal que sirve como punto de partida de la aplicación.
  - **assets/**: Carpeta que contiene recursos como imágenes y otros archivos estáticos utilizados en la aplicación.
  - **components/**: Contiene componentes reutilizables.
    - **AnimeDetails.jsx**: Componente para mostrar los detalles de un anime específico.
    - **AnimeList.jsx**: Componente para mostrar la lista de animes.
    - **ContactForm.jsx**: Componente para el formulario de contacto.
    - **Navbar.jsx**: Componente para la barra de navegación.
  - **context/**: Contiene contextos de React utilizados para la gestión de estado.
    - **FavoritesContext.jsx**: Contexto para manejar la lista de animes favoritos.
  - **index.css**: Archivo de estilos globales de la aplicación.
  - **main.jsx**: Archivo principal que inicia la aplicación.
  - **pages/**: Contiene los componentes de las páginas principales.
    - **Contact.jsx**: Página de contacto.
    - **Favorites.jsx**: Página de favoritos.
    - **Home.jsx**: Página de inicio.
    - **Information.jsx**: Página de información.
  - **styles/**: Contiene archivos CSS específicos.
    - **App.css**: Archivo de estilos principal de la aplicación.
  - **test/**: Contiene archivos relacionados con las pruebas.
    - **ContactForm.test.jsx**: Pruebas unitarias para el componente `ContactForm`.
    - **Navbar.test.jsx**: Pruebas unitarias para el componente `Navbar`.
    - **setupTest.js**: Configuración inicial para las pruebas.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Agradecimientos

- [Jikan API](https://jikan.moe) por proporcionar los datos de los animes.
- [React](https://reactjs.org/) y [Vite](https://vitejs.dev/) por las herramientas de desarrollo.

¡Gracias por visitar OtakuHaven!
```
By: Jenny Múnera Serna
