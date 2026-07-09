# Plataforma de Eventos Universitarios

Proyecto final del curso de Desarrollo de Aplicaciones Web / Ingeniería Web.

## Descripción

La aplicación permite gestionar eventos universitarios como conferencias, talleres y seminarios dirigidos a estudiantes y docentes. El sistema fue desarrollado con React y permite registrar, visualizar, buscar, actualizar y eliminar eventos. También permite registrar participantes, inscribirlos en eventos y consultar la lista de inscritos.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Axios
- Bootstrap
- JSON Server
- Vitest
- React Testing Library
- GitHub

## Arquitectura del proyecto

El proyecto utiliza una arquitectura por capas basada en componentes:

- Capa de presentación: React y Bootstrap.
- Capa de vistas: páginas Home, Events, Participants e Inscriptions.
- Capa de componentes: Navbar, EventCard, EventForm, SearchBar, ParticipantForm e InscriptionForm.
- Capa de servicios: Axios configurado en `src/services/api.js`.
- Capa de API REST: JSON Server.
- Capa de datos: archivo `api/db.json`.

## Instalación

Instalar dependencias:

```bash
npm install