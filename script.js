// ======================
// Variables principales
// ======================
var sections = document.querySelectorAll(".section"); // Todas las secciones
var navLinks = document.querySelectorAll("#main-nav a"); // Links del nav
var langBtn = document.getElementById("lang-btn"); // Botón de idioma

// ======================
// Textos en español y portugués
// ======================
var translation = {
  es: {
    btn: "ES",
    headerTitle: "waldemarEs",
    headerDesc:
      "Portafolio profesional que integra tecnologías de la información y educación musical, combinando análisis, creatividad y experiencia práctica.",
    headerQuote: "Conocimiento aplicado con criterio y propósito.",
    navMusic: "Música",
    navTech: "Tecnología",
    navContact: "Contacto",
    musicTitle: "Profesor de Música",
    musicDesc:
      "Como Profesor de Educación Musical formado en el Instituto Pedagógico de Caracas (UPEL), mi camino profesional se ha construido a través de la guitarra clásica y la música folclórica venezolana. Mi experiencia en la docencia me ha permitido desarrollar la habilidad de enseñar y comunicar ideas de forma clara, manteniendo siempre la constancia y el orden que la música exige.",
    techTitle: "Técnico en Informática",
    techDesc:
      "Mi formación técnica se enfoca en el desarrollo de aplicaciones y entornos web. Cuento con conocimientos en lógica de programación y lenguajes como Java y C++, que utilizo como base para construir soluciones digitales bien estructuradas. Además del desarrollo de software, mi formación incluye la gestión de bases de datos, sistemas operativos y el mantenimiento de equipos informáticos.",
    footer: "© 2026 - Creado por waldemarEs",
  },
  pt: {
    btn: "PT",
    headerTitle: "waldemarEs",
    headerDesc:
      "Portfólio profissional que integra tecnologias da informação e educação musical, combinando análise, criatividade e experiência prática.",
    headerQuote: "Conhecimento aplicado com critério e propósito.",
    navMusic: "Música",
    navTech: "Tecnologia",
    navContact: "Contato",
    musicTitle: "Professor de Música",
    musicDesc:
      "Como Professor de Educação Musical formado no Instituto Pedagógico de Caracas (UPEL), meu percurso profissional foi construído através do violão clássico e da música folclórica venezuelana. Minha experiência docente me permitiu desenvolver a habilidade de ensinar e comunicar ideias de forma clara, mantendo sempre a constância e a ordem que a música exige.",
    techTitle: "Técnico em Informática",
    techDesc:
      "Minha formação técnica se concentra no desenvolvimento de aplicações e ambientes web. Possuo conhecimentos em lógica de programação e linguagens como Java e C++, que utilizo como base para construir soluções digitais bem estruturadas. Além do desenvolvimento de software, minha formação inclui gestão de bases de dados, sistemas operacionais e manutenção de equipamentos de informática.",
    footer: "© 2026 - Criado por waldemarEs",
  },
};

// Idioma inicial
var currentLang = "es";

// ======================
// Función para alternar secciones
// ======================
function alternarSecciones(targetId) {
  for (var i = 0; i < sections.length; i++) {
    sections[i].className =
      sections[i].id === targetId ? "section activa" : "section hidden";
  }
}

// ======================
// Función para cambiar idioma
// ======================
function cambiarIdioma() {
  // Alterna el idioma
  currentLang = currentLang === "es" ? "pt" : "es";

  // Header
  document.querySelector(".logo-text").innerText =
    translation[currentLang].headerTitle;
  document.querySelector("header p").innerText =
    translation[currentLang].headerDesc;
  document.querySelector("header blockquote").innerText =
    translation[currentLang].headerQuote;

  // Navegación
  navLinks[0].innerText = translation[currentLang].navMusic;
  navLinks[1].innerText = translation[currentLang].navTech;
  navLinks[2].innerText = translation[currentLang].navContact;

  // Secciones
  document.getElementById("music-section").querySelector("h2").innerText =
    translation[currentLang].musicTitle;
  document.getElementById("music-section").querySelector("p").innerText =
    translation[currentLang].musicDesc;
  document.getElementById("tech-section").querySelector("h2").innerText =
    translation[currentLang].techTitle;
  document.getElementById("tech-section").querySelector("p").innerText =
    translation[currentLang].techDesc;

  // Footer
  document.getElementById("footer-p").innerText =
    translation[currentLang].footer;

  // Botón
  langBtn.innerText = translation[currentLang].btn;
}

// ======================
// Eventos
// ======================
// Click en links de navegación
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    alternarSecciones(this.getAttribute("href").substring(1));
  });
}

// Click en botón de idioma
langBtn.addEventListener("click", cambiarIdioma);

// ======================
// Inicializamos mostrando Música
// ======================
alternarSecciones("music-section");
