// Base de datos de programas
const programasDB = [
  // Diplomados
  { id: 'dip-ciberseguridad', nombre: 'CIBERSEGURIDAD 1V', tipo: 'Diplomado', area: 'Informática', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 5500', imagen: 'assets/images/programas/dip-ciberseguridad-1v-03.jpg', url: 'dip-ciberseguridad-1v.htm', estado: 'En Curso' },
  { id: 'dip-mecatronicaedi', nombre: 'MECATRÓNICA EDIFICIOS 3V', tipo: 'Diplomado', area: 'Electrónica', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 5500', imagen: 'assets/images/programas/dip-mecatronicaedi-3v-05.jpg', url: 'dip-mecatronicaedi-3v.htm', estado: 'Ofertado' },
  { id: 'dip-edusup', nombre: 'EDUCACIÓN SUPERIOR 19V', tipo: 'Diplomado', area: 'Sistemas', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 3500', imagen: 'assets/images/programas/dip-edusup-19v-01.jpg', url: 'dip-edusup-19v.htm', estado: 'Ofertado' },
  { id: 'dip-isoldadura', nombre: 'SOLDADURA 1V', tipo: 'Diplomado', area: 'Mecánica', modalidad: 'Presencial', duracion: '6 MESES', precio: 'Bs 4500', imagen: 'assets/images/programas/dip-isoldadura-1v-07.jpg', url: 'dip-isoldadura-1v.htm', estado: 'Ofertado' },
  { id: 'dip-cdatos', nombre: 'CIENCIA DE DATOS 4V', tipo: 'Diplomado', area: 'Informática', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 5500', imagen: 'assets/images/programas/dip-cdatos-4v-03.jpg', url: 'dip-cdatos-4v.htm', estado: 'Ofertado' },
  { id: 'dip-tbiocombustible', nombre: 'BIOCOMBUSTIBLES 1V', tipo: 'Diplomado', area: 'Química', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 4500', imagen: 'assets/images/programas/dip-tbiocombustible-1v-19.jpg', url: 'dip-tbiocombustible-1v.htm', estado: 'Ofertado' },
  { id: 'dip-biomedica', nombre: 'BIOMÉDICA 2V', tipo: 'Diplomado', area: 'Electrónica', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 5500', imagen: 'assets/images/programas/dip-biomedica-2v-07.jpg', url: 'dip-biomedica-2v.htm', estado: 'Ofertado' },
  { id: 'dip-trabaltoriesgo', nombre: 'TRABAJOS DE ALTO RIESGO 3V', tipo: 'Diplomado', area: 'Sistemas', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 5500', imagen: 'assets/images/programas/dip-trabaltoriesgo-3v-06.jpg', url: 'dip-trabaltoriesgo-3v.htm', estado: 'Ofertado' },
  { id: 'dip-iergonomia', nombre: 'ERGONOMÍA 7V', tipo: 'Diplomado', area: 'Sistemas', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 4500', imagen: 'assets/images/programas/dip-iergonomia-7v-07.jpg', url: 'dip-iergonomia-7v.htm', estado: 'Ofertado' },
  { id: 'dip-estadistica', nombre: 'ESTADÍSTICA 4V', tipo: 'Diplomado', area: 'Informática', modalidad: 'Virtual', duracion: '6 MESES', precio: 'Bs 5500', imagen: 'assets/images/programas/dip-estadistica-4v-08.jpg', url: 'dip-estadistica-4v.htm', estado: 'Ofertado' },
  
  // Maestrías
  { id: 'maes-swia', nombre: 'SOFTWARE CON IA', tipo: 'Maestría', area: 'Sistemas', modalidad: 'Presencial', duracion: '18 MESES', precio: 'Bs 20000', imagen: 'assets/images/programas/maes-swia-1v-03.jpg', url: 'maes-swia-1v.htm', estado: 'En Curso' },
  { id: 'maes-imanufactura', nombre: 'INGENIERÍA EN MANUFACTURA', tipo: 'Maestría', area: 'Ingeniería', modalidad: 'Presencial', duracion: '18 MESES', precio: 'Bs 22610', imagen: 'assets/images/programas/maes-imanufactura-1v-09.jpg', url: 'maes-imanufactura-1v.htm', estado: 'Ofertado' },
  { id: 'maes-sigcma', nombre: 'SISTEMAS INTEGRADOS DE GESTIÓN', tipo: 'Maestría', area: 'Sistemas', modalidad: 'Presencial', duracion: '18 MESES', precio: 'Bs 23655', imagen: 'assets/images/programas/maes-sigcma-v15-11.jpg', url: 'maes-sigcma-v15.htm', estado: 'Ofertado' },
  { id: 'maes-iaedusup', nombre: 'INNOVACIÓN APLICADA A LA EDUCACIÓN SUPERIOR', tipo: 'Maestría', area: 'Educación', modalidad: 'Presencial', duracion: '18 MESES', precio: 'Bs 12500', imagen: 'assets/images/programas/maes-iaedusup-1v-05.jpg', url: 'maes-iaedusup-1v.htm', estado: 'En Curso' },
  { id: 'maes-logistica', nombre: 'LOGÍSTICA Y GESTIÓN DE LA CADENA DE SUMINISTRO', tipo: 'Maestría', area: 'Logística', modalidad: 'Presencial', duracion: '18 MESES', precio: 'Bs 22269', imagen: 'assets/images/programas/maes-logisticaegcs-1v-12.jpg', url: 'maes-logisticaegcs-1v.htm', estado: 'En Curso' }
];

const searchModalHTML = `
<div id="searchModal" class="search-modal">
  <div class="search-modal-content">
    <div class="search-modal-header">
      <div class="container">
        <div class="search-modal-logo">
          <img src="assets/images/logo.png" alt="DPG">
        </div>
        <span class="search-modal-close" onclick="cerrarModalBusqueda()">&times;</span>
      </div>
    </div>
    
    <div class="container">
      <div class="search-filters-top">
        <h3>BUSQUEDA</h3>
        <div class="search-input-group">
          <div class="search-input-wrapper">
            <input type="text" id="searchInput" placeholder="Buscar......" />
            <button class="btn-search-modal" onclick="realizarBusqueda()">BUSCAR</button>
          </div>
        </div>
        
        <div class="filter-selects">
          <div class="filter-group">
            <label>Grado</label>
            <select id="gradoSelect" onchange="realizarBusqueda()">
              <option value="" selected>Seleccionar</option>
              <option value="todos">Todos</option>
              <option value="Diplomado">Diplomado</option>
              <option value="Maestría">Maestría</option>
              <option value="Doctorado">Doctorado</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Modalidad</label>
            <select id="modalidadSelect" onchange="realizarBusqueda()">
              <option value="" selected>Seleccionar</option>
              <option value="todos">Todos</option>
              <option value="Presencial">Presencial</option>
              <option value="Virtual">Virtual</option>
              <option value="Semipresencial">Semipresencial</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Área</label>
            <select id="areaSelect" onchange="realizarBusqueda()">
              <option value="" selected>Seleccionar</option>
              <option value="todos">Todos</option>
              <option value="Informática">Tecnología y Sistemas</option>
              <option value="Ingeniería">Ingeniería</option>
              <option value="Educación">Educación</option>
              <option value="Química">Ciencias</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="search-content-wrapper">
        <div class="search-results">
          <div class="results-grid" id="searchResults">
            <!-- Resultados se cargarán aquí dinámicamente -->
          </div>
        </div>
        
        <div class="search-sidebar">
          <h4>Filtros de búsqueda</h4>
          
          <div class="filter-section">
            <h5>Tipo de programa</h5>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterDiplomados" onchange="aplicarFiltros()">
              <label for="filterDiplomados">Diplomados</label>
            </div>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterMaestrias" onchange="aplicarFiltros()">
              <label for="filterMaestrias">Maestrías</label>
            </div>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterDoctorados" onchange="aplicarFiltros()">
              <label for="filterDoctorados">Doctorados</label>
            </div>
          </div>
          
          <div class="filter-section">
            <h5>Modalidad</h5>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterPresencial" onchange="aplicarFiltros()">
              <label for="filterPresencial">Presencial</label>
            </div>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterVirtual" onchange="aplicarFiltros()">
              <label for="filterVirtual">Virtual</label>
            </div>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterHibrido" onchange="aplicarFiltros()">
              <label for="filterHibrido">Semipresencial</label>
            </div>
          </div>
          
          <div class="filter-section">
            <h5>Área</h5>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterTecnologia" onchange="aplicarFiltros()">
              <label for="filterTecnologia">Tecnología y sistemas</label>
            </div>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterNegocios" onchange="aplicarFiltros()">
              <label for="filterNegocios">Negocios y Administración</label>
            </div>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterSalud" onchange="aplicarFiltros()">
              <label for="filterSalud">Salud y Medicina</label>
            </div>
            <div class="filter-checkbox">
              <input type="checkbox" id="filterEducacion" onchange="aplicarFiltros()">
              <label for="filterEducacion">Educación y Pedagogía</label>
            </div>
          </div>
          
          <button class="btn-apply-filters" onclick="aplicarFiltros()">Aplicar Filtros</button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Inyectar modal en el DOM
function injectSearchModal() {
  if (!document.getElementById('searchModal')) {
    const div = document.createElement('div');
    div.innerHTML = searchModalHTML;
    document.body.appendChild(div.firstElementChild);
  }
}

// Abrir modal de búsqueda
function abrirModalBusqueda() {
  injectSearchModal(); // Asegurar que existe
  document.getElementById('searchModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  // No mostrar resultados inicialmente
  document.getElementById('searchResults').innerHTML = '';
}

// Cerrar modal de búsqueda
function cerrarModalBusqueda() {
  document.getElementById('searchModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Realizar búsqueda
function realizarBusqueda() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const grado = document.getElementById('gradoSelect').value;
  const modalidad = document.getElementById('modalidadSelect').value;
  const area = document.getElementById('areaSelect').value;
  
  // Si no hay término de búsqueda y todos los filtros están en "Seleccionar" (vacío), no mostrar nada
  if (!searchTerm && grado === "" && modalidad === "" && area === "") {
    document.getElementById('searchResults').innerHTML = '';
    return;
  }

  let resultados = programasDB;
  
  // Filtrar por término de búsqueda
  if (searchTerm) {
    resultados = resultados.filter(p => 
      p.nombre.toLowerCase().includes(searchTerm) ||
      p.tipo.toLowerCase().includes(searchTerm) ||
      p.area.toLowerCase().includes(searchTerm)
    );
  }
  
  // Filtrar por grado
  if (grado && grado !== 'todos') {
    resultados = resultados.filter(p => p.tipo === grado);
  }
  
  // Filtrar por modalidad
  if (modalidad && modalidad !== 'todos') {
    resultados = resultados.filter(p => p.modalidad === modalidad);
  }
  
  // Filtrar por área
  if (area && area !== 'todos') {
    resultados = resultados.filter(p => p.area === area);
  }
  
  mostrarResultados(resultados);
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
  if (document.getElementById('filterTecnologia').checked) areasSeleccionadas.push('Sistemas', 'Informática');
  if (document.getElementById('filterNegocios').checked) areasSeleccionadas.push('Ingeniería', 'Logística');
  if (document.getElementById('filterSalud').checked) areasSeleccionadas.push('Electrónica', 'Química');
  if (document.getElementById('filterEducacion').checked) areasSeleccionadas.push('Educación');
  
  if (areasSeleccionadas.length > 0) {
    resultados = resultados.filter(p => areasSeleccionadas.some(area => p.area.includes(area)));
  }
  
  // Aplicar también los filtros de los selectores superiores
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

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  injectSearchModal(); // Inyectar al cargar

  // Agregar evento al icono de búsqueda en todas las páginas
  const searchIcons = document.querySelectorAll('.bx-search, .search-box i');
  searchIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', abrirModalBusqueda);
  });
  
  // Búsqueda al presionar Enter
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        realizarBusqueda();
      }
    });
  }
  
  // Cerrar modal al hacer clic fuera
  window.onclick = function(event) {
    const modal = document.getElementById('searchModal');
    if (event.target == modal) {
      cerrarModalBusqueda();
    }
  }
});

// Expose functions to window
window.abrirModalBusqueda = abrirModalBusqueda;
window.cerrarModalBusqueda = cerrarModalBusqueda;
window.realizarBusqueda = realizarBusqueda;
window.aplicarFiltros = aplicarFiltros;
