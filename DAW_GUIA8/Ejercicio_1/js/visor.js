//Las 10 imagenes
const misImagenes = [
    "./img/img1.jpg",
     "./img/img2.jpg",
      "./img/img3.jpeg",
       "./img/img5.jpg",
        "./img/img6.jpg",
         "./img/img7.jpg",
          "./img/img8.png",
           "./img/img9.jpg",
            "./img/img10.jpg",
             "./img/img11.jpg",
    
    
];

let indiceActual = 0;

// Referencias a elementos del DOM
const visor = document.getElementById("visor");
const info = document.getElementById("info");
const btnAtras = document.getElementById("btnAtras");
const btnAdelante = document.getElementById("btnAdelante");

// 2. Función principal para actualizar la imagen
function actualizarVisor(direccion) {
    indiceActual += direccion;

    // Lógica de bucle infinito 
    if (indiceActual >= misImagenes.length) {
        indiceActual = 0; // Si pasa de la última, vuelve a la primera
    } else if (indiceActual < 0) {
        indiceActual = misImagenes.length - 1; // Si retrocede de la primera, va a la última
    }

    // Cambiar la imagen y el texto informativo
    visor.src = misImagenes[indiceActual];
    info.innerText = `Imagen ${indiceActual + 1} de ${misImagenes.length}`;
}

// 3. Eventos para los botones del formulario
btnAdelante.addEventListener("click", () => actualizarVisor(1));
btnAtras.addEventListener("click", () => actualizarVisor(-1));

// 4. Eventos para el teclado 
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        actualizarVisor(1);
    } else if (event.key === "ArrowLeft") {
        actualizarVisor(-1);
    }
});
