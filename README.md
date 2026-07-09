# Plataforma de Eventos Universitarios

Proyecto final del curso de Desarrollo de Aplicaciones Web / Ingeniería Web.

## Descripción

La Plataforma de Eventos Universitarios es una aplicación web desarrollada con React que permite gestionar eventos académicos como conferencias, talleres y seminarios dirigidos a estudiantes y docentes.

El sistema permite registrar, visualizar, buscar, actualizar y eliminar eventos. También permite registrar participantes, inscribirlos en eventos académicos y consultar la lista de inscritos de manera rápida y ordenada.

## Funcionalidades principales

- Registrar eventos académicos.
- Visualizar eventos registrados.
- Buscar eventos por título, tipo, lugar o ponente.
- Actualizar información de eventos.
- Eliminar eventos.
- Registrar participantes.
- Visualizar participantes registrados.
- Eliminar participantes.
- Inscribir participantes en eventos.
- Consultar inscritos.
- Filtrar inscritos por evento, participante, correo, tipo o fecha.
- Mostrar mensajes de confirmación mediante ventanas emergentes.
- Ejecutar pruebas frontend con Vitest y React Testing Library.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Axios
- Bootstrap
- JSON Server
- SweetAlert2
- Vitest
- React Testing Library
- GitHub

## Arquitectura del proyecto

El proyecto utiliza una arquitectura por capas basada en componentes.

- **Capa de presentación:** React y Bootstrap.
- **Capa de vistas:** páginas Home, Events, Participants e Inscriptions.
- **Capa de componentes:** Navbar, Footer, EventCard, EventForm, SearchBar, ParticipantForm e InscriptionForm.
- **Capa de servicios:** Axios configurado en `src/services/api.js`.
- **Capa de alertas:** SweetAlert2 configurado en `src/services/alerts.js`.
- **Capa de API REST:** JSON Server.
- **Capa de datos:** archivo `api/db.json`.

## Estructura principal del proyecto

```text
final-desarrollo-web-danny/
├── api/
│   └── db.json
├── public/
│   └── img/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── tests/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md

````md
## Instalación

Para instalar las dependencias del proyecto, ejecutar:

```bash
npm install
```

## Ejecución de la API

Para iniciar JSON Server, ejecutar:

```bash
npm run api
```

La API se ejecuta en:

```text
http://localhost:3001
```

Endpoints principales:

```text
http://localhost:3001/eventos
http://localhost:3001/participantes
http://localhost:3001/inscripciones
```

## Ejecución de la aplicación React

En otra terminal, ejecutar:

```bash
npm run dev
```

La aplicación se ejecuta en:

```text
http://localhost:5173
```

## Ejecución de pruebas

Para ejecutar las pruebas frontend:

```bash
npm run test
```

## Compilación del proyecto

Para generar la versión de producción:

```bash
npm run build
```

## Módulos del sistema

### Gestión de eventos

Permite registrar, visualizar, buscar, actualizar y eliminar eventos académicos.

Los eventos incluyen información como título, tipo de evento, descripción, fecha, hora, lugar, ponente y cupos.

### Gestión de participantes

Permite registrar y visualizar estudiantes o docentes participantes.

También permite eliminar participantes registrados.

### Gestión de inscripciones

Permite inscribir participantes en eventos académicos y consultar la lista de inscritos.

La consulta cuenta con un buscador para filtrar por evento, participante, correo, tipo o fecha.

## Pruebas implementadas

Se implementaron pruebas con Vitest y React Testing Library para verificar el correcto renderizado de componentes principales.

Pruebas realizadas:

* Renderizado de la página de inicio.
* Renderizado de la información de un evento académico en el componente EventCard.

## Autor

Danny Gorddy Huaman Chavez

## Universidad

Universidad Continental

## Curso

Desarrollo de Aplicaciones Web / Ingeniería Web

## Año

2026
