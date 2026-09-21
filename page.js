document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');


    boton.addEventListener('click', () => {
        mensaje.textContent = 'Excelente, now it isexecuted';
    });

    console.log('El DOM ha sido completamente cargado y analizado.');

    console.log('This is a test for the new branch: 1');
    console.log('This is a test for the new branch: 2');
    console.log('This is a test for the new branch: 6');

});