const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
document.addEventListener('DOMContentLoaded', () => {
    eventos();
});


const eventos = () => {
    menu.addEventListener('click', abrirMenu);
}
const abrirMenu = () => {
    navegacion.classList.remove('ocultar') //Elimina ocultar navegacion
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p'); /*btnCerrar = a un parrafo*/
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body'); // para cubrir toda la web, es decir, el cuerpo
    if(document.querySelectorAll('.pantalla-completa').length > 0) return; /*Para solo generear un overlay */
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';//Crear boton
    btnCerrar.classList.add('btn-cerrar');

    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu =(boton,overlay)=>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar')
        overlay.remove();
        boton.remove();
    })
    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}
