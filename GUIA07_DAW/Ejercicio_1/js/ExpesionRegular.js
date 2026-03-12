document.getElementById('btnValidar').addEventListener('click', function() {
    const tipo = document.getElementById('tipoValidacion').value;
    const valor = document.getElementById('entradaUsuario').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    // Diccionario de Expresiones Regulares
    const reglas = {
        // Valida octetos de 0 a 255
        ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        
        // Valida protocolos opcionales + // + dominio + ruta
        url: /^(?:(?:https?|ftp):)?\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
        
        // Valida estructura estándar de email
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    };

    if (valor === "") {
        mostrarMensaje("Por favor, ingrese un dato.", "error");
        return;
    }

    const esValido = reglas[tipo].test(valor);

    if (esValido) {
        mostrarMensaje(`VÁLIDO: La dirección ${tipo.toUpperCase()} es correcta.`, "success");
    } else {
        mostrarMensaje(`INVÁLIDO: El formato no coincide con una ${tipo.toUpperCase()}.`, "error");
    }
});

function mostrarMensaje(texto, clase) {
    const res = document.getElementById('resultado');
    res.textContent = texto;
    res.className = `alert ${clase}`;
}
