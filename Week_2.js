// 2. Estructuras de Datos Avanzadas
// Gestión de datos con objetos, Sets y Maps en JavaScript

/*
TASK 1
1. Creación del objeto de productos:

    Cada producto debe contener las propiedades:
        id (clave única del producto)
        nombre (nombre del producto)
        precio (valor numérico)
*/

const productos = {
    p001: { id: 1, nombre: "Laptop", precio: 1200 },
    p002: { id: 2, nombre: "Mouse", precio: 25 },
    p003: { id: 3, nombre: "Teclado", precio: 75 },
    p004: { id: 4, nombre: "Monitor", precio: 300 }
};

// Función de validación (Tarea 5)
function validarProductos(obj) {
    for (const clave in obj) {
        const p = obj[clave];
        if (p.id && p.nombre && typeof p.precio === 'number') {
            console.log(`Producto ${p.id} validado correctamente.`);
        } else {
            console.error(`Error: El producto en la clave ${clave} tiene datos inválidos.`);
        }
    }
}

console.log("--- Validación de Objetos ---");
validarProductos(productos);

/*
TASK 2
2. Uso de Set en JavaScript:

    Crea un Set con una lista de números que incluya valores repetidos.
    Imprime en consola el contenido del Set para mostrar cómo elimina los duplicados automáticamente.
    Agrega un nuevo número al Set utilizando el método .add().
    Verifica si un número específico existe dentro del Set con .has().
    Elimina un número del Set con .delete().
    Recorre el Set utilizando un for…of para mostrar cada valor.
*/

console.log("\n--- Trabajando con Sets ---");
// Creamos un Set con números repetidos
const numerosUnicos = new Set([10, 20, 30, 20, 40, 10]);

// El Set elimina duplicados automáticamente
console.log("Contenido inicial del Set (sin duplicados):", numerosUnicos);

// Agregar un nuevo número
numerosUnicos.add(50);

// Verificar existencia
console.log("¿Existe el 20?:", numerosUnicos.has(20));

// Eliminar un número
numerosUnicos.delete(30);

// Recorrer con for...of (Tarea 4)
console.log("Valores en el Set:");
for (const num of numerosUnicos) {
    console.log(`- Valor: ${num}`);
}

/*
TASK 3
3. Creación de un Map:

    Crea un Map que relacione la categoría del producto (clave) con el nombre del producto (valor).
    Asegúrate de que el Map refleje correctamente la información adicional de cada producto.
*/


console.log("\n--- Trabajando con Maps ---");
const categorias = new Map();

// Relacionamos Categoría (clave) con Nombre (valor)
categorias.set("Computación", "Laptop");
categorias.set("Periféricos", "Mouse");
categorias.set("Pantallas", "Monitor");

/*
TASK 4
4. Iteración sobre las estructuras de datos:

    Recorre e imprime los datos en la consola:
        Usa for…in para listar propiedades y valores del objeto.
        Usa for…of para recorrer el Set.
        Usa forEach() para recorrer el Map y mostrar claves y valores de forma descriptiva.
*/

// 1. Iterar Objeto con for...in
console.log("\nListado de productos (for...in):");
for (const key in productos) {
    console.log(`ID Interno: ${key} -> Nombre: ${productos[key].nombre}`);
}

// 2. Iterar Map con forEach()
console.log("\nCategorías de productos (Map forEach):");
categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} | Producto Principal: ${valor}`);
});

// Extra: Uso de Object.entries() para mostrar datos descriptivos
console.log("\nDetalle técnico (Object.entries):");
Object.entries(productos).forEach(([key, value]) => {
    console.log(`Clave: ${key} | Info: ${value.nombre} cuesta $${value.precio}`);
});


/*
TASK 5
5. Validación y pruebas:

    Implementa validaciones para asegurar que cada producto tenga id, nombre y precio válidos.
    Realiza pruebas mostrando:
        Lista completa de productos (objeto)
        Lista de productos únicos (Set)
        Categorías y nombres de productos (Map)
*/

console.log("\n" + "=".repeat(30));
console.log("DEMOSTRACIÓN DE RESULTADOS (TASK 5)");
console.log("=".repeat(30));

// 1. Mostrar Lista completa de productos (Objeto)
// Usamos Object.values() para obtener un array de los productos y mostrarlo bonito
console.log("\n📦 LISTA COMPLETA DE PRODUCTOS:");
const listaProductos = Object.values(productos);
listaProductos.forEach(p => {
    console.log(`- [ID: ${p.id}] ${p.nombre.padEnd(10)} | Precio: $${p.precio}`);
});

// 2. Mostrar Lista de productos únicos (Set)
// Para demostrar que es una lista de "unicidad", mostramos el tamaño y sus elementos
console.log(`\n🔢 NÚMEROS ÚNICOS EN EL SET (Total: ${numerosUnicos.size}):`);
console.log([...numerosUnicos].join(" - ")); 

// 3. Mostrar Categorías y nombres (Map)
console.log("\n📂 CATEGORÍAS Y PRODUCTOS (MAP):");
if (categorias.size > 0) {
    for (const [categoria, producto] of categorias) {
        console.log(`> Categoría: ${categoria.padEnd(12)} -> Producto: ${producto}`);
    }
} else {
    console.error("Error: El Map de categorías está vacío.");
}

// 4. Prueba de validación de datos incompletos
console.log("\n⚠️ PRUEBA DE VALIDACIÓN:");
const productoInvalido = { id: 5, nombre: "Teclado Mecánico" }; // Falta el precio

if (!productoInvalido.id || !productoInvalido.nombre || !productoInvalido.precio) {
    console.error("❌ Validación fallida: Producto incompleto detectado (Falta precio).");
} else {
    console.log("✅ Producto validado con éxito.");
}

/*
Criterios de aceptación

    El archivo se llama gestion_datos.js.
    Se usan let y const en lugar de var.
    Se implementan objetos, sets y maps según lo solicitado.
    Se utilizan for...in, for...of, forEach() y métodos de objetos (Object.keys(), Object.values(), Object.entries()).
    Se aplican validaciones para evitar datos incompletos.
    El código contiene comentarios explicativos en cada sección.
*/
