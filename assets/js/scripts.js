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
  const certificationsCarousel = document.getElementById("certificationsCarousel");
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
      "experience.education": "Educación",

      "projects.title": "Algunos de mis proyectos",

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
      "experience.education": "Education",

      "projects.title": "Some of my projects",

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
      if (messageTextarea) messageTextarea.placeholder = "¿En qué puedo ayudarte?";
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