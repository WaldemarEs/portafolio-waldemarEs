// ======================
// Variables principales
// ======================
var sections = document.querySelectorAll(".section");
var navLinks = document.querySelectorAll("#main-nav a");
var langBtn = document.getElementById("lang-btn");

// ======================
// Textos en español y portugués
// ======================
var translation = {
  es: {
    btn: "ES",
    headerTitle: "waldemarEs",
    headerDesc:
      "Aplico la disciplina de la música y la pasión por los videojuegos al mundo digital, construyendo proyectos que combinan creatividad, tecnología y aprendizaje constante. Valoro mi familia y la inspiración que me brinda, llevando cada idea con propósito y entusiasmo.",
    navTech: "Inicio",
    navProjects: "Proyectos",
    navContact: "Contacto",
    techTitle: "Técnico en Informática - Sistemas",
    techDesc:
      "Mi formación técnica se enfoca en el desarrollo de aplicaciones y entornos web. Cuento con conocimientos en lógica de programación y lenguajes como Java y C++, que utilizo como base para construir soluciones digitales bien estructuradas. Además del desarrollo de software, mi formación incluye la gestión de bases de datos, sistemas operativos y el mantenimiento de equipos informáticos.",
    footerName: "waldemarEs",
  },
  pt: {
    btn: "PT",
    headerTitle: "waldemarEs",
    headerDesc:
      "Aplico a disciplina da música e a paixão pelos videogames ao mundo digital, construindo projetos que combinam criatividade, tecnologia e aprendizado constante. Valorizo minha família e a inspiração que ela me proporciona, levando cada ideia com propósito e entusiasmo.",
    navTech: "Início",
    navProjects: "Projetos",
    navContact: "Contato",
    techTitle: "Técnico em Informática - Sistemas",
    techDesc:
      "Minha formação técnica se concentra no desenvolvimento de aplicações e ambientes web. Possuo conhecimentos em lógica de programação e linguagens como Java e C++, que utilizo como base para construir soluções digitais bem estruturadas. Além do desenvolvimento de software, minha formação inclui gestão de bases de dados, sistemas operacionais e manutenção de equipamentos de informática.",
    footerName: "waldemarEs",
  },
};

// ======================
// Citas (Mantenemos tus techQuotes)
// ======================
var techQuotes = [
  {
    es: "La mejor manera de predecir el futuro es inventarlo.",
    pt: "A melhor maneira de prever o futuro é inventá-lo.",
    author: "Alan Kay",
  },
  {
    es: "Hablar es fácil. Muéstrame el código.",
    pt: "Falar é fácil. Mostre-me o código.",
    author: "Linus Torvalds",
  },
  {
    es: "La simplicidad es un requisito previo para la fiabilidad.",
    pt: "A simplicidade é um pré-requisito para a confiabilidade.",
    author: "Edsger Dijkstra",
  },
  {
    es: "El futuro pertenece a quienes crean.",
    pt: "O futuro pertence àqueles que criam.",
    author: "Steve Wozniak",
  },
];

// ======================
// Estado
// ======================
var currentLang = "es";
var currentSection = "tech-section"; // CAMBIO: Iniciamos en tech
var currentQuote = null;

// ======================
// Función para mostrar cita
// ======================
function mostrarCita() {
  if (!currentQuote) return;
  document.getElementById("quote-text").textContent = currentQuote[currentLang];
  document.getElementById("quote-author").textContent =
    " — " + currentQuote.author;
}

// ======================
// Cambiar sección
// ======================
function alternarSecciones(targetId) {
  currentSection = targetId;
  sections.forEach((section) => {
    section.className =
      section.id === targetId ? "section activa" : "section hidden";
  });

  // Por ahora, siempre usamos citas de tecnología
  currentQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)];
  mostrarCita();
}

// ======================
// Cambiar idioma
// ======================
function cambiarIdioma() {
  currentLang = currentLang === "es" ? "pt" : "es";

  // Header
  document.getElementById("header-desc").innerText =
    translation[currentLang].headerDesc;

  // Navegación (Ajustada a tu nuevo orden)
  navLinks[0].innerText = translation[currentLang].navTech;
  navLinks[1].innerText = translation[currentLang].navProjects;
  navLinks[2].innerText = translation[currentLang].navContact;

  // Título y texto de Tech
  document.getElementById("tech-section").querySelector("h2").innerText =
    translation[currentLang].techTitle;
  document.getElementById("tech-section").querySelector("p").innerText =
    translation[currentLang].techDesc;

  // Botón
  langBtn.innerText = translation[currentLang].btn;

  mostrarCita();
}

// ======================
// Eventos
// ======================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alternarSecciones(link.getAttribute("href").substring(1));
  });
});

langBtn.addEventListener("click", cambiarIdioma);

// ======================
// Inicialización
// ======================
alternarSecciones("tech-section"); // CAMBIO: Carga tecnología de entrada
