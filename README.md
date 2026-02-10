App Clima Internacional – MVP

Versión: Febrero 2026
Autora: Alejandra Roa Peña

Descripción
Aplicación web de clima internacional desarrollada como MVP académico en el curso Desarrollo Web Front End Trainee (SENCE – Talento Digital). Presenta información climática de diez capitales del mundo de forma clara, accesible y visualmente organizada.
En esta etapa se integran contenidos de JavaScript Avanzado del Modulo IV, manteniendo la metodología BEM y la arquitectura Sass 7-1.

Los datos climáticos son ficticios y el proyecto no consume APIs externas en esta fase.

Público objetivo
Diseñada con foco en personas adultas mayores y usuarios que priorizan:

Alta legibilidad

Claridad visual

Navegación simple e intuitiva

Estructura de la aplicación

Sección	Funcionalidad
Home	Tarjetas interactivas tipo flip-card con temperatura actual y acceso a pronóstico semanal y estadísticas.
Acerca de	Contexto del proyecto, objetivos académicos y tecnologías utilizadas.
Contacto	Formulario interactivo con respuesta personalizada mediante JavaScript.

Arquitectura técnica

Metodología BEM
Organización de clases CSS bajo el modelo Block–Element–Modifier, favoreciendo escalabilidad, legibilidad y control de estilos.

Sass (SCSS) – Patrón 7-1

scss/
│
├── base/
│   ├── _base.scss
│   ├── _reset.scss
│   └── _typography.scss
│
├── components/
│   ├── _btn-top.scss
│   ├── _flip-card.scss
│   └── _navbar.scss
│
├── layout/
│   ├── _footer.scss
│   ├── _grid.scss
│   └── _header.scss
│
├── themes/
│   └── _default.scss
│
├── utilities/
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _variables.scss
│
├── vendors/
│   └── _bootstrap-overrides.scss
│
├── views/
│   ├── _about.scss
│   ├── _contact.scss
│   └── _home.scss
│
└── main.scss



Tecnologías utilizadas

HTML5

CSS3 / Sass (SCSS)

BEM

Bootstrap 5

JavaScript (ES6)

Font Awesome

Objetivo académico

Aplicar buenas prácticas de desarrollo front-end, arquitectura de estilos profesional y uso de JavaScript avanzado para la creación dinámica de componentes e interacción con el DOM.

Proyección

El proyecto evolucionará incorporando consumo de APIs climáticas reales, optimización visual y nuevas funcionalidades.

Estado del proyecto

MVP funcional
Código estructurado con BEM
Estilos organizados con Sass 7-1
Interactividad implementada con JavaScript
