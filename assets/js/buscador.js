// Base de datos de programas
const programasDB = [
  {
    "id": "dip-biomedica-2v",
    "nombre": "Ingeniería Biomédica",
    "tipo": "Diplomado",
    "area": "Salud",
    "modalidad": "Presencial",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-biomedica-2v-07.jpg",
    "url": "dip-biomedica-2v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-ccialimentos-10v",
    "nombre": "Ciencia y Tecnología de Alimentos",
    "tipo": "Diplomado",
    "area": "Salud",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-ccialimentos-10v-03.jpg",
    "url": "dip-ccialimentos-10v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-cdatos-4v",
    "nombre": "Ciencia de Datos",
    "tipo": "Diplomado",
    "area": "Informática",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "Bs 5500",
    "imagen": "assets/images/programas/dip-cdatos-4v-03.jpg",
    "url": "dip-cdatos-4v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-ciberseguridad-1v",
    "nombre": "Ciberseguridad",
    "tipo": "Diplomado",
    "area": "Informática",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-ciberseguridad-1v-03.jpg",
    "url": "dip-ciberseguridad-1v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-edusup-19v",
    "nombre": "Educación Superior",
    "tipo": "Diplomado",
    "area": "Educación",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-edusup-19v-01.jpg",
    "url": "dip-edusup-19v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-estadistica-4v",
    "nombre": "Estadística Aplicada",
    "tipo": "Diplomado",
    "area": "Otros",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-estadistica-4v-08.jpg",
    "url": "dip-estadistica-4v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-iergonomia-7v",
    "nombre": "Ingeniería Ergonómica",
    "tipo": "Diplomado",
    "area": "Otros",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-iergonomia-7v-07.jpg",
    "url": "dip-iergonomia-7v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-isoldadura-1v",
    "nombre": "Ingeniería de Soldadura",
    "tipo": "Diplomado",
    "area": "Ingeniería",
    "modalidad": "Semipresencial",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-isoldadura-1v-07.jpg",
    "url": "dip-isoldadura-1v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-lutribologia-1v",
    "nombre": "Lubricación y Tribología",
    "tipo": "Diplomado",
    "area": "Otros",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-lutribologia-1v-11.jpg",
    "url": "dip-lutribologia-1v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-mecatronicaedi-3v",
    "nombre": "Mecatrónica Educativa",
    "tipo": "Diplomado",
    "area": "Ingeniería",
    "modalidad": "Semipresencial",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-mecatronicaedi-3v-05.jpg",
    "url": "dip-mecatronicaedi-3v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-tbiocombustible-1v",
    "nombre": "Tecnologías de Biocombustibles e Hidrógeno",
    "tipo": "Diplomado",
    "area": "Otros",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-tbiocombustible-1v-19.jpg",
    "url": "dip-tbiocombustible-1v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "dip-trabaltoriesgo-3v",
    "nombre": "Trabajo en Altura y Espacios Confinados",
    "tipo": "Diplomado",
    "area": "Otros",
    "modalidad": "Virtual",
    "duracion": "6 MESES",
    "precio": "BS 5600",
    "imagen": "assets/images/programas/dip-trabaltoriesgo-3v-06.jpg",
    "url": "dip-trabaltoriesgo-3v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "maes-iaedusup-1v",
    "nombre": "Investigación Aplicada a la Educación Superior",
    "tipo": "Maestría",
    "area": "Educación",
    "modalidad": "Presencial",
    "duracion": "18 MESES",
    "precio": "BS 27000",
    "imagen": "assets/images/programas/maes-iaedusup-1v-05.jpg",
    "url": "maes-iaedusup-1v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "maes-imanufactura-1v",
    "nombre": "Ingeniería de Manufactura",
    "tipo": "Maestría",
    "area": "Ingeniería",
    "modalidad": "Presencial",
    "duracion": "18 MESES",
    "precio": "BS 27000",
    "imagen": "assets/images/programas/maes-imanufactura-1v-09.jpg",
    "url": "maes-imanufactura-1v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "maes-logisticaegcs-1v",
    "nombre": "Logística Empresarial y Gestión de Cadena de Suministros",
    "tipo": "Maestría",
    "area": "Negocios",
    "modalidad": "Presencial",
    "duracion": "18 MESES",
    "precio": "BS 27000",
    "imagen": "assets/images/programas/maes-logisticaegcs-1v-12.jpg",
    "url": "maes-logisticaegcs-1v.htm",
    "estado": "Ofertado"
  },
  {
    "id": "maes-sigcma-v15",
    "nombre": "Sistemas Integrados de Gestión, Calidad, Medio Ambiente",
    "tipo": "Maestría",
    "area": "Informática",
    "modalidad": "Presencial",
    "duracion": "18 MESES",
    "precio": "BS 27000",
    "imagen": "assets/images/programas/maes-sigcma-v15-11.jpg",
    "url": "maes-sigcma-v15.htm",
    "estado": "Ofertado"
  },
  {
    "id": "maes-swia-1v",
    "nombre": "Sistemas Web e Inteligencia Artificial",
    "tipo": "Maestría",
    "area": "Informática",
    "modalidad": "Presencial",
    "duracion": "18 MESES",
    "precio": "BS 27000",
    "imagen": "assets/images/programas/maes-swia-1v-03.jpg",
    "url": "maes-swia-1v.htm",
    "estado": "Ofertado"
  }
];

// Realizar búsqueda (Alias para compatibilidad o uso futuro)
function realizarBusqueda() {
  aplicarFiltros();
}

// Aplicar filtros del sidebar
function aplicarFiltros() {
  let resultados = programasDB;
  
  // Filtrar por tipo de programa
  const tiposSeleccionados = [];
  if (document.getElementById('filterDiplomados').checked) tiposSeleccionados.push('Diplomado');
  if (document.getElementById('filterMaestrias').checked) tiposSeleccionados.push('Maestría');
  if (document.getElementById('filterDoctorados').checked) tiposSeleccionados.push('Doctorado');
  
  if (tiposSeleccionados.length > 0) {
    resultados = resultados.filter(p => tiposSeleccionados.includes(p.tipo));
  }
  
  // Filtrar por modalidad
  const modalidadesSeleccionadas = [];
  if (document.getElementById('filterPresencial').checked) modalidadesSeleccionadas.push('Presencial');
  if (document.getElementById('filterVirtual').checked) modalidadesSeleccionadas.push('Virtual');
  if (document.getElementById('filterHibrido').checked) modalidadesSeleccionadas.push('Semipresencial');
  
  if (modalidadesSeleccionadas.length > 0) {
    resultados = resultados.filter(p => modalidadesSeleccionadas.includes(p.modalidad));
  }
  
  // Filtrar por área
  const areasSeleccionadas = [];
  if (document.getElementById('filterTecnologia').checked) areasSeleccionadas.push('Informática', 'Sistemas', 'Ingeniería');
  if (document.getElementById('filterNegocios').checked) areasSeleccionadas.push('Negocios', 'Logística');
  if (document.getElementById('filterSalud').checked) areasSeleccionadas.push('Salud', 'Medicina', 'Química');
  if (document.getElementById('filterEducacion').checked) areasSeleccionadas.push('Educación');
  
  if (areasSeleccionadas.length > 0) {
    resultados = resultados.filter(p => areasSeleccionadas.some(area => p.area.includes(area)));
  }
  
  // Aplicar también el filtro de búsqueda por texto
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (searchTerm) {
    resultados = resultados.filter(p => 
      p.nombre.toLowerCase().includes(searchTerm) ||
      p.tipo.toLowerCase().includes(searchTerm) ||
      p.area.toLowerCase().includes(searchTerm)
    );
  }
  
  mostrarResultados(resultados);
}

// Mostrar resultados
function mostrarResultados(resultados) {
  const container = document.getElementById('searchResults');
  
  if (resultados.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h3>No se encontraron resultados</h3>
        <p>Intenta con otros criterios de búsqueda</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = resultados.map(programa => `
    <div class="result-card" onclick="window.location.href='${programa.url}'">
      <div class="result-card-image">
        <img src="${programa.imagen}" alt="${programa.nombre}">
        <span class="result-card-badge">${programa.tipo}</span>
      </div>
      <div class="result-card-content">
        <h4 class="result-card-title">${programa.nombre}</h4>
        <div class="result-card-info">
          <span class="result-card-tag">
            <i class="fa-regular fa-clock"></i> ${programa.duracion}
          </span>
          <span class="result-card-tag">
            <i class="fa-solid fa-laptop"></i> ${programa.modalidad}
          </span>
          <span class="result-card-tag">
            <i class="fa-solid fa-tag"></i> ${programa.precio}
          </span>
        </div>
        <p class="result-card-category">${programa.area}</p>
      </div>
    </div>
  `).join('');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Verificar si hay parámetros en la URL
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  
  if (query) {
    document.getElementById('searchInput').value = query;
    toggleClearBtn();
    realizarBusqueda();
  }
  
  // Búsqueda al presionar Enter
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        realizarBusqueda();
      }
    });
    
    // Búsqueda en tiempo real
    searchInput.addEventListener('input', function() {
      toggleClearBtn();
      realizarBusqueda();
    });
  }
});

function toggleClearBtn() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput && clearBtn) {
    if (searchInput.value.trim() !== "") {
      clearBtn.style.display = "block";
    } else {
      clearBtn.style.display = "none";
    }
  }
}

function clearSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = "";
    toggleClearBtn();
    searchInput.focus();
    aplicarFiltros(); // Actualizar resultados
  }
}

// Expose functions to window
window.realizarBusqueda = realizarBusqueda;
window.aplicarFiltros = aplicarFiltros;
window.toggleClearBtn = toggleClearBtn;
window.clearSearch = clearSearch;
