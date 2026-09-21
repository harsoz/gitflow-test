document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');


    boton.addEventListener('click', () => {
        mensaje.textContent = 'Excelente, now it isexecuted';
    });
    console.log('This is a test for the new branch: 8');

    console.log('El DOM ha sido completamente cargado y analizado.');

    console.log('This is a test for the new branch: 1');
    console.log('This is a test for the new branch: 2');
    console.log('This is a test for the new branch: 6');
    console.log('This is a test for the new branch: 7');
    console.log('This is a test for the new branch: 9');
    console.log('This is a test for the new branch: 10');
    console.log('This is a test for the new branch: 13');
    console.log('This is a test for the new branch: 11');


    console.log('This is a test for the new branch: 14');

});