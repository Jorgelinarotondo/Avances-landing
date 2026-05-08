
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;

    if (nombre === "" || correo === "") {
      alert("Completá los campos obligatorios");
      return;
    }

    // insertar datos
    document.getElementById("nombre-placeholder").innerText = nombre;
    document.getElementById("correo-placeholder").innerText = correo;

    // mostrar feedback
    document.getElementById("feedback").classList.remove("oculto");

    // ocultar form y título
    document.getElementById("formulario").classList.add("oculto");
    document.getElementById("titulo-modal").classList.add("oculto");
  });
});

function abrirModal() {
  document.getElementById("modal").style.display = "flex";

  document.getElementById("formulario").classList.remove("oculto");
  document.getElementById("feedback").classList.add("oculto");
  document.getElementById("titulo-modal").classList.remove("oculto");
  document.getElementById("formulario").reset();
  
}
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}