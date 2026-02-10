
const lugares = [
  {
    id: 1,
    nombre: "Copenhague",
    imagen: "img/copenhague.jpg",
    tempActual: 8,
    estadoActual: "nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 6, max: 10, estado: "nublado", humedad: 75, viento: 12 },
      { dia: "Martes", min: 5, max: 8, estado: "soleado" },
      { dia: "Miércoles", min: 4, max: 6, estado: "lluvia" },
      { dia: "Jueves", min: 3, max: 5, estado: "lluvia" },
      { dia: "Viernes", min: 3, max: 5, estado: "nublado" },
      { dia: "Sábado", min: 2, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 4, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 2,
    nombre: "Berlín",
    imagen: "img/Berlin.jpg",
    tempActual: 10,
    estadoActual: "soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 6, max: 11, estado: "soleado" },
      { dia: "Martes", min: 7, max: 12, estado: "soleado" },
      { dia: "Miércoles", min: 5, max: 9, estado: "nublado" },
      { dia: "Jueves", min: 4, max: 8, estado: "lluvia" },
      { dia: "Viernes", min: 6, max: 10, estado: "nublado" },
      { dia: "Sábado", min: 7, max: 13, estado: "soleado" },
      { dia: "Domingo", min: 8, max: 14, estado: "soleado" }
    ]
  },
  {
    id: 3,
    nombre: "Washington",
    imagen: "img/Washington.jpg",
    tempActual: 8,
    estadoActual: "nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 4,
    nombre: "Londres",
    imagen: "img/Londres.jpg",
    tempActual: 7,
    estadoActual: "lluvia",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 5,
    nombre: "Amsterdam",
    imagen: "img/Amsterdam.jpg",
    tempActual: 10,
    estadoActual: "lluvia",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 6,
    nombre: "México",
    imagen: "img/Mexico.jpg",
    tempActual: 10,
    estadoActual: "nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 7,
    nombre: "Roma",
    imagen: "img/Roma.jpg",
    tempActual: 11,
    estadoActual: "soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 8,
    nombre: "Nueva York",
    imagen: "img/Nueva York.jpg",
    tempActual: 8,
    estadoActual: "lluvia",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 9,
    nombre: "Tokio",
    imagen: "img/Tokio.jpg",
    tempActual: 6,
    estadoActual: "nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  },
  {
    id: 10,
    nombre: "Sidney",
    imagen: "img/Sidney.jpg",
    tempActual: 30,
    estadoActual: "soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 8, estado: "nublado" },
      { dia: "Martes", min: 5, max: 9, estado: "soleado" },
      { dia: "Miércoles", min: 3, max: 7, estado: "lluvia" },
      { dia: "Jueves", min: 2, max: 6, estado: "lluvia" },
      { dia: "Viernes", min: 4, max: 8, estado: "nublado" },
      { dia: "Sábado", min: 5, max: 10, estado: "soleado" },
      { dia: "Domingo", min: 6, max: 11, estado: "soleado" }
    ]
  }
];
// ================= FUNCIONES AUXILIARES (Globales) =================
function obtenerClaseClimaCard(estado) {
    const e = estado.toLowerCase();
    if (e.includes("soleado")) return "flip-card__back--soleado";
    if (e.includes("lluvia")) return "flip-card__back--lluvia";
    return "flip-card__back--nublado";
}

function obtenerIcono(estado) {
    const e = estado.toLowerCase();
    if (e.includes("soleado")) return "fa-sun";
    if (e.includes("lluvia")) return "fa-cloud-rain";
    return "fa-cloud";
}

function volverArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ================= LÓGICA PRINCIPAL =================
document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("lugares");
    const btnVerMas = document.getElementById("btn-ver-mas");
    const modal = document.getElementById("modalPronostico");
    const modalTitulo = document.getElementById("modalCiudad");
    const modalDias = document.getElementById("modalDias");
    const btnCerrarModal = document.getElementById("cerrarModal"); 
    const modalEstadisticas = document.getElementById("modalEstadisticas");
    const btnTop = document.getElementById("btn-top");
    const formContacto = document.getElementById("form-contacto"); 

    let itemsMostrados = 0;
    const incremento = 5;

    // --- Funciones de Modal ---
    const abrirModal = (id) => {
        const lugar = lugares.find(l => l.id === id);
        if (!lugar) return;

        modalTitulo.textContent = `Pronóstico en ${lugar.nombre}`;
        modalDias.innerHTML = lugar.pronosticoSemanal.map(dia => `
            <div class="modal-clima__dia">
                <strong>${dia.dia}</strong><br>
                <i class="fa-solid ${obtenerIcono(dia.estado)}"></i><br>
                ${dia.min}° / ${dia.max}°
            </div>
        `).join("");

        const tempsMin = lugar.pronosticoSemanal.map(d => d.min);
        const tempsMax = lugar.pronosticoSemanal.map(d => d.max);
        const minSemana = Math.min(...tempsMin);
        const maxSemana = Math.max(...tempsMax);
        const promedio = Math.round((tempsMin.reduce((a, b) => a + b, 0) + tempsMax.reduce((a, b) => a + b, 0)) / (tempsMin.length * 2));

        modalEstadisticas.innerHTML = `
            <div>⬇ Mín: ${minSemana}°C</div>
            <div>⬆ Máx: ${maxSemana}°C</div>
            <div>📊 Prom: ${promedio}°C</div>
        `;
        modal.classList.add("modal-clima--activo");
    };

    const cerrarModal = () => {
        modal.classList.remove("modal-clima--activo");
    };

    // --- Carga de Lugares ---
    function mostrarSiguientesLugares() {
        if (!contenedor) return; 
        
        const siguienteGrupo = lugares.slice(itemsMostrados, itemsMostrados + incremento);

        siguienteGrupo.forEach(lugar => {
            const claseClima = obtenerClaseClimaCard(lugar.estadoActual);
            const diasHTML = lugar.pronosticoSemanal.slice(0, 4).map(dia => `
                <div class="dia">
                    <span>${dia.dia.slice(0, 3)}</span>
                    <i class="fa-solid ${obtenerIcono(dia.estado)}"></i>
                    <small>${dia.min}°/${dia.max}°</small>
                </div>
            `).join("");

            const cardHTML = `
                <div class="col-12 col-md-6 col-lg-4 lugares__item">
                    <div class="flip-card" data-id="${lugar.id}">
                        <div class="flip-card__inner">
                            <div class="flip-card__front">
                                <img src="${lugar.imagen}" class="flip-card__image" onload="this.classList.add('is-loaded')">
                                <span class="flip-card__city-name">${lugar.nombre}</span>
                            </div>
                            <div class="flip-card__back ${claseClima}">
                                <div>
                                    <div class="flip-card__temp-actual">${lugar.tempActual}°C</div>
                                    <div class="flip-card__estado">${lugar.estadoActual}</div>
                                </div>
                                <div class="flip-card__semana">${diasHTML}</div>
                                <button class="btn-detalles">Ver detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedor.insertAdjacentHTML("beforeend", cardHTML);
        });

        itemsMostrados += incremento;
        if (btnVerMas && itemsMostrados >= lugares.length) btnVerMas.style.display = "none";
    }

    // --- Listeners de Eventos ---
    if (contenedor) {
        contenedor.addEventListener("click", e => {
            const btnDetalles = e.target.closest(".btn-detalles");
            if (btnDetalles) {
                e.stopPropagation();
                const card = btnDetalles.closest(".flip-card");
                abrirModal(Number(card.dataset.id));
                return;
            }
            const card = e.target.closest(".flip-card");
            if (card) card.classList.toggle("flip-card--active");
        });
    }

    if (btnCerrarModal) btnCerrarModal.addEventListener("click", cerrarModal);
    if (modal) {
        modal.addEventListener("click", e => { if (e.target === modal) cerrarModal(); });
    }
    if (btnVerMas) btnVerMas.addEventListener("click", mostrarSiguientesLugares);
    if (btnTop) btnTop.addEventListener("click", volverArriba);

    // Lógica para el formulario de contacto 
    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value;
            alert(`Gracias por contactarnos, ${nombre}, te contestaremos en 48 hrs`);
        });
    }

 
    mostrarSiguientesLugares();
});


window.addEventListener("scroll", () => {
    const btnTop = document.getElementById("btn-top");
    if (btnTop) {
        btnTop.style.display = window.scrollY > 300 ? "flex" : "none";
    }
  }
)