# Proyecto Grupal 2: Despliegue de Servicios con Docker

Este proyecto implementa una arquitectura basada en múltiples servicios independientes utilizando Docker y Docker Compose. Cada servicio cumple una función específica dentro del sistema.

El sistema está compuesto por:

- Servicio 1: API REST (Backend) con Flask
- Servicio 2: API REST con Base de Datos PostgreSQL
- Servicio 3: Backend + Frontend Web
- Servicio 4: Servicio de Autenticación y CRUD con Node.js

---

## Servicio 1: API REST (Backend)

API REST simple que expone dos endpoints: /health y /data.

### Ejecución

Ir a la ruta:

```bash
cd servicio1/backend
```

Construir la imagen:

```bash
docker build -t servicio1-api .
```

Ejecutar contenedor:

```bash
docker run -p 8000:8000 servicio1-api
```

Acceso:

| Endpoint | URL                                                          |
| -------- | ------------------------------------------------------------ |
| Health   | [http://localhost:8000/health](http://localhost:8000/health) |
| Data     | [http://localhost:8000/data](http://localhost:8000/data)     |

## Servicio 2: API REST con Base de Datos PostgreSQL

API REST conectada a una base de datos PostgreSQL con persistencia mediante volúmenes.

### Ejecución

Ir a la ruta:

```bash
cd servicio2
```

Levantar los servicios:

```bash
docker compose up --build
```

Acceso:

| Endpoint | URL                                                          |
| -------- | ------------------------------------------------------------ |
| Health   | [http://localhost:8000/health](http://localhost:8000/health) |
| Data     | [http://localhost:8000/data](http://localhost:8000/data)     |

## Servicio 3: Backend + Frontend Web

Sistema cliente-servidor donde el frontend consume datos desde un backend Flask.

### Ejecución

Ir a la ruta:

```bash
cd servicio3
```

Levantar los servicios:

```bash
docker compose up --build
```

Acceso:

Backend

| Endpoint | URL                                                      |
| -------- | -------------------------------------------------------- |
| Home     | [http://localhost:5000](http://localhost:5000)           |
| Info     | [http://localhost:5000/info](http://localhost:5000/info) |

Frontend

| Servicio | URL                                            |
| -------- | ---------------------------------------------- |
| Web      | [http://localhost:8080](http://localhost:8080) |

## Servicio 4: Servicio de Autenticación y CRUD con Node.js

Sistema integrado con:

- Servicio de Autenticación (JWT)
- Servicio CRUD de Productos
- Interfaz Web

### Ejecución

Ir a la ruta:

```bash
cd servicio4/proyecto-docker
```

Levantar los servicios:

```bash
docker compose up --build
```

Acceso a Servicios:

Servicio de Autenticación

| Endpoint | URL                                                        |
| -------- | ---------------------------------------------------------- |
| Login    | [http://localhost:5000/login](http://localhost:5000/login) |

Credenciales de Prueba:

```bash
Usuario: docente
Clave: password123
```

Servicio CRUD

| Operación | Endpoint                                                                            |
| --------- | ----------------------------------------------------------------------------------- |
| Listar    | GET [http://localhost:4000/productos](http://localhost:4000/productos)              |
| Insertar  | POST [http://localhost:4000/productos](http://localhost:4000/productos)             |
| Editar    | PUT [http://localhost:4000/productos/{id}](http://localhost:4000/productos/{id})    |
| Eliminar  | DELETE [http://localhost:4000/productos/{id}](http://localhost:4000/productos/{id}) |

### Interfaz Web

Abrir en el navegador:

```bash
servicio4/proyecto-docker/index.html
```

Desde esta interfaz se puede:

- Iniciar sesión
- Visualizar token JWT
- Administrar productos
- Insertar y eliminar registros
