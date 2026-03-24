document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        let esValido = true;

        // --- Validación de Nombre (Solo caracteres alfabéticos y espacios) ---
        const nombre = document.getElementById("nombre");
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
        if (!regexNombre.test(nombre.value.trim())) {
            mostrarError("nombre", "Ingrese solo letras.");
            esValido = false;
        } else {
            limpiarError("nombre");
        }

        // --- Validación de Correo ---
        // Explicación: caracteres + @ (una sola vez) + dominio + punto + extensión
        const correo = document.getElementById("correo");
        const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexCorreo.test(correo.value.trim())) {
            mostrarError("correo", "Correo inválido (ej: usuario@servidor.com).");
            esValido = false;
        } else {
            limpiarError("correo");
        }

        // --- Validación de Mensaje (No vacío, permite símbolos) ---
        const mensaje = document.getElementById("mensaje");
        if (mensaje.value.trim().length === 0) {
            mostrarError("mensaje", "El mensaje no puede estar vacío.");
            esValido = false;
        } else {
            limpiarError("mensaje");
        }

        // Si hay errores, no se envía el formulario
        if (!esValido) {
            event.preventDefault();
        } else {
            alert("¡Formulario enviado con éxito!");
        }
    });

    function mostrarError(campo, texto) {
        const input = document.getElementById(campo);
        const span = document.getElementById("err-" + campo);
        input.classList.add("invalid");
        span.innerText = texto;
    }

    function limpiarError(campo) {
        const input = document.getElementById(campo);
        const span = document.getElementById("err-" + campo);
        input.classList.remove("invalid");
        span.innerText = "";
    }
});
