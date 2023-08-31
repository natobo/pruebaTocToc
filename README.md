# PruebaTocToc 🚀

## Introducción 📋
Esta prueba se desarrollo con el fin de crear un proxy al API de marvel 

## Pasos para correr el proyecto 🦾

1. Clonar el repositorio

    ```bash
    git clone https://github.com/natobo/CloudbotCDK
    ```
2. Instalar módulos con npm

    ```bash
     npm install
    ```
3. Crear un archivo .env con las variables de entorno que usa la aplicación
    ```bash
    MARVEL_ROUTE=http://gateway.marvel.com/v1/public/comics
    PUBLIC_KEY=
    PRIVATE_KEY=
    PORT=3000
    ```
4. Hacer el build del proyecto de Typescript con npm
    ```bash
     npm run tsc
    ```
5. Ejecutar la aplicación
    ```bash
     npm run tsc
    ```
6. Importar las rutas de los endpoints de la carpeta testCollection con la extensión ThunderClient para realizar las peticiones GET Rest y probar la aplicación.
   
## Links relacionados 📖
- [API DOC marvel](https://developer.marvel.com/docs#!/public/getComicIndividual_get_7)
- [Extensión Thunder Client](https://www.thunderclient.com/)
