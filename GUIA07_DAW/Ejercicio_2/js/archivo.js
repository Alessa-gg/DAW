document.getElementById('fileInput').addEventListener('change', function() {
    const fileInput = this;
    const statusMessage = document.getElementById('statusMessage');
    const labelSpan = document.querySelector('.custom-file-upload span');

    // Expresión Regular: 
    // ^      -> Inicio de la cadena
    // .*     -> Cualquier nombre de archivo
    // \.     -> El punto literal
    // (jpg|jpeg|png|gif) -> Las extensiones permitidas
    // $      -> Fin de la cadena
    // i      -> Flag 'ignoreCase' para aceptar .JPG o .png indistintamente
    const regexImagen = /^.*\.(jpg|jpeg|png|gif)$/i;

    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        labelSpan.textContent = fileName; // Mostrar nombre en el botón

        if (regexImagen.test(fileName)) {
            statusMessage.textContent = "✅ Archivo válido. Listo para subir.";
            statusMessage.className = "status valid";
        } else {
            statusMessage.textContent = "❌ Error: Solo se permiten imágenes (.jpg, .png, .gif).";
            statusMessage.className = "status invalid";
            // Opcional: Limpiar el input si es inválido
            fileInput.value = ""; 
        }
    }
});
