# ✅ todo-react

Una aplicación de lista de tareas (To‑Do) hecha con **React**, ideal para aprender y practicar conceptos clave: componentes, estado, hooks y almacenamiento local.

---

## 🧭 Tabla de contenidos

* [Características](#-características)
* [Requisitos](#️-requisitos)
* [Instalación](#-instalación)
* [Uso](#-uso)
* [Historias de usuario](#-historias-de-usuario)
* [Arquitectura & Estilo](#-arquitectura--estilo)
* [Mejoras posibles](#-mejoras-posibles)
* [Contribución](#-contribución)
* [Licencia](#-licencia)

---

## 🚀 Características

* Añadir, marcar como completada, editar y eliminar tareas.
* Filtro para ver: *todas*, *activas* o *completadas*.
* Persistencia automática con `localStorage`.
* Interfaz sencilla, responsiva y funcional.

---

## ⚙️ Requisitos

* Node.js ≥ 16
* npm o yarn

---

## 📦 Instalación

```bash
git clone https://github.com/FrancoDavid/todo-react.git
cd todo-react
npm install     # o yarn install
npm start       # ejecuta en http://localhost:3000
```

---

## 🚚 Uso

1. Abre tu navegador en `http://localhost:3000`.
2. Escribe una tarea y presiona Enter o el botón para agregarla.
3. Marca tareas como completadas, edítalas o elimínalas.
4. Cambia el filtro para ver el estado de las tareas.
5. Recarga y continúa: las tareas se guardan en `localStorage`.

---

## 🧾 Historias de usuario

Basado en la guía de MDN para apps To‑Do en React, tu aplicación cumple con las siguientes historias ([developer.mozilla.org][1], [dev.to][2], [es.linkedin.com][3]):

* Leer una lista de tareas.
* Agregar tareas con teclado o clic.
* Marcar tareas como completadas.
* Editar tareas existentes.
* Eliminar tareas.
* Filtrar vista por estado (todas/activas/completadas).

---

## 🎨 Arquitectura & Estilo

* **Create‑React‑App** como base.
* Componentes reutilizables: `Task`, `TaskList`, `AddTask`, `Filter`.
* Hooks: `useState`, `useEffect` para manejar estado y persistencia.
* `localStorage` con `useEffect` para sincronizar cambios automáticamente.

---

## 🔧 Mejoras posibles

* Optimización con `React.memo` en lista de tareas (importante para filtros extensos).
* UI avanzada con librerías como Material‑UI o Tailwind.
* Migración de estado a Context o Redux.
* Añadir animaciones con Framer Motion.
* Agregar tests unitarios con Jest + React Testing Library.
* Persistencia backend (Firebase, Mongo…).

---

## 🤝 Contribución

¡Colabora y potencia este proyecto!

1. Haz un *fork* 🌱
2. Crea una rama `feature/tu-mejora`
3. Realiza cambios claros y probados
4. Abre un PR explicando tu aporte

---

## ⚖️ Licencia

Licencia **MIT**. Consulta el archivo `LICENSE` para detalles.
 
