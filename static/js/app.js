const formulario = document.getElementById("formulario-contacto");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const resultado = document.getElementById("resultado");

        resultado.textContent =
            "Gracias, " + nombre + ". Tu mensaje está preparado correctamente.";
        
        formulario.reset();
    });
}
