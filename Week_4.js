// 4. Integración Total y Fetch API (Proyecto Final)
// Desarrollo de una mini aplicación web integral con persistencia y consumo de APIs}

/*
TASK 1
1. Crea los siguientes archivos iniciales:

    index.html: contendrá la estructura del proyecto con un formulario para agregar datos (por ejemplo, productos o tareas), una lista (<ul>) donde se renderizarán los elementos, y un botón para sincronizar con la API.
    app.js: contendrá toda la lógica de interacción, persistencia y comunicación con el servidor.
    Requisitos:
        Comentar claramente cada sección.
        Verificar que los archivos estén correctamente enlazados.
*/

/*
TASK 2
2. Captura e interacción con el usuario:

    Solicita al usuario información desde el DOM o mediante prompt() (nombre del producto, precio, o descripción).
    Valida los campos para evitar datos vacíos o inválidos.
    Muestra mensajes dinámicos de éxito o error en consola o en el DOM.
*/


/**
 * CONFIGURACIÓN Y ESTADO GLOBAL
 */
const URL_API = 'https://jsonplaceholder.typicode.com/posts'; // Endpoint de prueba
let productos = JSON.parse(localStorage.getItem('productos_app')) || [];

// Selectores
const inputNombre = document.getElementById('nombreProductor');
const inputPrecio = document.getElementById('precioProducto');
const btnGuardar = document.getElementById('btnGuardar');
const btnFetch = document.getElementById('btnFetch');
const listaUI = document.getElementById('listaProductos');


/*
TASK 3
3. Manipulación dinámica del DOM:

    Permite agregar elementos a una lista del DOM representando los datos capturados.
    Crea elementos <li> dinámicamente y agrégales un botón “Eliminar”.
    Implementa la función para borrar un elemento al hacer clic.
    Usa appendChild() y removeChild() para modificar el DOM.
*/

/*
TASK 4
4. Persistencia en Local Storage:

    Guarda los datos agregados en el navegador para mantenerlos entre sesiones.
    Implementa un arreglo global para almacenar los datos.
    Usa localStorage.setItem() y localStorage.getItem() para guardar y recuperar información.
    Al recargar la página, renderiza los datos almacenados automáticamente.
*/


const renderizarProductos = () => {
    listaUI.innerHTML = ''; // Limpiar lista
    productos.forEach((prod, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${prod.nombre}</strong> - $${prod.precio}
            <button class="btn-delete" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        listaUI.appendChild(li);
    });
    actualizarStorage();
};

const actualizarStorage = () => {
    localStorage.setItem('productos_app', JSON.stringify(productos));
    console.log("LocalStorage actualizado.");
};

// Agregar nuevo producto (Local)
btnGuardar.onclick = () => {
    const nombre = inputNombre.value.trim();
    const precio = inputPrecio.value.trim();

    // TASK 2: Validación
    if (!nombre || !precio) {
        alert("Campos obligatorios vacíos.");
        return;
    }

    const nuevoProd = { nombre, precio, id: Date.now() };
    productos.push(nuevoProd);
    
    renderizarProductos();
    limpiarFormulario();
    console.log("Producto agregado localmente:", nuevoProd);
};

const eliminarProducto = (index) => {
    productos.splice(index, 1);
    renderizarProductos();
    console.log("Producto eliminado.");
};

const limpiarFormulario = () => {
    inputNombre.value = '';
    inputPrecio.value = '';
    inputNombre.focus();
};


/*
TASK 5
5. Integración con Fetch API (Consumo de API):

    Conecta la aplicación con un servidor local (JSON Server) o una API pública.
    Implementa las operaciones básicas:
        GET: obtener la lista de elementos.
        POST: agregar nuevos elementos.
        PUT: actualizar un elemento existente.
        DELETE: eliminar un elemento.
    Usa async/await y try...catch para manejar las respuestas y errores.
    Muestra en consola o DOM los resultados de cada solicitud.
*/

// GET: Obtener datos
btnFetch.addEventListener('click', async () => {
    try {
        const resp = await fetch(URL_API + '?_limit=3');
        const datos = await resp.json();
        
        // Mapeamos los datos de la API a nuestro formato
        const productosAPI = datos.map(item => ({
            nombre: item.title.substring(0, 15),
            precio: Math.floor(Math.random() * 100),
            id: item.id
        }));

        productos = [...productos, ...productosAPI];
        renderizarProductos();
        console.table(productosAPI);
        document.getElementById('status-api').innerText = "Sincronización exitosa.";
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
});

// POST: Ejemplo de cómo enviar un producto al servidor
const enviarAServidor = async (producto) => {
    try {
        const response = await fetch(URL_API, {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        const data = await response.json();
        console.log("Respuesta POST exitosa:", data);
    } catch (error) {
        console.error("Error en POST:", error);
    }
};

// Inicialización
renderizarProductos();


/*
TASK 6
6. Validaciones y pruebas finales:

    Asegura que todas las funcionalidades trabajen en conjunto:
        Los datos se agregan al DOM.
        Los cambios se reflejan en el Local Storage.
        Las operaciones se sincronizan correctamente con la API.
    Incluye capturas de:
        El DOM antes y después de una operación.
        La consola mostrando las respuestas del servidor.
        El contenido del Local Storage.
*/


 
/*
Criterios de aceptación

    Se utiliza JavaScript moderno (ES6+) con let y const.
    Se integran correctamente los conceptos de DOM, Local Storage, y Fetch API.
    Se aplican validaciones de entrada y manejo de errores.
    Las operaciones CRUD funcionan correctamente con la API.
    El código está comentado y organizado.
    Se evidencian resultados mediante capturas o registros en consola.
*/
 
