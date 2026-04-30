
const materiasData = {
  "0769": {
    es: "Arquitectura interna del computador",
    pt: "Arquitetura interna do computador",
    resumen: {
      es: "Estudio detallado de la organización y componentes internos de un sistema informático. Se abordaron las fases de ejecución de tareas, la estructura y gestión de memoria (segmentación y paginación), así como la arquitectura del procesador, incluyendo unidades de cálculo, control y gestión de procesos.",
      pt: "Estudo detalhado da organização e componentes internos de um sistema informático. Foram abordadas as fases de execução de tarefas, a estrutura e gestão de memória (segmentação e paginação), bem como a arquitetura do processador, incluindo unidades de cálculo, controlo e gestão de processos."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Reflexão", url: "docs/0769_relatorio.pdf" },
      { nombre: "Esquema da CPU", url: "docs/0769_cpu.png" }
    ]
  },
  "0770": {
    es: "Dispositivos y periféricos",
    pt: "Dispositivos e periféricos",
    resumen: {
      es: "Estudio integral de los componentes de hardware y dispositivos externos. Se analizó el funcionamiento y la conexión de unidades de entrada/salida, sistemas de almacenamiento, interfaces de comunicación y la configuración de controladores (drivers) para asegurar la compatibilidad y el rendimiento óptimo del sistema informático.",
      pt: "Estudo integral dos componentes de hardware e dispositivos externos. Analisou-se o funcionamento e a ligação de unidades de entrada/saída, sistemas de armazenamento, interfaces de comunicação e a configuração de controladores (drivers) para assegurar a compatibilidade e o desempenho ótimo do sistema informático."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Manual de Dispositivos", url: "docs/0771_dispositivos.pdf" },
      { nombre: "Configuração de Periféricos", url: "docs/0771_config.docx" }
    ]
  },
  "0771": {
    es: "Conexiones de red",
    pt: "Conexões de rede",
    resumen: {
      es: "Aborda los fundamentos de la arquitectura de redes, incluyendo el modelo OSI, la configuración de redes LAN y el uso de protocolos de enrutamiento dinámico (RIP). Se trabajó en la simulación de infraestructuras mediante herramientas como Packet Tracer para la implementación de redes de datos y telefonía IP (VoIP).",
      pt: "Aborda os fundamentos da arquitetura de redes, incluindo o modelo OSI, a configuração de redes LAN e o uso de protocolos de encaminhamento dinâmico (RIP). Trabalhou-se na simulação de infraestruturas através de ferramentas como o Packet Tracer para a implementação de redes de dados e telefonia IP (VoIP)."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Relatório de Atividades (PRA)", url: "docs/0771_waldemar_pra.docx" },
      { nombre: "Configuração de Redes (Packet Tracer)", url: "docs/0771_packet_tracer.pkt" },
      { nombre: "Resumo Modelo OSI", url: "docs/0771_modelo_osi.pdf" }
    ]
  },
  "0772": {
    es: "Sistemas operativos - instalación y configuración",
    pt: "Sistemas operativos - instalação e configuração",
    resumen: {
      es: "Capacitación práctica en la instalación y parametrización de diversos sistemas operativos. El módulo incluyó el despliegue de soluciones de red como pfSense en entornos virtuales (VMware), la instalación de sistemas de servidor (Windows Server) y estaciones de trabajo tanto en entornos Windows 11 como distribuciones Linux (Ubuntu Desktop).",
      pt: "Capacitação prática na instalação e parametrização de diversos sistemas operativos. O módulo incluiu a implementação de soluções de rede como pfSense em ambientes virtuais (VMware), a instalação de sistemas de servidor (Windows Server) e estações de trabalho tanto em ambientes Windows 11 como distribuições Linux (Ubuntu Desktop)."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Instalação pfSense (VMware)", url: "docs/0772_pfsense.docx" },
      { nombre: "Instalação Windows Server", url: "docs/0772_windows_server.pdf" },
      { nombre: "Instalação Windows 11", url: "docs/0772_windows11.docx" },
      { nombre: "Instalação Ubuntu Desktop", url: "docs/0772_ubuntu.pdf" }
    ]
  }
,
  "0773": {
    es: "Red local - instalación",
    pt: "Rede local - instalação",
    resumen: {
      es: "Enfoque en la configuración inicial y gestión de redes locales (LAN) utilizando sistemas operativos de red como Windows Server 2012. Se trabajó en la administración de protocolos, direccionamiento IP, seguridad y gestión de cuentas de usuario, así como en la creación de directorios compartidos con permisos específicos para optimizar el entorno de trabajo.",
      pt: "Foco na configuração inicial e gestão de redes locais (LAN) utilizando sistemas operativos de rede como o Windows Server 2012. Trabalhou-se na administração de protocolos, endereçamento IP, segurança e gestão de contas de utilizador, bem como na criação de diretórios partilhados com permissões específicas para otimizar o ambiente de trabalho."
    },
    detalles: {
        horas: "25h",
        creditos: "2.25"
    },
    trabajos: [
      { nombre: "Relatório de Atividades (PRA)", "url": "docs/0773_waldemar_pra.pdf" },
      { nombre: "Instalação Windows Server 2012", "url": "docs/0773_win_server.pdf" },
      { nombre: "Configuração de Diretórios e Permissões", "url": "docs/0773_diretorios.docx" }
    ]
  }, 
  "0774": {
        es: "Red de área local - instalación de software base",
        pt: "Rede local - instalação de software base",
        resumen: {
            es: "Formación especializada en la implementación y administración de sistemas operativos de red local. El contenido técnico se centra en la instalación de software base para servidores, configuración de servicios esenciales y despliegue de software cliente. Se profundiza en el uso de herramientas de simulación profesional como Cisco Packet Tracer para el diseño de topologías, además del dominio de comandos de diagnóstico avanzados (NetStat, Arp, Nslookup) para la monitorización, resolución de conflictos y optimización del tráfico en infraestructuras de red.",
            pt: "Formação especializada na implementação e administração de sistemas operativos de rede local. O conteúdo técnico foca-se na instalação de software de base para servidores, configuração de serviços essenciais e implementação de software cliente. Aprofunda-se o uso de ferramentas de simulação profissional como Cisco Packet Tracer para o design de topologias, além do domínio de comandos de diagnóstico avançados (NetStat, Arp, Nslookup) para a monitorização, resolução de conflitos e otimização do tráfego em infraestruturas de rede."
        },
        detalles: { horas: "50h", creditos: "4.50" },
        trabajos: [
            { nombre: "Manual de Rede Local", url: "documentos/0774_manual.pdf" }
        ]
    },
    "0775": {
    es: "Red local - administración",
    pt: "Rede local - administração",
    resumen: {
      es: "Administración avanzada de servicios de red y sistemas, centrada en la gestión de infraestructuras empresariales. Se abordó el despliegue de Active Directory (AD-DS), la organización mediante unidades organizativas (OU), la gestión de políticas de grupo (GPO) para restricciones de usuario, y la configuración de servicios críticos como DHCP, servidores Web IIS, servidores Proxy (SquidNT) y copias de seguridad (Backups).",
      pt: "Administração avançada de serviços de rede e sistemas, centrada na gestão de infraestruturas empresariais. Abordou-se a implementação de Active Directory (AD-DS), a organização através de unidades organizativas (OU), a gestão de políticas de grupo (GPO) para restrições de utilizador, e a configuração de serviços críticos como DHCP, servidores Web IIS, servidores Proxy (SquidNT) e cópias de segurança (Backups)."
    },
    detalles: {
      horas: "50h",
      creditos: "4.50"
    },
    trabajos: [
      { nombre: "Administração de AD-DS e OU", url: "docs/0775_ad_ds.pdf" },
      { nombre: "Configuração de DHCP e GPO", url: "docs/0775_dhcp_gpo.pdf" },
      { nombre: "Gestão de Servidor Web IIS", url: "docs/0775_iis.pdf" },
      { nombre: "Manual Wireshark e Monitorização", url: "docs/0775_wireshark.pdf" },
      { nombre: "Kit de Ferramentas de Administração", url: "docs/0775_kit_ferramentas.docx" }
    ]
  },

  "0782": {
    es: "Programación en C/C++ - estructura básica y conceptos fundamentales",
    pt: "Programação em C/C++ - estrutura básica e conceitos fundamentais",
    resumen: {
      es: "Introducción al desarrollo de software mediante el paradigma procedimental y el lenguaje C. El aprendizaje se centró en la transición del pensamiento lógico y algoritmos hacia la implementación de código ejecutable, abordando el ciclo completo de compilación y la arquitectura de programas. Se profundizó en la gestión técnica de la memoria a través de tipos de datos, variables y constantes (#define), el control de flujo mediante estructuras de decisión lógica y la manipulación de cadenas de caracteres (strings), proporcionando las bases para el desarrollo de aplicaciones de consola eficientes y el manejo de flujos de entrada/salida de datos.",
      pt: "Introdução ao desenvolvimento de software através do paradigma procedimental e da linguagem C. A aprendizagem centrou-se na transição do pensamento lógico e algoritmos para a implementação de código executável, abordando o ciclo completo de compilação e a arquitetura de programas. Aprofundou-se a gestão técnica da memória através de tipos de dados, variáveis e constantes (#define), o controlo de fluxo mediante estruturas de decisão lógica e a manipulação de cadeias de caracteres (strings), proporcionando as bases para o desenvolvimento de aplicações de consola eficientes e a gestão de fluxos de entrada/saída de dados."
    },
    detalles: {
      horas: "50h",
      creditos: "4.50"
    },
    trabajos: [
      { nombre: "Lógica, Algoritmia e Pseudo-Código", url: "docs/0778_logica.pdf" },
      { nombre: "Estruturas de Decisão e Operadores", url: "docs/0778_decisao.pdf" },
      { nombre: "Manipulação de Strings em C", url: "docs/0778_strings.pdf" },
      { nombre: "Gestão de Variáveis e Memória", url: "docs/0778_memoria.pdf" }
    ]
  },
  "0783": {
    es: "Programación en C/C++ - ciclos y decisiones",
    pt: "Programação em C/C++ - ciclos e decisões",
    resumen: {
      es: "Dominio de la lógica de control algorítmica mediante la combinación de estructuras de decisión y repetición en lenguaje C. El módulo se centró en la implementación de ciclos (for, while, do-while) y condicionales anidados para resolver problemas de procesamiento de datos. Se abordó la validación de entradas de usuario, el control de flujo mediante contadores y acumuladores, y la optimización de algoritmos para garantizar una ejecución eficiente y lógica en aplicaciones de consola.",
      pt: "Domínio da lógica de controlo algorítmica através da combinação de estruturas de decisão e repetição em linguagem C. O módulo centrou-se na implementação de ciclos (for, while, do-while) e condicionais aninhados para resolver problemas de processamento de dados. Abordou-se a validação de entradas de utilizador, o controlo de fluxo através de contadores e acumuladores, e a optimização de algoritmos para garantir uma execução eficiente e lógica em aplicações de consola."
    },
    detalles: {
      horas: "50h",
      creditos: 4.50
    },
    trabajos: [
      { nombre: "Implementação de Ciclos e Iterações", url: "docs/0783_ciclos.pdf" },
      { nombre: "Exercícios de Decisões Aninhadas", url: "docs/0783_decisoes.pdf" },
      { nombre: "Validação de Dados e Controlo de Fluxo", url: "docs/0783_validacao.c" }
    ]
  },
  "0781": {
    es: "Análisis de sistemas de información",
    pt: "Análise de sistemas de informação",
    resumen: {
      es: "Estudio de las metodologías de análisis de sistemas para la digitalización organizacional. El módulo se centró en la creación de diagramas de flujo de datos (DFD) y diagramas de entidad-asociación (DEA) para la estructuración de información. Se abordó la normalización de tablas, la definición de campos clave y la implementación práctica de bases de datos relacionales utilizando MySQL Workbench, garantizando la integridad y reducción de redundancia en el almacenamiento de datos.",
      pt: "Estudo das metodologias de análise de sistemas para a digitalização organizacional. O módulo centrou-se na criação de diagramas de fluxo de dados (DFD) e diagramas de entidade-associação (DEA) para a estruturação de informação. Abordou-se a normalização de tabelas, a definição de campos chave e a implementação prática de bases de dados relacionais utilizando MySQL Workbench, garantindo a integridade e redução de redundância no armazenamento de dados."
    },
    detalles: {
      horas: "50h",
      creditos: 4.50
    },
    trabajos: [
      { nombre: "Modelação de Dados (DFD e DEA)", url: "docs/0781_modelacao.pdf" },
      { nombre: "Projeto: Loja Online de Partituras (MySQL)", url: "docs/0781_projeto_loja.pdf" },
      { nombre: "Normalização e Dicionário de Dados", url: "docs/0781_normalizacao.pdf" },
      { nombre: "Fluxogramas e Pseudocódigo", url: "docs/0781_algoritmos.pdf" }
    ]
  },
  "0786": {
    es: "Instalación y configuración de sistemas de gestión de bases de dados",
    pt: "Instalação e configuração de sistemas de gestão de bases de dados",
    resumen: {
      es: "Módulo enfocado en el aprendizaje práctico de MySQL y el dominio de Workbench como herramienta central de administración. La formación se centró en el despliegue de servidores de bases de datos y la ejecución de SQL Scripts para la creación de objetos y gestión de datos. Se trabajó directamente en la configuración de usuarios, la implementación de modelos de seguridad y la creación de planes de backup, consolidando los conocimientos necesarios para gestionar entornos de bases de datos de forma profesional y eficiente.",
      pt: "Módulo focado na aprendizagem prática de MySQL e no domínio do Workbench como ferramenta central de administração. A formação centrou-se na implementação de servidores de bases de dados e na execução de SQL Scripts para a criação de objetos e gestão de dados. Trabalhou-se diretamente na configuração de utilizadores, na implementação de modelos de segurança e na criação de planos de backup, consolidando os conhecimentos necessários para gerir ambientes de bases de dados de forma profissional e eficiente."
    },
    detalles: {
      horas: "50h",
      creditos: 4.50
    },
    trabajos: [
      { nombre: "Instalação e Configuração MySQL Workbench", url: "docs/0786_setup_workbench.pdf" },
      { nombre: "Administração de Objetos e SQL Scripts", url: "docs/0786_scripts_admin.sql" },
      { nombre: "Configuração de Backups e Segurança", url: "docs/0786_backups_seguranca.pdf" },
      { nombre: "Gestão de Utilizadores e Permissões", url: "docs/0786_users_db.pdf" }
    ]
  },
  
  "0787": {
    es: "Administración de bases de datos",
    pt: "Administração de base de dados",
    resumen: {
      es: "Módulo práctico centrado en la integración de bases de datos SQL con entornos web dinámicos. El aprendizaje se enfocó en el desarrollo de un sitio web funcional alojado en InfinityFree, utilizando PHP para conectar formularios frontend (HTML5/W3.CSS) con el backend. Se implementaron operaciones CRUD para la gestión de candidaturas, el envío de correos mediante protocolo SMTP y el control de transacciones, asegurando la integridad de los datos y la correcta administración de registros mediante los métodos GET y POST.",
      pt: "Módulo prático focado na integração de bases de dados SQL com ambientes web dinâmicos. A aprendizagem centrou-se no desenvolvimento de um website funcional alojado no InfinityFree, utilizando PHP para ligar formulários frontend (HTML5/W3.CSS) com o backend. Implementaram-se operações CRUD para a gestão de candidaturas, o envio de e-mails através do protocolo SMTP e o controlo de transações, garantindo a integridade dos dados e a correta administração de registos através dos métodos GET e POST."
    },
    detalles: {
      horas: "50h",
      creditos: 4.50
    },
    trabajos: [
      { nombre: "Projeto Web Dinâmico (PHP/SQL)", url: "docs/0787_projeto_final.pdf" },
      { nombre: "Implementação de CRUD e Formulários", url: "docs/0787_crud_php.pdf" },
      { nombre: "Configuração de Servidor e SMTP", url: "docs/0787_smtp_hosting.pdf" },
      { nombre: "Gestão de Transações e Segurança", url: "docs/0787_seguranca.sql" }
    ]
  }, 

 "0792": {
    es: "Creación de páginas para la web en hipertexto",
    pt: "Criação de páginas para a web em hipertexto",
    resumen: {
      es: "Estudio técnico del lenguaje HTML5 enfocado en el reconocimiento de la estructura global del documento y la jerarquía de etiquetas semánticas. El módulo abordó la creación de diversos tipos de páginas web, la organización de contenidos mediante tablas y el desarrollo de formularios. Se incluyó la integración inicial de hojas de estilo CSS para definir la presentación visual y el diseño de estructuras básicas de navegación.",
      pt: "Estudo técnico da linguagem HTML5 focado no reconhecimento da estrutura global do documento e na hierarquia de etiquetas semânticas. O módulo abordou a criação de diversos tipos de páginas web, a organização de conteúdos através de tabelas e o desenvolvimento de formulários. Incluiu-se a integração inicial de folhas de estilo CSS para definir a apresentação visual e o desenho de estruturas básicas de navegação."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Estrutura Global e Hierarquia HTML5", url: "docs/0792_hierarquia.pdf" },
      { nombre: "Implementação de Estilos CSS", url: "docs/0792_estilos.css" },
      { nombre: "Criação de Tabelas e Formulários", url: "docs/0792_conteudo.html" },
      { nombre: "Desenvolvimento de Páginas Web", url: "docs/0792_projeto_paginas.pdf" }
    ]
  },

  "0793": {
    es: "Scripts CGI y hojas de estilo",
    pt: "Scripts CGI e folhas de estilo",
    resumen: {
      es: "Implementación de interactividad en páginas web mediante el uso de JavaScript básico y el refuerzo de estilos CSS. El contenido se centró en la aplicación de sintaxis elemental (variables, funciones y selectores) para la manipulación de elementos HTML. Se abordó el desarrollo de componentes dinámicos como galerías de imágenes con filtros y la validación de datos en formularios, asegurando la separación entre la estructura del contenido y la lógica de comportamiento del lado del cliente.",
      pt: "Implementação de interatividade em páginas web através do uso de JavaScript básico e do reforço de estilos CSS. O conteúdo centrou-se na aplicação de sintaxe elementar (variáveis, funções e seletores) para a manipulação de elementos HTML. Abordou-se o desenvolvimento de componentes dinâmicos como galerias de imagens com filtros e a validação de dados em formulários, garantindo a separação entre a estrutura do conteúdo e a lógica de comportamento do lado do cliente."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Manipulação de Elementos com JS", url: "docs/0793_js_elementos.pdf" },
      { nombre: "Projeto: Galeria e Filtros (Stand de Automóveis)", url: "docs/0793_projeto_stand.html" },
      { nombre: "Validação de Formulários com Scripts", url: "docs/0793_validacao.pdf" },
      { nombre: "Reforço de Layout e Estilos CSS", url: "docs/0793_css_estilos.css" }
    ]
  }, 

  "0778": {
    es: "Hoja de cálculo - conceptos generales",
    pt: "Folha de cálculo - conceitos gerais",
    resumen: {
      es: "Uso operativo de hojas de cálculo enfocado en la organización y tratamiento de datos. El módulo abordó la gestión de archivos, la edición y formato de celdas, y la estructuración de filas y columnas. Se trabajó en la implementación de fórmulas mediante referencias absolutas y relativas para la automatización de cálculos, además de la configuración de parámetros de impresión para la presentación de informes.",
      pt: "Utilização operativa de folhas de cálculo focada na organização e tratamento de dados. O módulo abordou a gestão de ficheiros, a edição e formatação de células, e a estruturação de linhas e colunas. Trabalhou-se na implementação de fórmulas através de referências absolutas e relativas para a automatização de cálculos, além da configuração de parâmetros de impressão para a apresentação de relatórios."
    },
    detalles: {
      horas: "50h",
      creditos: 4.50
    },
    trabajos: [
      { nombre: "Gestão e Formatação de Dados em Excel", url: "docs/0778_formatacao.xlsx" },
      { nombre: "Aplicação de Fórmulas e Referências", url: "docs/0778_formulas.pdf" },
      { nombre: "Organização de Tabelas e Impressão", url: "docs/0778_tabelas.pdf" }
    ]
  },

  "0754": {
    es: "Procesador de texto",
    pt: "Processador de texto",
    resumen: {
      es: "Uso avanzado de herramientas de procesamiento de texto para la creación y edición de documentos profesionales. El módulo se centró en la aplicación de formatos complejos, gestión de tablas, columnas y elementos gráficos. Se abordó la estructura de documentos extensos mediante el uso de estilos, encabezados, pies de página y la generación automática de índices, además de la configuración de herramientas de revisión y parámetros de impresión técnica.",
      pt: "Utilização avançada de ferramentas de processamento de texto para a criação e edição de documentos profissionais. O módulo centrou-se na aplicação de formatos complexos, gestão de tabelas, colunas e elementos gráficos. Abordou-se a estruturação de documentos extensos através do uso de estilos, cabeçalhos, rodapés e a geração automática de índices, além da configuração de ferramentas de revisão e parâmetros de impressão técnica."
    },
    detalles: {
      horas: "50h",
      creditos: 4.50
    },
    trabajos: [
      { nombre: "Formatação e Estruturação de Documentos", url: "docs/0754_formatacao.docx" },
      { nombre: "Gestão de Tabelas e Elementos Visuais", url: "docs/0754_tabelas_graficos.pdf" },
      { nombre: "Criação de Documentos Longos e Índices", url: "docs/0754_indices_estilos.pdf" }
    ]
  },

  "0779": {
    es: "Presentaciones gráficas",
    pt: "Apresentações gráficas",
    resumen: {
      es: "Uso técnico de herramientas de presentación para la comunicación visual de información. El módulo se centró en la creación y edición de documentos modelo (masters), la inserción de elementos multimedia y la estructuración de contenidos mediante texto, dibujo y gráficos. Se abordó la aplicación de efectos de animación, transiciones y gestión de sonido para la creación de presentaciones dinámicas, además de la configuración de opciones de impresión y difusión.",
      pt: "Utilização técnica de ferramentas de apresentação para a comunicação visual de informação. O módulo centrou-se na criação e edição de documentos modelo (masters), na inserção de elementos multimédia e na estruturação de conteúdos através de texto, desenho e gráficos. Abordou-se a aplicação de efeitos de animação, transições e gestão de som para a criação de apresentações dinâmicas, além da configuração de opções de impressão e difusão."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Criação de Apresentações Dinâmicas", url: "docs/0755_apresentacao.pptx" },
      { nombre: "Desenho e Elementos Multimédia", url: "docs/0755_multimedia.pdf" },
      { nombre: "Configuração de Documentos Modelo", url: "docs/0755_master_slides.pdf" }
    ]
  },

  "0780": {
    es: "Aplicaciones de gestión administrativa",
    pt: "Aplicações de gestão administrativa",
    resumen: {
      es: "Módulo centrado en la planificación y configuración de sistemas de información para la gestión empresarial. El contenido abordó el levantamiento de requisitos funcionales y no funcionales, la definición de reglas de negocio y el diseño de planes de seguridad y acceso. Se trabajó en la parametrización de aplicaciones informáticas para la automatización de procesos administrativos, garantizando la integridad de los datos y la eficiencia en la organización de tareas institucionales.",
      pt: "Módulo focado no planeamento e configuração de sistemas de informação para a gestão empresarial. O conteúdo abordou o levantamento de requisitos funcionais e não funcionais, a definição de regras de negócio e o desenho de planos de segurança e acesso. Trabalhou-se na parametrização de aplicações informáticas para a automatização de processos administrativos, garantindo a integridade dos dados e a eficiência na organização de tarefas institucionais."
    },
    detalles: {
      horas: "50h",
      creditos: 4.50
    },
    trabajos: [
      { nombre: "Levantamento de Requisitos (Loja de Retalho)", url: "docs/0780_requisitos_sistema.pdf" },
      { nombre: "Plano de Instalação e Configuração", url: "docs/0780_plano_instalacao.pdf" },
      { nombre: "Definição de Regras de Negócio", url: "docs/0780_regras_negocio.pdf" },
      { nombre: "Estrutura de Segurança e Perfis de Acesso", url: "docs/0780_seguranca_perfis.pdf" }
    ]
  },

  "0776": {
    es: "Sistema de información de la empresa",
    pt: "Sistema de informação da empresa",
    resumen: {
      es: "Estudio de los principios de organización empresarial y los flujos de información institucional. El módulo se centró en identificar las áreas de intervención de una organización, el circuito de los documentos y la importancia de los sistemas de información para la toma de decisiones. Se abordaron conceptos de seguridad en el intercambio de mensajes, protección de datos y la eficiencia de las tareas administrativas mediante el uso de herramientas tecnológicas colaborativas.",
      pt: "Estudo dos princípios de organização empresarial e dos fluxos de informação institucional. O módulo centrou-se na identificação das áreas de intervenção de uma organização, no circuito dos documentos e na importância dos sistemas de informação para a tomada de decisões. Abordaram-se conceitos de segurança na troca de mensagens, proteção de dados e a eficiência das tarefas administrativas através do uso de ferramentas tecnológicas colaborativas."
    },
    detalles: {
      horas: "25h",
      creditos: 2.25
    },
    trabajos: [
      { nombre: "Análise da Organização e Fluxo Documental", url: "docs/0776_organizacao.pdf" },
      { nombre: "Circuitos de Informação e Decisão", url: "docs/0776_sistemas_info.pdf" },
      { nombre: "Segurança e Comunicação Empresarial", url: "docs/0776_seguranca_comms.pdf" }
    ]
  }

  
};

  
