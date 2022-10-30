const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img'); /*querySelectorAll= regresa un arreglo */

document.addEventListener('DOMContentLoaded', () => {
    eventos();
    platillos();
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

const observer = new IntersectionObserver((entries,observer)=>{/*Cargar imagenes antes de pasar por ellas */
    entries.forEach(entry=>{
        const imagen = entry.target;
        observer.unobserve(imagen);
    })
});

imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src; 
    observer.observe(imagen);
});

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

/*filros */

const platillos = ()=>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo')

    platillos.forEach(platillo=> platillosArreglo = [...plaillosArreglo,platillo])/*Cuendo se vaya recorriendo, se mete un platillo en el arreglo*/
    
}
