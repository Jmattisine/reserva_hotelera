# Proyecto 4: API de Reservas Hoteleras

API REST construida con **Node.js** y **Express** para la gestión de reservas en hoteles. Este proyecto forma parte del módulo de desarrollo backend del bootcamp Fullstack.

## Funcionalidades

- Crear reservas
- Consultar reservas (todas o por ID)
- Actualizar y eliminar reservas
- Filtrar reservas por:
  - Hotel
  - Rango de fechas
  - Tipo de habitación
  - Estado
  - Número de huéspedes
- Documentación con Swagger (OpenAPI 3.0)

##  Tecnologías utilizadas

- Node.js
- Express
- UUID
- dotenv
- Swagger (con archivo JSON)

##  Estructura de carpetas

```
reserva-hotelera/
├── .env
├── .gitignore
├── README.md
├── package.json
├── server.js
├── controllers/
│   └── reservasController.js
├── routes/
│   └── reservasRoutes.js
├── data/
│   └── reservasData.js
├── swagger.json (opcional)
```

##  Instalación y ejecución local

1. Clona este repositorio:

```bash
git clone https://github.com/tuusuario/reserva-hotelera.git
cd reserva-hotelera
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz con el siguiente contenido:

```
PORT=3000
```

4. Inicia el servidor:

```bash
npm start
```

5. Accede a la API:

```
http://localhost:3000/api/reservas
```

##  Swagger (Documentación de la API)

Puedes visualizar la documentación con Swagger:

1. Asegúrate de tener el archivo `swagger.json` en la raíz.
2. Instala Swagger UI Express:

```bash
npm install swagger-ui-express
```

3. Agrega este bloque en `server.js`:

```js
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

4. Accede a la documentación en:

```
http://localhost:3000/api-docs
```

##  Licencia

Este proyecto es parte del aprendizaje del módulo 4 del Bootcamp Fullstack 
