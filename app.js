document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const nombre = data.get("nombre");
  const email = data.get("email");
  const mensaje = data.get("mensaje");

  const subject = encodeURIComponent("Solicitud de demo — Gestor de ventas");
  const body = encodeURIComponent(
`Hola! Soy ${nombre} (${email}).

Quiero una demo del Gestor de Ventas para Librerías.

Mensaje:
${mensaje}
`
  );

  // Cambiá este email por el tuyo
  const to = "tuemail@dominio.com";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  note.textContent = "Listo: se abrió tu email con el mensaje armado ✅";
});
