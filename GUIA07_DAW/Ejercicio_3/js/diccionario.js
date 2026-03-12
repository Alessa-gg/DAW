const diccionario = {
    "Abadía": "Monasterio o iglesia regida por un abad o una abadesa.",
    "Afluente": "Río que desemboca en otro.",
    "Alba": "Primera luz del día antes de salir el sol.",
    "Altruismo": "Dedicación a los demás sin interés propio.",
    "Beldad": "Mujer de belleza excepcional.",
    "Belicoso": "Guerrero o que incita a la guerra.",
    "Bifurcación": "Lugar donde un camino o corriente se divide en dos.",
    "Bizarro": "Valiente, gallardo.",
    "Caleidoscopio": "Instrumento óptico que produce figuras geométricas simétricas.",
    "Cenit": "Punto más alto en el cielo.",
    "Crucial": "Momento decisivo o crítico.",
    "Cúspide": "Punto más alto de una montaña.",
    "Dádiva": "Cosa que se da gratuitamente.",
    "Desdén": "Indiferencia y menosprecio.",
    "Dilema": "Situación en la que es necesario elegir entre dos opciones.",
    "Dúctil": "Fácil de moldear.",
    "Efervescencia": "Desprendimiento de burbujas gaseosas a través de un líquido.",
    "Efímero": "Que dura muy poco tiempo.",
    "Elocuente": "Que habla con eficacia para convencer.",
    "Enigma": "Dicho o cosa que no se entiende.",
    "Facsímil": "Reproducción exacta de un dibujo o escritura.",
    "Fatuo": "Falto de razón o de entendimiento.",
    "Frenesí": "Exaltación violenta del ánimo.",
    "Frugal": "Moderado en comer y beber.",
    "Gárgola": "Parte final del caño que sirve para evacuar el agua de los tejados.",
    "Gélido": "Extremadamente frío.",
    "Germen": "Principio o causa de algo.",
    "Gremio": "Conjunto de personas con el mismo oficio.",
    "Hálito": "Aliento o aire que sale al respirar.",
    "Hégira": "Era de los musulmanes que empieza el año 622.",
    "Hito": "Acontecimiento muy importante.",
    "Huraño": "Que huye del trato con la gente.",
    "Idiosincrasia": "Rasgos y carácter propios de un individuo o colectividad.",
    "Ímpetu": "Fuerza o violencia con que se mueve algo.",
    "Inerte": "Que no tiene vida o movimiento.",
    "Inmune": "Exento de ciertos oficios o penas.",
    "Jactancia": "Alabanza propia, presunción.",
    "Jerga": "Lenguaje especial y familiar de ciertos grupos sociales.",
    "Júbilo": "Alegría muy intensa.",
    "Justeza": "Exactitud o fidelidad de algo.",
    "Kilo": "Prefijo que significa mil.",
    "Laconismo": "Brevedad y concisión en la expresión.",
    "Lívido": "Amoratado o pálido.",
    "Longevo": "Que vive muchos años.",
    "Metamorfosis": "Transformación de algo en otra cosa.",
    "Mistificar": "Engañar, falsear.",
    "Moraleja": "Enseñanza que se deduce de un cuento.",
    "Mundano": "Perteneciente al mundo y a sus placeres.",
    "Nadir": "Punto de la esfera celeste opuesto al cenit.",
    "Nebuloso": "Oscuro, poco claro.",
    "Nostalgia": "Pena de verse ausente de la patria o de los amigos.",
    "Nupcial": "Relativo a la boda o al matrimonio.",
    "Ñandú": "Ave corredora similar al avestruz pero más pequeña.",
    "Ocaso": "Puesta de sol.",
    "Onírico": "Relativo a los sueños.",
    "Ósmosis": "Influencia réproca entre dos personas o grupos.",
    "Ostensible": "Que se ve o se percibe con facilidad.",
    "Paradoja": "Dicho o hecho que parece contrario a la lógica.",
    "Peculiar": "Propio o característico de cada persona.",
    "Presteza": "Prontitud, rapidez.",
    "Prudencia": "Capacidad de pensar ante ciertos eventos para actuar bien.",
    "Quebranto": "Acción de romper o debilitar.",
    "Quid": "Esencia o punto clave de una cosa.",
    "Quimera": "Aquello que se propone a la imaginación como posible.",
    "Quintaesencia": "Lo más puro y acendrado de una cosa.",
    "Resiliencia": "Capacidad de adaptación frente a un agente perturbador.",
    "Rigor": "Dureza o severidad excesiva.",
    "Rutilante": "Que brilla mucho.",
    "Sempiterno": "Que durará siempre, que no tiene fin.",
    "Sosegar": "Aplacar, pacificar.",
    "Sublime": "Excelso, eminente.",
    "Tácito": "Que no se dice pero se supone o se entiende.",
    "Tenaz": "Firme, porfiado y pertinaz.",
    "Tregua": "Descanso temporal en una actividad.",
    "Ufano": "Orgulloso, satisfecho.",
    "Urgir": "Pedir o exigir algo con prisa.",
    "Utopía": "Plan o sistema optimista que aparece como irrealizable.",
    "Vaguedad": "Falta de precisión o de claridad en lo que se dice.",
    "Vasto": "Muy extendido o muy grande.",
    "Veleidad": "Inconstancia, ligereza.",
    "Watio": "Unidad de potencia eléctrica.",
    "Xilófono": "Instrumento musical de percusión con láminas de madera.",
    "Yacija": "Lecho o cama pobre.",
    "Yacimiento": "Lugar donde se hallan restos arqueológicos o minerales.",
    "Yermo": "Terreno deshabitado o sin cultivar.",
    "Zarpar": "Levar anclas, salir el barco.",
    "Zénit": "Punto más alto en el cielo en relación al observador.",
    "Zozobra": "Inquietud o ansiedad."
};

const inputFiltro = document.getElementById('filtro');
const lista = document.getElementById('listaPalabras');
const areaDef = document.getElementById('areaDefinicion');
const btn = document.getElementById('btnMostrar');

// Función para normalizar texto (quita tildes y diacríticos)
function limpiarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function cargarLista(filtro = "") {
    lista.innerHTML = ""; // Limpiar lista actual
    const filtroLimpio = limpiarTexto(filtro);
    
    // Obtener palabras ordenadas alfabéticamente
    const palabrasSorted = Object.keys(diccionario).sort((a, b) => 
        a.localeCompare(b, 'es', { sensitivity: 'base' })
    );
    
    palabrasSorted.forEach(palabra => {
        const palabraLimpia = limpiarTexto(palabra);
        
        // Verifica si la palabra empieza con el filtro ingresado
        if (palabraLimpia.startsWith(filtroLimpio)) {
            const option = document.createElement('option');
            option.value = palabra;
            option.textContent = palabra;
            lista.appendChild(option);
        }
    });
}

function mostrarDefinicion() {
    const seleccionada = lista.value;
    if (seleccionada) {
        areaDef.value = diccionario[seleccionada];
        // Efecto visual simple de actualización
        areaDef.style.opacity = 0;
        setTimeout(() => { areaDef.style.opacity = 1; }, 50);
    } else {
        areaDef.value = "Por favor, seleccione una palabra de la lista.";
    }
}

// Eventos de interacción
inputFiltro.addEventListener('input', (e) => cargarLista(e.target.value));
btn.addEventListener('click', mostrarDefinicion);
lista.addEventListener('dblclick', mostrarDefinicion);

// Inicializar la lista al cargar el script
cargarLista();
