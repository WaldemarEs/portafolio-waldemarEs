// ======================
// Variables principales
// ======================
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("#main-nav a");
const langBtn = document.getElementById("lang-btn");

// ======================
// Textos de Traducción
// ======================
const translation = {
  es: {
    btn: "ES",
    headerDesc: "Como apasionado de la música y la tecnología, aplico la constancia y el pensamiento creativo a cada línea de código, desarrollando proyectos con propósito, entusiasmo y un enfoque en el aprendizaje continuo.",
    navHome: "Início",
    navUfcd: "UFCD",
    navProjects: "Proyectos",
    navContact: "Contacto",
    contactTitle: "Contacto",
    contactQuote: "Si buscas un perfil <span class='v8-highlight'>técnico</span> con una visión creativa y resolutiva.",
    labelEmail: "01 / E-Mail Directo",
    labelSocial: "02 / Redes Profesionales",
    labelStatus: "03 / Disponibilidad",
    statusDetail: "Figueira da Foz, PT<br>Presencial & Remoto",
    techTitle: "Técnico de Informática - Sistemas",
    techDesc: "Mi formación técnica se especializa en el desarrollo de aplicaciones y entornos web. Cuento con conocimientos en C/C++, Java y MySQL como lenguajes base para construir soluciones digitales, sustentadas sobre una sólida base en arquitectura de sistemas y redes que me permite desarrollar proyectos integrales, estructurados y eficientes.",
    ufcdTitle: "Unidades de Formación (UFCD)",
    footerLabel: "Creado por",
    labelResumen: "Resumen Técnico",
    labelTrabajos: "Trabajos / Evidencias",
    // Categorías UFCD
    catHardware: "Hardware & Redes",
    catProgramacion: "Programación",
    catWeb: "Web & Datos",
    catGestion: "Gestión",
    skillsTitle: "⚡ Competencias Técnicas"
  },
  pt: {
    btn: "PT",
    headerDesc: "Como apaixonado pela música e pela tecnologia, aplico a constância e o pensamento criativo a cada linha de código, desenvolvendo projetos com propósito, entusiasmo e um foco no aprendizado contínuo.",
    navHome: "Início",
    navUfcd: "UFCD",
    navProjects: "Projetos",
    navContact: "Contato",
    contactTitle: "Contato",
    contactQuote: "Se procura um perfil <span class='v8-highlight'>técnico</span> com uma visão criativa e resolutiva.",
    labelEmail: "01 / E-Mail Direto",
    labelSocial: "02 / Redes Profissionais",
    labelStatus: "03 / Disponibilidade",
    statusDetail: "Figueira da Foz, PT<br>Presencial e Remoto",
    techTitle: "Técnico de Informática - Sistemas",
    techDesc: "A minha formação técnica especializa-se no desenvolvimento de aplicações e ambientes web. Tenho conhecimentos em C/C++, Java e MySQL como linguagens base para construir soluções digitais, sustentadas sobre uma base sólida em arquitetura de sistemas e redes que me permite desenvolver projetos integrais, estruturados e eficientes.",
    ufcdTitle: "Unidades de Formação (UFCD)",
    footerLabel: "Criado por",
    labelResumen: "Resumo Técnico",
    labelTrabajos: "Trabalhos / Evidencias",
    // Categorias UFCD
    catHardware: "Hardware e Redes",
    catProgramacion: "Programação",
    catWeb: "Web & Dados",
    catGestion: "Gestão",
    skillsTitle: "⚡ Competências Técnicas"
  },
};

// ======================
// Citas
// ======================
const techQuotes = [
  { es: "La mejor manera de predecir el futuro es inventarlo.", pt: "A melhor maneira de prever o futuro é inventá-lo.", author: "Alan Kay" },
  { es: "Hablar es fácil. Muéstrame el código.", pt: "Falar é fácil. Mostre-me o código.", author: "Linus Torvalds" },
  { es: "La simplicidad es un requisito previo para la fiabilidad.", pt: "A simplicidade é um pré-requisito para a confiabilidade.", author: "Edsger Dijkstra" },
  { es: "El futuro pertenece a quienes crean.", pt: "O futuro pertence àqueles que criam.", author: "Steve Wozniak" },
];

let currentLang = "pt";
let currentQuote = null;
let codigoUfcdAbierta = null;

// ======================
// Lógica del Visor (PDF, Imágenes, Web)
// ======================
function abrirVisor(url, nombre) {
    const visor = document.getElementById('document-viewer');
    const iframe = document.getElementById('viewer-iframe');
    const label = document.getElementById('viewer-filename');
    
    if (!visor || !iframe) {
        console.error("Visor no encontrado en el DOM");
        return;
    }
    
    // Limpiar iframe antes de cargar nuevo contenido
    iframe.src = "about:blank";
    
    // Mostrar indicador de carga
    if (label) {
        label.innerText = `Cargando: ${nombre}...`;
    }
    
    // Cargar el nuevo contenido
    setTimeout(() => {
        iframe.src = url;
        if (label) label.innerText = nombre;
    }, 50);
    
    visor.classList.add('activa-visor');
    document.body.classList.add('no-scroll');
}

function cerrarVisor() {
    const visor = document.getElementById('document-viewer');
    const iframe = document.getElementById('viewer-iframe');
    
    if (visor) {
        visor.classList.remove('activa-visor');
        document.body.classList.remove('no-scroll');
        
        // Limpiar iframe después de cerrar (liberar recursos)
        if (iframe) {
            setTimeout(() => {
                iframe.src = "about:blank";
            }, 200);
        }
    }
}

// ======================
// Funciones de Lógica
// ======================

function actualizarInterfaz() {
  langBtn.innerText = translation[currentLang].btn;
  document.getElementById("header-desc").innerText = translation[currentLang].headerDesc;
  document.getElementById("footer-label").innerText = translation[currentLang].footerLabel;

  const labelResumen = document.getElementById("txt-label-resumen");
  const labelTrabajos = document.getElementById("txt-label-trabajos");
  
  if (labelResumen) labelResumen.innerText = translation[currentLang].labelResumen;
  if (labelTrabajos) labelTrabajos.innerText = translation[currentLang].labelTrabajos;

  navLinks[0].innerText = translation[currentLang].navHome;
  navLinks[1].innerText = translation[currentLang].navUfcd;
  navLinks[2].innerText = translation[currentLang].navProjects;
  navLinks[3].innerText = translation[currentLang].navContact;

  const techH2 = document.querySelector("#tech-section h2");
  const techP = document.querySelector("#tech-section p");
  const ufcdH2 = document.querySelector("#ufcd-section h2");

  if (techH2) techH2.innerText = translation[currentLang].techTitle;
  if (techP) techP.innerText = translation[currentLang].techDesc;
  if (ufcdH2) ufcdH2.innerText = translation[currentLang].ufcdTitle;

  // TRADUCCIÓN DE CATEGORÍAS UFCD
  const catHardware = document.getElementById("cat-hardware");
  const catProgramacion = document.getElementById("cat-programacion");
  const catWeb = document.getElementById("cat-web");
  const catGestion = document.getElementById("cat-gestion");
  
  if (catHardware) catHardware.innerText = translation[currentLang].catHardware;
  if (catProgramacion) catProgramacion.innerText = translation[currentLang].catProgramacion;
  if (catWeb) catWeb.innerText = translation[currentLang].catWeb;
  if (catGestion) catGestion.innerText = translation[currentLang].catGestion;

  if (codigoUfcdAbierta) {
    renderizarContenidoUFCD(codigoUfcdAbierta);
  }
  // TRADUCCIÓN SECCIÓN CONTACTO
  const contactTitle = document.getElementById("contact-title");
  const contactQuote = document.getElementById("contact-quote");
  const labelEmail = document.getElementById("label-email");
  const labelSocial = document.getElementById("label-social");
  const labelStatus = document.getElementById("label-status");
  const statusDetail = document.getElementById("status-detail");

  if (contactTitle) contactTitle.innerText = translation[currentLang].contactTitle;
  if (contactQuote) contactQuote.innerHTML = translation[currentLang].contactQuote;
  if (labelEmail) labelEmail.innerText = translation[currentLang].labelEmail;
  if (labelSocial) labelSocial.innerText = translation[currentLang].labelSocial;
  if (labelStatus) labelStatus.innerText = translation[currentLang].labelStatus;
  if (statusDetail) statusDetail.innerHTML = translation[currentLang].statusDetail;

  const skillsTitle = document.querySelector(".skills-title");
  if (skillsTitle) {
      skillsTitle.innerText = translation[currentLang].skillsTitle || "⚡ Competências Técnicas";
  }

  actualizarTooltips();
  mostrarCita();
}

function mostrarCita() {
  if (!currentQuote) currentQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)];
  document.getElementById("quote-text").textContent = currentQuote[currentLang];
  document.getElementById("quote-author").textContent = " — " + currentQuote.author;
}

function actualizarTooltips() {
  // Comprobar que materiasData existe
  if (typeof materiasData === 'undefined') return;
  
  const spans = document.querySelectorAll(".materia-tags span");
  spans.forEach((span) => {
    const codigo = span.innerText.trim();
    if (materiasData[codigo] && materiasData[codigo][currentLang]) {
      span.setAttribute("data-info", materiasData[codigo][currentLang]);
      span.title = "";
    } else {
      span.setAttribute("data-info", "Información no disponible");
    }
  });
}

function alternarSecciones(targetId) {
  sections.forEach((section) => {
    section.className = section.id === targetId ? "section activa" : "section hidden";
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === "#" + targetId) {
      link.classList.add("active-link");
    }
  });

  currentQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)];
  mostrarCita();
}

function cambiarIdioma() {
  currentLang = currentLang === "es" ? "pt" : "es";
  localStorage.setItem("userLang", currentLang);
  actualizarInterfaz();
}

function renderizarContenidoUFCD(codigo) {
    // Comprobar que materiasData existe
    if (typeof materiasData === 'undefined') {
        console.error("materiasData no está definido");
        return;
    }
    
    const info = materiasData[codigo];
    if (!info) {
        console.warn(`No hay datos para la UFCD ${codigo}`);
        return;
    }

    const tituloElem = document.getElementById("det-titulo");
    const statsElem = document.getElementById("det-stats");
    const resumenElem = document.getElementById("det-resumen");
    const linksDiv = document.getElementById("det-links");
    
    
    if (tituloElem) tituloElem.innerText = `${codigo} - ${info[currentLang]}`;
    
    if (statsElem && info.detalles) {
        statsElem.innerText = `${info.detalles.horas} | ${info.detalles.creditos} Créditos`;
    }
    
    if (resumenElem && info.resumen && info.resumen[currentLang]) {
        resumenElem.innerText = info.resumen[currentLang];
    } else if (resumenElem) {
        resumenElem.innerText = "Información no disponible";
    }
    
    if (linksDiv) {
        linksDiv.innerHTML = "";
        if (info.trabajos && info.trabajos.length > 0) {
            info.trabajos.forEach(doc => {
                const a = document.createElement("a");
                a.className = "btn-evidencia";
                a.innerHTML = `📄 ${doc.nombre}`;
                
                const ext = doc.url.split('.').pop().toLowerCase();
                const esVisualizable = ['pdf', 'png', 'jpg', 'jpeg', 'gif'].includes(ext) || doc.url.startsWith('http');
                
                if (esVisualizable) {
                    a.href = "#";
                    a.onclick = (e) => {
                        e.preventDefault();
                        abrirVisor(doc.url, doc.nombre);
                    };
                } else {
                    a.href = doc.url;
                    a.target = "_blank";
                }
                linksDiv.appendChild(a);
            });
        } else {
            linksDiv.innerHTML = "<em>No hay evidencias disponibles.</em>";
        }
    }
}

function activarDetallesUFCD() {
    const codigos = document.querySelectorAll(".materia-tags span");
    const container = document.getElementById("ufcd-detalle-container");

    codigos.forEach(span => {
        span.style.cursor = "pointer";
        span.addEventListener("click", () => {
            const codigo = span.innerText.trim();
            codigoUfcdAbierta = codigo;
            if (container) container.classList.remove("hidden");
            renderizarContenidoUFCD(codigo);
        });
    });
}

// ======================
// Eventos e Inicialización
// ======================

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    alternarSecciones(targetId);
  });
});

langBtn.addEventListener("click", cambiarIdioma);

// Cerrar visor con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") cerrarVisor();
});

window.onload = () => {
  const savedLang = localStorage.getItem("userLang");
  if (savedLang && (savedLang === "es" || savedLang === "pt")) {
    currentLang = savedLang;
  }

  // Comprobar si materiasData existe antes de continuar
  if (typeof materiasData !== 'undefined') {
    actualizarInterfaz();
    alternarSecciones("tech-section");
    activarDetallesUFCD();

    // ====================================================
    // FORZAR LA APERTURA DE LA PRIMERA UFCD POR DEFECTO
    // ====================================================
    const ufcdPorDefecto = "0784"; 
    const container = document.getElementById("ufcd-detalle-container");
    
    if (container) {
      container.classList.remove("hidden"); 
    }
    codigoUfcdAbierta = ufcdPorDefecto;     
    renderizarContenidoUFCD(ufcdPorDefecto); 

  } else {
    console.error("Error: No se cargó el archivo ufcds.js");
    // Mostrar mensaje al usuario
    const ufcdSection = document.querySelector("#ufcd-section");
    if (ufcdSection) {
      ufcdSection.innerHTML += '<p style="color:red; padding:20px;">Error: Datos de UFCD no cargados</p>';
    }
  }
};