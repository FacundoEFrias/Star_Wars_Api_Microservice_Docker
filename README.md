# API de Star Wars

Esta API proporciona acceso a información sobre personajes, películas y planetas del universo de Star Wars. Está construida utilizando las siguientes tecnologías:

- **Express:** Un framework de aplicación web para Node.js que se utiliza para crear el servidor web y gestionar las rutas de la API.

- **Node.js:** Un entorno de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.

- **MongoDB:** Una base de datos NoSQL utilizada para almacenar y gestionar los datos de la API.

- **Mongoose:** Una biblioteca de ODM (Object-Document Mapping) para MongoDB que se utiliza para definir los modelos de datos y facilitar la interacción con la base de datos.

- **Docker:** Una plataforma de contenedores que se utiliza para empaquetar la aplicación y sus dependencias en contenedores para una implementación más fácil y portátil.

- **Docker Compose:** Una herramienta para definir y ejecutar aplicaciones Docker multi-contenedor.

- **Google Cloud:** La aplicación se implementa en Google Cloud Platform (GCP) para su disponibilidad en línea.

A continuación, se detallan los endpoints disponibles:
## Películas (Characters)

### Obtener lista de personajes

- **Descripción:** Este endpoint devuelve una lista de películas de Star Wars.

- **Método HTTP:** GET

- **URL del Endpoint:** `http://34.17.59.111:8000/characters`

...

### Obtener personaje por ID

- **Descripción:** Este endpoint devuelve los detalles de una película de Star Wars por su ID.

- **Método HTTP:** GET

- **URL del Endpoint:** `http://34.17.59.111:8000/characters/:id`

...

### Actualizar un personaje por ID

- **Descripción:** Este endpoint actualiza los detalles de una película de Star Wars por su ID.

- **Método HTTP:** PUT

- **URL del Endpoint:** `http://34.17.59.111:8000/characters/:id`

...

### Eliminar un personaje por ID

- **Descripción:** Este endpoint elimina una película de Star Wars por su ID.

- **Método HTTP:** DELETE

- **URL del Endpoint:** `http://34.17.59.111:8000/characters/:id`

...

...

## Películas (Films)

### Obtener lista de películas

- **Descripción:** Este endpoint devuelve una lista de películas de Star Wars.

- **Método HTTP:** GET

- **URL del Endpoint:** `http://34.17.59.111:8000/films`

...

### Obtener una película por ID

- **Descripción:** Este endpoint devuelve los detalles de una película de Star Wars por su ID.

- **Método HTTP:** GET

- **URL del Endpoint:** `http://34.17.59.111:8000/films/:id`

...

### Actualizar una película por ID

- **Descripción:** Este endpoint actualiza los detalles de una película de Star Wars por su ID.

- **Método HTTP:** PUT

- **URL del Endpoint:** `http://34.17.59.111:8000/films/:id`

...

### Eliminar una película por ID

- **Descripción:** Este endpoint elimina una película de Star Wars por su ID.

- **Método HTTP:** DELETE

- **URL del Endpoint:** `http://34.17.59.111:8000/films/:id`

...

## Planetas (Planets)

### Obtener lista de planetas

- **Descripción:** Este endpoint devuelve una lista de planetas de Star Wars.

- **Método HTTP:** GET

- **URL del Endpoint:** `http://34.17.59.111:8000/planets`

...

### Obtener un planeta por ID

- **Descripción:** Este endpoint devuelve los detalles de un planeta de Star Wars por su ID.

- **Método HTTP:** GET

- **URL del Endpoint:** `http://34.17.59.111:8000/planets/:id`

...

### Actualizar un planeta por ID

- **Descripción:** Este endpoint actualiza los detalles de un planeta de Star Wars por su ID.

- **Método HTTP:** PUT

- **URL del Endpoint:** `http://34.17.59.111:8000/planets/:id`

...

### Eliminar un planeta por ID

- **Descripción:** Este endpoint elimina un planeta de Star Wars por su ID.

- **Método HTTP:** DELETE

- **URL del Endpoint:** `http://34.17.59.111:8000/planets/:id`

...
