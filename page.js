document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    console.log('DOM fully loaded and parsed');

    boton.addEventListener('click', () => {
        mensaje.textContent = 'Excelente, now it isexecuted';
    });
});