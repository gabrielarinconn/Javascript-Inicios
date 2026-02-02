// TASK 2: Selección e inspección
const inputNota = document.getElementById('inputNota');
const btnAgregar = document.querySelector('#btnAgregar');
const listaNotasUI = document.getElementById('listaNotas');

console.log("Referencias cargadas:", { inputNota, btnAgregar, listaNotasUI });

// TASK 5: Estado inicial (Arreglo en memoria)
let notas = JSON.parse(localStorage.getItem("notas")) || [];

// Función para renderizar una nota individual en el DOM
const crearElementoNota = (texto) => {
    const li = document.createElement('li');
    li.textContent = texto;

    // TASK 4: Botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'delete';
    
    btnEliminar.onclick = () => {
        // Eliminar del DOM (removeChild)
        listaNotasUI.removeChild(li);
        
        // Actualizar arreglo y LocalStorage
        notas = notas.filter(n => n !== texto);
        guardarEnStorage();
        console.log(`Eliminado: "${texto}"`);
    };

    li.appendChild(btnEliminar);
    return li;
};

// TASK 3: Función Agregar
btnAgregar.addEventListener('click', () => {
    const texto = inputNota.value.trim();

    if (texto === "") {
        alert("Por favor, escribe una nota.");
        return;
    }

    // Agregar al arreglo
    notas.push(texto);
    
    // Renderizar en DOM (appendChild)
    const nuevaNota = crearElementoNota(texto);
    listaNotasUI.appendChild(nuevaNota);

    // Persistencia y limpieza
    guardarEnStorage();
    inputNota.value = "";
    inputNota.focus();
    console.log(`Nota agregada: "${texto}"`);
});

// TASK 5: Persistencia
function guardarEnStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
}

// Carga inicial
function cargarNotas() {
    notas.forEach(nota => {
        listaNotasUI.appendChild(crearElementoNota(nota));
    });
    console.log(`Se cargaron ${notas.length} notas desde Local Storage.`);
}

cargarNotas();
