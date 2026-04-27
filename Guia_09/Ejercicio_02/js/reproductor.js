
const canciones = [
    { titulo: "Clint Eastwood", artista: "Gorillaz", url: "canciones/Clint Eastwood.mp3" },
    { titulo: "Paint the town red", artista: "Doja Cat", url: "canciones/Paint the town red.mp3" },
    { titulo: "Dardos", artista: "Romeo Santos/Prince Royce", url: "canciones/Dardos.mp3" }
];

let indiceActual = 0;
const audio = document.getElementById('audio-player');
const btnPlayPause = document.getElementById('btnPlayPause');
const textoMovil = document.getElementById('texto-movil');
const barraProgreso = document.getElementById('barra-progreso');


const listaUL = document.getElementById('lista-canciones');
canciones.forEach((c, index) => {
    const li = document.createElement('li');
    li.textContent = `${c.titulo} - ${c.artista}`;
    li.id = `pista-${index}`;
    li.onclick = () => cargarYPonerPista(index);
    listaUL.appendChild(li);
});

//Funcion que carga la cancion
function cargarYPonerPista(index) {
    indiceActual = index;
    const cancion = canciones[index];
    
    
    audio.src = cancion.url;
    audio.load();
    
    
    textoMovil.textContent = `REPRODUCIENDO: ${cancion.titulo.toUpperCase()} - ARTISTA: ${cancion.artista.toUpperCase()}`;
    
    
    textoMovil.style.animation = 'none';
    textoMovil.offsetHeight; 
    textoMovil.style.animation = 'marquee 12s linear infinite';

    
    document.querySelectorAll('.playlist-container li').forEach(li => li.classList.remove('activa'));
    const liActiva = document.getElementById(`pista-${index}`);
    if(liActiva) liActiva.classList.add('activa');

   
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Esperando interacción del usuario...");
        });
    }
}


function togglePlay() {
    
    if (!audio.src || audio.src === "") {
        cargarYPonerPista(0);
        return;
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


audio.onplay = () => {
    btnPlayPause.textContent = "II"; 
};

audio.onpause = () => {
    btnPlayPause.textContent = "▶"; 
};

audio.ontimeupdate = () => {
    if (audio.duration) {
        const porcentaje = (audio.currentTime / audio.duration) * 100;
        barraProgreso.style.width = porcentaje + "%";
    }
};


function siguiente() {
    indiceActual = (indiceActual + 1) % canciones.length;
    cargarYPonerPista(indiceActual);
}

function anterior() {
    indiceActual = (indiceActual - 1 + canciones.length) % canciones.length;
    cargarYPonerPista(indiceActual);
}


audio.onended = () => {
    siguiente();
};
