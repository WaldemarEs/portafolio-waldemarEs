// ======================
// Variables principales
// ======================
var sections = document.querySelectorAll(".section");
var navLinks = document.querySelectorAll("#main-nav a");
var langBtn = document.getElementById("lang-btn");

// ======================
// Datos de UFCD (Nombres oficiales para los globos informativos)
// ======================
const materiasData = {
  "0769": {
    es: "Arquitectura interna del computador",
    pt: "Arquitetura interna do computador",
  },
  "0770": {
    es: "Dispositivos y periféricos",
    pt: "Dispositivos e periféricos",
  },
  "0771": { es: "Conexiones de red", pt: "Conexões de rede" },
  "0772": {
    es: "Sistemas operativos - instalación y configuración",
    pt: "Sistemas operativos - instalação e configuração",
  },
  "0773": { es: "Rede local - instalação", pt: "Rede local - instalação" },
  "0774": {
    es: "Rede local - instalación de software base",
    pt: "Rede local - instalação de software base",
  },
  "0775": {
    es: "Rede local - administración",
    pt: "Rede local - administração",
  },
  "0776": {
    es: "Sistema de información de la empresa",
    pt: "Sistema de informação da empresa",
  },
  "0778": { es: "Hoja de cálculo", pt: "Folha de cálculo" },
  "0754": { es: "Procesador de texto", pt: "Processador de texto" },
  "0779": {
    es: "Utilidad de presentación gráfica",
    pt: "Utilitário de apresentação gráfica",
  },
  "0780": {
    es: "Aplicaciones de gestión administrativa",
    pt: "Aplicações de gestão administrativa",
  },
  "0781": {
    es: "Análisis de sistemas de información",
    pt: "Análise de sistemas de informação",
  },
  "0782": {
    es: "Programación en C/C++ - estructura básica y conceptos",
    pt: "Programação em C/C++ - estrutura básica e conceitos fundamentais",
  },
  "0783": {
    es: "Programación en C/C++ - ciclos y decisiones",
    pt: "Programação em C/C++ - ciclos e decisões",
  },
  "0784": {
    es: "Programación en C/C++ - funciones y estructuras",
    pt: "Programação em C/C++ - funções e estruturas",
  },
  "0785": {
    es: "Programación en C/C++ - formas complejas",
    pt: "Programação em C/C++ - formas complexas",
  },
  "0786": {
    es: "Instalación y config. de sistemas de gestión de bases de datos",
    pt: "Instalação e configuração de sistemas de gestão de bases de dados",
  },
  "0787": {
    es: "Administración de bases de datos",
    pt: "Administração de bases de dados",
  },
  "0788": {
    es: "Instalación y administración de servidores WEB",
    pt: "Instalação e administração de servidores WEB",
  },
  "0789": {
    es: "Fundamentos de lenguaje JAVA",
    pt: "Fundamentos de linguagem JAVA",
  },
  10791: {
    es: "Desarrollo de aplicaciones web en JAVA",
    pt: "Desenvolvimento de aplicações web em JAVA",
  },
  "0791": {
    es: "Programación en JAVA - avanzada",
    pt: "Programação em JAVA - avançada",
  },
  "0792": {
    es: "Creación de páginas para la web en hipertexto",
    pt: "Criação de páginas para a web em hipertexto",
  },
  "0793": {
    es: "Scripts CGI y hojas de estilo",
    pt: "Scripts CGI e folhas de estilo",
  },
  PRA: {
    es: "Portafolio de Reflexión y Aprendizaje",
    pt: "Portfólio de Reflexão e Aprendizagem",
  },
  FPCT: {
    es: "Formación Práctica en Contexto de Trabajo",
    pt: "Formação Prática em Contexto de Trabalho",
  },
};

// ======================
// Textos en español y portugués
// ======================
var translation = {
  es: {
    btn: "ES",
    headerDesc:
      "Como apasionado de la música y la tecnología, aplico la constancia y el pensamiento creativo a cada línea de código, desarrollando proyectos con propósito, entusiasmo y un enfoque en el aprendizaje continuo.",
    navHome: "Inicio",
    navUfcd: "UFCD",
    navProjects: "Proyectos",
    navContact: "Contacto",
    techTitle: "Técnico en Informática - Sistemas",
    techDesc:
      "Mi formación técnica se enfoca en el desarrollo de aplicaciones y entornos web. Cuento con conocimientos en lógica de programación y lenguajes como Java y C++, que utilizo como base para construir soluciones digitales bien estructuradas. Además del desarrollo de software, mi formación incluye la gestión de bases de datos, sistemas operativos y el mantenimiento de equipos informáticos.",
    ufcdTitle: "Unidades de Formación (UFCD)",
    footerLabel: "Creado por"
  },
  pt: {
    btn: "PT",
    headerDesc:
      "Como apaixonado pela música e pela tecnologia, aplico a constância e o pensamento criativo a cada linha de código, desenvolvendo projetos com propósito, entusiasmo e um foco no aprendizado contínuo.",
    navHome: "Início",
    navUfcd: "UFCD",
    navProjects: "Projetos",
    navContact: "Contato",
    techTitle: "Técnico em Informática - Sistemas",
    techDesc:
      "Minha formación técnica se concentra no desenvolvimento de aplicações e ambientes web. Possuo conhecimentos em lógica de programação e linguagens como Java e C++, que utilizo como base para construir soluções digitais bem estructuradas. Além do desenvolvimento de software, minha formação incluye gestão de bases de datos, sistemas operacionais e manutenção de equipamentos de informática.",
    ufcdTitle: "Unidades de Formação (UFCD)",
    footerLabel: "Criado por"
  },
};

// ======================
// Citas Variadas
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

  {
    es: "El software es una combinación de arte e ingeniería.",
    pt: "O software é uma combinação de arte e engenharia.",
    author: "Bill Gates",
  },
  {
    es: "La disciplina es el puente entre las metas y los logros.",
    pt: "A disciplina é a ponte entre as metas e as realizações.",
    author: "Jim Rohn",
  },
  {
    es: "Un buen diseño es como una melodía: todo parece estar en su lugar.",
    pt: "Um bom design é como uma melodia: tudo parece estar no seu lugar.",
    author: "Anónimo",
  },
  {
    es: "Los videojuegos no solo nos enseñan a jugar, nos enseñan a resolver problemas.",
    pt: "Os videogames não nos ensinam apenas a jogar, ensinam-nos a resolver problemas.",
    author: "Anónimo",
  },
  {
    es: "En la música como en el código, el silencio y los espacios también importan.",
    pt: "Na música como no código, o silêncio e os espaços também importam.",
    author: "Pensamiento Dev",
  },
  {
    es: "La tecnología es el lienzo, el código es la partitura.",
    pt: "A tecnologia é a tela, o código é a partitura.",
    author: "Anónimo",
  },
  {
    es: "Primero, resuelve el problema. Luego, escribe el código.",
    pt: "Primeiro, resolva o problema. Depois, escreva o código.",
    author: "John Johnson",
  },
  {
    es: "La constancia es la clave del virtuosismo.",
    pt: "A constância é a chave do virtuosismo.",
    author: "Principio Musical",
  },
  {
    es: "La elegancia en el código es la armonía de la función.",
    pt: "A elegância no código é a harmonia da função.",
    author: "Anónimo",
  },
];

var currentLang = "es";
var currentQuote = null;

// ======================
// Funciones de Lógica
// ======================

function mostrarCita() {
  if (!currentQuote) return;
  document.getElementById("quote-text").textContent = currentQuote[currentLang];
  document.getElementById("quote-author").textContent =
    " — " + currentQuote.author;
}

function actualizarTooltips() {
  const spans = document.querySelectorAll(".materia-tags span");
  spans.forEach((span) => {
    const codigo = span.innerText.trim();
    if (materiasData[codigo]) {
      span.setAttribute("data-info", materiasData[codigo][currentLang]);
      span.title = "";
    }
  });
}

function alternarSecciones(targetId) {
  sections.forEach((section) => {
    section.className =
      section.id === targetId ? "section activa" : "section hidden";
  });
  currentQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)];
  mostrarCita();
}

function cambiarIdioma() {
  currentLang = currentLang === "es" ? "pt" : "es";

  langBtn.innerText = translation[currentLang].btn;
  document.getElementById("header-desc").innerText =
    translation[currentLang].headerDesc;
  document.getElementById("footer-label").innerText = translation[currentLang].footerLabel;

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

  actualizarTooltips();
  mostrarCita();
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

window.onload = () => {
  alternarSecciones("tech-section");
  actualizarTooltips();
};
