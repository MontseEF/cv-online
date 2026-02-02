// Dark mode toggle + guardar preferencia
const themeToggle = document.getElementById("themeToggle");

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Cargar preferencia al iniciar
const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme === "dark");

// Click del botón
themeToggle?.addEventListener("click", () => {
  const isDarkNow = !document.documentElement.classList.contains("dark");
  setTheme(isDarkNow);
});
