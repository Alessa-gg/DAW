document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formUsuario");
    const badge = document.getElementById("badge-tipo");
    const msg = document.getElementById("msg-guardado");
    
    badge.textContent = "MODO: SESSION STORAGE";

    const cargarDatos = () => {
        const guardado = JSON.parse(sessionStorage.getItem("datos_form"));
        if (guardado) {
            document.getElementById("nombre").value = guardado.nombre || "";
            document.getElementById("pais").value = guardado.pais || "";
            document.getElementById("biografia").value = guardado.biografia || "";
        }
    };

    const guardarDatos = () => {
        const info = {
            nombre: document.getElementById("nombre").value,
            pais: document.getElementById("pais").value,
            biografia: document.getElementById("biografia").value
        };
        sessionStorage.setItem("datos_form", JSON.stringify(info));
       
    };

    
    setInterval(guardarDatos, 3000);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        guardarDatos();
        
    });

    cargarDatos();
});
