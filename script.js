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
    navMusic: "Música",
    navTech: "Tecnología",
    navContact: "Contacto",
    musicTitle: "Profesor de Música",
    musicDesc:
      "Como Profesor de Educación Musical formado en el Instituto Pedagógico de Caracas (UPEL), mi camino profesional se ha construido a través de la guitarra clásica y la música folclórica venezolana. Mi experiencia en la docencia me ha permitido desarrollar la habilidad de enseñar y comunicar ideas de forma clara, manteniendo siempre la constancia y el orden que la música exige.",
    techTitle: "Técnico en Informática",
    techDesc:
      "Mi formación técnica se enfoca en el desarrollo de aplicaciones y entornos web. Cuento con conocimientos en lógica de programación y lenguajes como Java y C++, que utilizo como base para construir soluciones digitales bien estructuradas. Además del desarrollo de software, mi formación incluye la gestión de bases de datos, sistemas operativos y el mantenimiento de equipos informáticos.",
    footerName: "waldemarEs",
  },
  pt: {
    btn: "PT",
    headerTitle: "waldemarEs",
    headerDesc:
      "Aplico a disciplina da música e a paixão pelos videogames ao mundo digital, construindo projetos que combinam criatividade, tecnologia e aprendizado constante. Valorizo minha família e a inspiração que ela me proporciona, levando cada ideia com propósito e entusiasmo.",
    navMusic: "Música",
    navTech: "Tecnologia",
    navContact: "Contato",
    musicTitle: "Professor de Música",
    musicDesc:
      "Como Professor de Educação Musical formado no Instituto Pedagógico de Caracas (UPEL), meu percurso profissional foi construído através do violão clássico e da música folclórica venezuelana. Minha experiência docente me permitiu desenvolver a habilidade de ensinar e comunicar ideias de forma clara, mantendo sempre a constância e a ordem que a música exige.",
    techTitle: "Técnico em Informática",
    techDesc:
      "Minha formação técnica se concentra no desenvolvimento de aplicações e ambientes web. Possuo conhecimentos em lógica de programação e linguagens como Java e C++, que utilizo como base para construir soluções digitais bem estruturadas. Além do desenvolvimento de software, minha formação inclui gestão de bases de dados, sistemas operacionais e manutenção de equipamentos de informática.",
    footerName: "waldemarEs",
  }
};

// ======================
// Citas por sección
// ======================
var musicQuotes = [
  { es: "La música comienza donde termina el poder de las palabras.", pt: "A música começa onde termina o poder das palavras.", author: "Andrés Segovia" },
  { es: "El arte verdadero no adorna: revela.", pt: "A arte verdadeira não adorna: revela.", author: "Leo Brouwer" },
  { es: "Sin disciplina no hay libertad artística.", pt: "Sem disciplina não existe liberdade artística.", author: "Paco de Lucía" },
  { es: "El sonido es solo el inicio; la intención es lo que permanece.", pt: "O som é apenas o início; a intenção é o que permanece.", author: "Julian Bream" },
  { es: "El propósito final de toda música es la elevación del espíritu.", pt: "O propósito final de toda música é a elevação do espírito.", author: "Johann Sebastian Bach" },
  { es: "La música expresa lo que no puede decirse con palabras.", pt: "A música expressa o que não pode ser dito com palavras.", author: "Victor Wooten" },
  { es: "Tocar es aprender a escuchar.", pt: "Tocar é aprender a escutar.", author: "John Petrucci" },
  { es: "El arte de la música es el arte de la comunicación.", pt: "A arte da música é a arte da comunicação.", author: "Herbie Hancock" },
  { es: "Cada nota tiene un propósito.", pt: "Cada nota tem um propósito.", author: "Andrés Segovia" },
  { es: "La música no miente.", pt: "A música não mente.", author: "Friedrich Nietzsche" }
];

var techQuotes = [
  { es: "La mejor manera de predecir el futuro es inventarlo.", pt: "A melhor maneira de prever o futuro é inventá-lo.", author: "Alan Kay" },
  { es: "La ciencia informática no trata de computadoras, sino de pensamiento.", pt: "A ciência da computação não trata de computadores, mas de pensamento.", author: "Donald Knuth" },
  { es: "Hablar es fácil. Muéstrame el código.", pt: "Falar é fácil. Mostre-me o código.", author: "Linus Torvalds" },
  { es: "La simplicidad es un requisito previo para la fiabilidad.", pt: "A simplicidade é um pré-requisito para a confiabilidade.", author: "Edsger Dijkstra" },
  { es: "La tecnología por sí sola no es suficiente: debe unirse a las humanidades.", pt: "A tecnologia sozinha não é suficiente: ela deve se unir às humanidades.", author: "Steve Jobs" },
  { es: "El software de calidad se construye con disciplina y creatividad.", pt: "O software de qualidade é construído com disciplina e criatividade.", author: "Bjarne Stroustrup" },
  { es: "Programar es pensar, diseñar y crear.", pt: "Programar é pensar, projetar e criar.", author: "Grace Hopper" },
  { es: "La innovación tecnológica surge de la curiosidad constante.", pt: "A inovação tecnológica surge da curiosidade constante.", author: "Tim Berners-Lee" },
  { es: "Los errores son oportunidades de aprendizaje.", pt: "Os erros são oportunidades de aprendizado.", author: "Margaret Hamilton" },
  { es: "El futuro pertenece a quienes crean.", pt: "O futuro pertence àqueles que criam.", author: "Steve Wozniak" }
];

// ======================
// Estado
// ======================
var currentLang = "es";
var currentSection = "music-section";
var currentQuote = null;

// ======================
// Función para mostrar cita según sección y idioma
// ======================
function mostrarCita() {
  if (!currentQuote) return;
  document.getElementById("quote-text").textContent = currentQuote[currentLang];
  document.getElementById("quote-author").textContent = " — " + currentQuote.author;
}

// ======================
// Cambiar sección
// ======================
function alternarSecciones(targetId) {
  currentSection = targetId;
  sections.forEach(section => {
    section.className = section.id === targetId ? "section activa" : "section hidden";
  });

  // Elegir cita aleatoria según sección
  currentQuote = targetId === "music-section"
    ? musicQuotes[Math.floor(Math.random() * musicQuotes.length)]
    : techQuotes[Math.floor(Math.random() * techQuotes.length)];

  mostrarCita();
}

// ======================
// Cambiar idioma
// ======================
function cambiarIdioma() {
  currentLang = currentLang === "es" ? "pt" : "es";

  // Header
  document.querySelector(".logo-text").innerText = translation[currentLang].headerTitle;
  document.getElementById("header-desc").innerText = translation[currentLang].headerDesc;

  // Navegación
  navLinks[0].innerText = translation[currentLang].navMusic;
  navLinks[1].innerText = translation[currentLang].navTech;
  navLinks[2].innerText = translation[currentLang].navContact;

  // Secciones
  document.getElementById("music-section").querySelector("h2").innerText = translation[currentLang].musicTitle;
  document.getElementById("music-section").querySelector("p").innerText = translation[currentLang].musicDesc;
  document.getElementById("tech-section").querySelector("h2").innerText = translation[currentLang].techTitle;
  document.getElementById("tech-section").querySelector("p").innerText = translation[currentLang].techDesc;

  // Footer: solo actualizar el nombre manteniendo las llaves y estilo
  document.getElementById("footer-name").innerText = translation[currentLang].footerName;

  // Botón
  langBtn.innerText = translation[currentLang].btn;

  // Traducir la cita actual
  mostrarCita();
}

// ======================
// Eventos
// ======================
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alternarSecciones(link.getAttribute("href").substring(1));
  });
});

langBtn.addEventListener("click", cambiarIdioma);

// ======================
// Inicialización
// ======================
alternarSecciones("music-section");
