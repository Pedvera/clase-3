document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = `
    <h2>Datos del formulario</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mensaje:</strong> ${mensaje}</p>
  `;
});
