document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');


    boton.addEventListener('click', () => {
        mensaje.textContent = 'Excelente, now it isexecuted';
    });

    console.log('El DOM ha sido completamente cargado y analizado.');
    console.log('El DOM ha sido completamente cargado y analizado.');
    console.log('El DOM ha sido completamente cargado y analizado.');

});