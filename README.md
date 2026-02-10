App Clima Internacional – MVP
Version Febrero 2026- Por Alejandra Roa Peña

 Descripción del proyecto
Esta aplicación es la tercera entrega (MVP) de una App Web de Clima Internacional. Su objetivo es presentar información climática de diez capitales mundiales de manera simple, clara y accesible.

En esta versión se incorporó lo aprendido en Modulo IV del Curso Desarrollo Web Front End Trainee, de Sence/Talento Digital, sobre JavaScritp Avanzado, manteniendo metodología BEM y utilizando preprocesador SASS incorporado en entrega anterior.

 Selección de ciudades
Las ciudades fueron elegidas bajo dos criterios principales:
1.  **Educación:** Alto interés de estudiantes chilenos para estudios de postgrado.
2.  **Bienestar:** Países con alto Índice de Felicidad.

> [!IMPORTANT]  
> Los datos climáticos presentados son **ficticios**, ya que el proyecto tiene un enfoque formativo (Módulo 4) y no consume APIs externas en esta etapa.

---

 Público objetivo
El diseño está optimizado para **personas adultas mayores** y usuarios que buscan rapidez, priorizando:
Alta legibilidad.
Claridad visual y navegación intuitiva.
Estructura simple y ordenada.

---

 Estructura de la Aplicación
* **Home:** Tarjetas que giran (flip-card) de 10 ciudades, con informacion de Temp° Actual en Reverso, más boton ver detalles, donde se puede apreciar Pronostico Semanal, mas estadisticas.
* ** Acerca de:** Contexto del proyecto, objetivos académicos y tecnologías.
* **Contacto:** Formulario interactivo con mensaje de agradecimiento personalizado (JavaScript interno).

 Arquitectura Técnica

### Metodología BEM
Se utilizó la nomenclatura **Block, Element, Modifier** para las clases CSS, garantizando un código legible, sin colisiones de estilos y fácil de escalar.

### Sass (SCSS) – Patrón 7-1
Los estilos se organizaron siguiendo la arquitectura 7-1 para una gestión profesional de archivos:

scss/
├── base/        # _base.scss, _reset.scss, _typo.scss..
├── components/  # _btn-top.scss, _flip-card.scss, _navbar.scss..
├── layout/      # _footer.scss, _grid.scss, _header.scss..
├── themes/      # _default.scss..
├── utilities/   # _functions.scss, _mixins.scss, _variables.scss..
├── vendors/     # _bootstrap-overrides.scss..
├── views/       # _about.scss, _contact.scss, _home.scss..
└── main.scss    # Archivo principal que importa todos los parciales

Tecnologías Utilizadas

HTML5: Estructura semántica.
CSS3 / Sass (SCSS): Estilos avanzados y arquitectura 7-1.
BEM: Metodología de organización de clases.
Bootstrap 5: Diseño responsivo y ágil.
JavaScript: Interactividad a traves de manejo de eventos y funciones.
Font Awesome: Iconografía climática.

Objetivo Académico

Buenas prácticas de desarrollo front-end.
Uso de metodologías modernas (BEM + Sass).
Uso Javascript avanzado (creacion de las tarjetas, funciones, eventos, arreglos y ciclos)

Proyección del Proyecto
Esta maqueta de portafolio evolucionará en los siguientes módulos, incorporando:
Consumo de APIs de clima en tiempo real.
Nuevas funcionalidades y optimización visual.



** Estado del proyecto

✔ MVP funcional
✔ Refactorizado con BEM
✔ Estilos organizados con Sass (7-1)
✔ Preparado para evolución futura
