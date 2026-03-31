document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // MODO OSCURO
  // =========================
  const themeToggle = document.getElementById("themeToggle");

  function setTheme(isDark) {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme === "dark");
  }

  themeToggle?.addEventListener("click", () => {
    const isDarkNow = !document.documentElement.classList.contains("dark");
    setTheme(isDarkNow);
  });

  // =========================
  // CARRUSEL CERTIFICACIONES
  // =========================
  const certificationsCarousel = document.getElementById(
    "certificationsCarousel",
  );
  const certPrev = document.getElementById("certPrev");
  const certNext = document.getElementById("certNext");

  if (certificationsCarousel && certPrev && certNext) {
    const scrollAmount = 360;

    certNext.addEventListener("click", () => {
      certificationsCarousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    certPrev.addEventListener("click", () => {
      certificationsCarousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  }

  // =========================
  // TRADUCCIÓN ES / EN
  // =========================
  const langToggle = document.getElementById("langToggle");

  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos",
      "nav.certifications": "Certificaciones",
      "nav.contact": "Contacto",

      "hero.badge": "Disponible para contratación",
      "hero.text":
        "Soluciones web minimalistas, modernas y escalables con foco en la experiencia del usuario y código limpio.",
      "hero.projects": "Conoce mis proyectos",
      "hero.cv": "Descarga mi CV",

      "about.title": "Sobre mí",
      "about.p1":
        "Desarrolladora Full Stack con una filosofía de diseño minimalista y enfoque en la creación de aplicaciones web responsivas. Me interesa construir soluciones que conecten una lógica de backend clara y ordenada con interfaces frontend intuitivas y funcionales.",
      "about.p2":
        "Cuento con más de 5 años de experiencia en áreas administrativas y servicio al cliente, lo que me ha permitido desarrollar habilidades clave como la organización, la comunicación efectiva y la orientación al usuario. Actualmente, mi objetivo es aplicar estas competencias al desarrollo web, creando soluciones digitales mediante código limpio, buenas prácticas y aprendizaje constante.",

      "experience.title": "Experiencia & Educación",
      "experience.work": "Experiencia",
      
      "job1.dates": "Sep 2024 — Feb 2025",
      "job1.title": "Asistente Administrativo",
      "job1.company": "Falabella",
      "job1.description":
        "Elaboración de informes administrativos, apoyo en inventarios, uso de Atlas y atención a clientes en procesos de distribución y devoluciones.",

      "job2.dates": "Ene 2018 — Ago 2024",
      "job2.title": "Administrativa y Vendedora",
      "job2.company": "Ferretería Zona Franca",
      "job2.description":
        "Gestión de facturación, pagos a proveedores, atención a clientes, ventas técnicas, control de stock y seguimiento administrativo.",

      "projects.title": "Algunos de mis proyectos",
      "project1.title": "Random-Generador Musical",
      "project1.description":
        "Descubre nuevos estilos de música en esta aplicación interactiva.",
      "project2.title": "Simulador de Billetera Digital",
      "project2.description":
        "Simula transacciones financieras en una billetera digital segura.",
      "project3.name": "Landing Page",
      "project3.description":
        "Landing page responsiva desarrollada para una ferretería.",

      "experience.education": "Educación",
      "education1.title": "Bootcamp Python",
      "education1.company": "Talento Digital",
      "education1.description":"En curso.",
      "education2.date": "2024",
      "education2.title": "Bootcamp Inteligencia Artificial",
      "education2.company": "Samsung Innovation Campus - Innovacien",
      "education2.description":"Bootcamp de 260 horas, certificación obtenida, noviembre 2025.",
      "education3.date": "2024",
      "education3.title": "Bootcamp Desarrollo Web Full Stack",
      "education3.company": "Universidad del Desarrollo - Lifelong Learning UDD",
      "education3.description":"Bootcamp de 280 horas, certificación obtenida, octubre 2025.",
      "education4.date": "2019",
      "education4.title": "Inglés A2",
      "education4.company": "Cambridge Assessment English - Instituto Chileno Británico de Cultura",
      "education4.description":"Certificación Cambridge English – ESOL International.",
      "education5.date": "2018 — 2019",
      "education5.title": "Técnico en Administración de Empresas",
      "education5.company": "Colegio San Cayetano",
      "education5.description":"Técnico en Administración de Empresas con mención en RRHH.",

      "certifications.title": "Certificaciones",

      "contact.title": "Contáctame",
      "contact.text":
        "¿Interesada/o en colaborar o simplemente quieres saludar? Estoy disponible para nuevas oportunidades, colaboraciones y proyectos interesantes. Si tienes algo en mente, conversemos.",

      "form.name": "Nombre",
      "form.email": "Email",
      "form.message": "Mensaje",
      "form.button": "Enviar Mensaje",
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.certifications": "Certifications",
      "nav.contact": "Contact",

      "hero.badge": "Available for hire",
      "hero.text":
        "Minimalist, modern, and scalable web solutions focused on user experience and clean code.",
      "hero.projects": "See my projects",
      "hero.cv": "Download my CV",

      "about.title": "About Me",
      "about.p1":
        "Full Stack Developer with a minimalist design philosophy and a focus on building responsive web applications. I enjoy creating solutions that connect clear backend logic with intuitive and functional frontend interfaces.",
      "about.p2":
        "I have more than 5 years of experience in administrative roles and customer service, which has allowed me to develop key skills such as organization, effective communication, and user orientation. My current goal is to apply these strengths to web development by building digital solutions through clean code, good practices, and continuous learning.",

      "experience.title": "Experience & Education",
      "experience.work": "Experience",
      "job1.dates": "Sep 2024 — Feb 2025",
      "job1.title": "Administrative Assistant",
      "job1.company": "Falabella",
      "job1.description":
        "Preparation of administrative reports, inventory support, Atlas system usage, and customer service in distribution and returns processes.",

      "job2.dates": "Jan 2018 — Aug 2024",
      "job2.title": "Administrative Assistant and Sales Associate",
      "job2.company": "Ferretería Zona Franca",
      "job2.description":
        "Invoice management, supplier payments, customer service, technical sales, stock control, and administrative follow-up.",
      "experience.education": "Education",
      "education1.title": "Python Bootcamp",
      "education1.company": "Talento Digital",
      "education1.description":"In progress.", 
      "education2.date": "2024",
      "education2.title": "Artificial Intelligence Bootcamp",
      "education2.company": "Samsung Innovation Campus - Innovacien",
      "education2.description":"260-hour bootcamp, certification obtained, November 2025.",
      "education3.date": "2024",
      "education3.title": "Full Stack Web Development Bootcamp",
      "education3.company": "Universidad del Desarrollo - Lifelong Learning UDD",
      "education3.description":"280-hour bootcamp, certification obtained, October 2025.",
      "education4.date": "2019",
      "education4.title": "English A2",
      "education4.company": "Cambridge Assessment English - Instituto Chileno Británico de Cultura",
      "education4.description":"Cambridge English Certification – ESOL International.",
      "education5.date": "2018 — 2019",
      "education5.title": "Technical Degree in Business Administration",
      "education5.company": "Colegio San Cayetano",
      "education5.description":"Technical Degree in Business Administration with a focus on HR.",
      

      "projects.title": "Some of my projects",
      "project1.title": "Random Music Generator",
      "project1.description":
        "Discover new music styles in this interactive application.", 
      "project2.title": "Digital Wallet Simulator",
      "project2.description":
        "Simulate financial transactions in a secure digital wallet.",
      "project3.title": "Landing Page",
      "project3.description":
        "Responsive landing page developed for a hardware store.",

      "certifications.title": "Certifications",

      "contact.title": "Contact Me",
      "contact.text":
        "Interested in collaborating or just saying hello? I’m available for new opportunities, collaborations, and interesting projects. If you have something in mind, let’s talk.",

      "form.name": "Name",
      "form.email": "Email",
      "form.message": "Message",
      "form.button": "Send Message",
    },
  };

  function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Placeholders
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');

    if (lang === "en") {
      if (nameInput) nameInput.placeholder = "Full Name";
      if (emailInput) emailInput.placeholder = "email@example.com";
      if (messageTextarea) messageTextarea.placeholder = "How can I help you?";
    } else {
      if (nameInput) nameInput.placeholder = "Nombre Completo";
      if (emailInput) emailInput.placeholder = "correo@ejemplo.com";
      if (messageTextarea)
        messageTextarea.placeholder = "¿En qué puedo ayudarte?";
    }

    // Actualizar texto del botón idioma
    if (langToggle) {
      langToggle.innerHTML = `
        <span class="material-symbols-outlined text-sm">translate</span>
        ${lang === "es" ? "EN/ES" : "ES/EN"}
      `;
    }

    localStorage.setItem("language", lang);
  }

  let currentLang = localStorage.getItem("language") || "es";
  applyLanguage(currentLang);

  langToggle?.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyLanguage(currentLang);
  });
});
