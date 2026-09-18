// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos las referencias a los elementos del HTML
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    // Añadimos el evento de clic al botón
    boton.addEventListener('click', () => {
        mensaje.textContent = '¡Excelente! El archivo JavaScript se ha ejecutado correctamente.';
    });
});