// 1. Fundamentos e Interacción Básica
// Creación de un sistema interactivo de mensajes

/*
TASK 1
1. Configuración inicial del proyecto:

    Crea un archivo llamado sistema_interactivo.js.
    Asegúrate de que el archivo pueda ejecutarse en el navegador o en Node.js para pruebas.
    Comenta cada sección del código para mayor comprensión.
*/

/*
TASK 2
2. Entrada de datos del usuario:

    Usa prompt() para solicitar el nombre.
    Usa prompt() para solicitar la edad.
    Declara variables usando let o const y asigna los valores ingresados.
*/

const nombre = prompt("Por favor, ingresa tu nombre:");
const entradaEdad = prompt("Por favor, ingresa tu edad:");

/*
TASK 3
3. Validación de la edad:

    Comprueba si el valor ingresado para la edad es un número.
    Si no es un número, muestra un mensaje de error usando console.error("Error: Por favor, ingresa una edad válida en números.").
*/

const edad = Number(entradaEdad);

// Verificamos si la conversión falló (NaN) o si el campo está vacío
if (isNaN(edad) || entradaEdad === null || entradaEdad.trim() === "") {
    console.error("Error: Por favor, ingresa una edad válida en números.");
    alert("Hubo un error con la edad ingresada. Revisa la consola.");
} else {

/*
TASK 4
4. Condicionales y mensajes dinámicos:

    Si la edad es menor a 18, muestra con alert() o console.log():
        "Hola [nombre], eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"
    Si la edad es mayor o igual a 18, muestra:
        "Hola [nombre], eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"
*/

        if (edad < 18) {
        // Mensaje para menores de edad
        const mensajeMenor = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        console.log(mensajeMenor);
        alert(mensajeMenor);
    } else {
        // Mensaje para mayores de edad
        const mensajeMayor = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
        console.log(mensajeMayor);
        alert(mensajeMayor);
    }
}

    
/*

Criterios de aceptación

    El archivo se llama sistema_interactivo.js.
    Se usan let o const (no var).
    Se valida que la edad sea un número válido.
    Se muestran mensajes personalizados según el valor de la edad.
    Se utiliza console.error() para errores de entrada.
    El código contiene comentarios explicativos en cada sección.

*/
