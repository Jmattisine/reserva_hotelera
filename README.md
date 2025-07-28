
# Proyecto: Sistema de Reservas Hoteleras

Este proyecto consiste en una API REST desarrollada con **Node.js** y **Express** para gestionar reservas de hotel. Incluye las operaciones CRUD y múltiples filtros de consulta. Además, ofrece interfaces web simples para crear y listar reservas.

## 🧱 Estructura del Proyecto

```
reserva_hotelera/
├── controllers/
│   └── reservasController.js
├── routes/
│   └── reservas.js
├── data/
│   └── reservas.json
├── public/
│   ├── reservar.html
│   └── listar_reservas.html
├── .env
├── server.js
├── package.json
└── README.md
```

## 🚀 Cómo ejecutar el proyecto

### 1. Clona el repositorio o descomprime el proyecto

```bash
git clone <URL-del-repo>
cd reserva_hotelera
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Inicia el servidor

```bash
npm start
```

El servidor se ejecutará en el puerto definido en `.env` (por defecto 3000):

```
http://localhost:3000
```

## 🌐 Endpoints principales

| Método | Endpoint                    | Descripción                               |
|--------|-----------------------------|-------------------------------------------|
| POST   | /api/reservas               | Crear una nueva reserva                   |
| GET    | /api/reservas               | Obtener todas las reservas                |
| GET    | /api/reservas/:id           | Obtener una reserva específica            |
| PUT    | /api/reservas/:id           | Actualizar una reserva                    |
| DELETE | /api/reservas/:id           | Eliminar una reserva                      |
| GET    | /api/reservas?hotel=...     | Filtrar por hotel                         |
| GET    | /api/reservas?fecha_inicio=YYYY-MM-DD&fecha_fin=YYYY-MM-DD | Filtrar por fechas |
| GET    | /api/reservas?tipo_habitacion=...     | Filtrar por tipo de habitación |
| GET    | /api/reservas?estado=...    | Filtrar por estado de reserva             |
| GET    | /api/reservas?num_huespedes=... | Filtrar por número de huéspedes        |

## 🖥 Interfaces Web

- `http://localhost:3000/reservar.html`: formulario para crear reservas
- `http://localhost:3000/listar_reservas.html`: lista de reservas registradas

## 📦 Notas

- La información se guarda localmente en `data/reservas.json`.

