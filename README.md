 App Clima Internacional – MVP

**App Clima · 2da versión – Enero 2026**
**Autora:** Alejandra Roa Peña

---

1. Descripción del proyecto

Esta aplicación corresponde a la segunda versión (MVP) de una App Web de Clima Internacional, cuyo objetivo es presentar información climática de manera simple, clara y accesible sobre diez capitales del mundo.

En esta versión se mantiene el diseño general presentado en la primera entrega; sin embargo, se incorporan mejoras a nivel de organización y modularización del código CSS, aplicando la metodología BEM y el uso
del preprocesador Sass, con el fin de optimizar la mantenibilidad y escalabilidad del proyecto.

Las ciudades fueron seleccionadas considerando:

* Alto interés de estudiantes chilenos para estudios de postgrado
* Países con alto Índice de Felicidad

Los datos climáticos presentados son **ficticios**, ya que el proyecto tiene un **enfoque formativo y demostrativo**, orientado a la práctica de los contenidos aprendidos hasta el **Módulo 3** del curso, **sin consumo de APIs externas**.

---
2. Publico objetivo

La aplicación está orientada principalmente a:

* Personas adultas mayores
* Usuarios que requieren información clara y rápida

Por este motivo, el diseño prioriza:

* Alta legibilidad
* Claridad visual
* Navegación intuitiva
* Estructura simple y ordenada

---

3. Estructura de la Aplicación
   *Home
Muestra tarjetas con las capitales seleccionadas, incluyendo animaciones simples y contenido resumido.

   * About

Presenta el contexto del proyecto, su objetivo académico, público objetivo y tecnologías utilizadas.

   * Pronostico Semanal

Despliega una proyección climática simulada, organizada en una tabla clara y comprensible.

En estas secciones se utiliza **JavaScript externo** para implementar la funcionalidad del botón **“volver arriba”**.

   * Contacto

Formulario interactivo que utiliza **JavaScript interno**, mostrando un mensaje de agradecimiento personalizado al enviar el formulario.

---

4.  Metodología BEM aplicada

El proyecto utiliza la metodología **BEM (Block, Element, Modifier)** para la nomenclatura de clases CSS, lo que permite:

* Código más legible y mantenible
* Evitar colisiones de estilos
* Facilitar la escalabilidad del proyecto
  
---
5. Uso de Sass (SCSS) – Patrón 7-1

Los estilos están desarrollados utilizando **Sass (SCSS)** siguiendo la **arquitectura 7-1**, una buena práctica para organizar proyectos front-end.
scss/

├── base/            _base, _reset, _typo
├── components/      _btn-top, _flip-card, _navbar
├── layout/          _footer, _grid,_header
├── themes/          _default
├── utilities/       _functions, _mixins, _variables
├── vendors/         _bootstrap-overrides
├── views/          _about,_contact,_forecast,_home
└── main.scss      Archivo principal

El archivo `main.scss` importa todos los parciales y se compila en un único archivo CSS utilizado por la aplicación

6. Tecnologías utilizadas
   HTML5:  estructura semántica
   CSS3 / Sass (SCSS):estilos personalizados y arquitectura 7-1
   Metodología BEM:** organización de clases CSS
   Bootstrap 5:** diseño responsivo
   JavaScript:** interactividad y manejo de eventos
   Font Awesome:** íconos climáticos
---

7.  Objetivo académico

El objetivo principal del proyecto es aplicar los conocimientos adquiridos en el **Curso Front End Trainee 2.0**, Modulo 3, impartido por **Talento Digital para Chile / SENCE**, reforzando:

* Buenas prácticas de desarrollo front-end
* Uso de metodologías modernas (BEM + Sass)
* Diseño centrado en el usuario

---

8.  Proyección del proyecto

Esta aplicación forma parte de una **maqueta de portafolio académico**, la cual será ampliada progresivamente en los siguientes módulos del curso, incorporando:

* Consumo de APIs reales
* Mejora de accesibilidad
* Nuevas funcionalidades
* Optimización visual

---

** Estado del proyecto

✔ MVP funcional
✔ Refactorizado con BEM
✔ Estilos organizados con Sass (7-1)
✔ Preparado para evolución futura
