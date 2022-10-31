const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img'); /*querySelectorAll= regresa un arreglo */
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
const btnInicio = document.querySelector('.inicio');
const btnNosotros = document.querySelector('.nosotros');
const btnMenu = document.querySelector('.menu');
const btnChef = document.querySelector('.chef');
const btnContacto = document.querySelector('.contacto');

btnInicio.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');     
});

btnNosotros.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');     
});

btnMenu.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');     
});

btnChef.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');     
});

btnContacto.addEventListener('click',()=>{
    navegacion.classList.add('ocultar');     
});


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
    btnCerrar.textContent = 'x';//Crear boton
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar);
}

const observer = new IntersectionObserver((entries, observer) => {/*Cargar imagenes antes de pasar por ellas */
    entries.forEach(entry => {
        if(entry.isIntersecting){
        const imagen = entry.target;
        imagen.src = imagen.dataset.src;
        observer.unobserve(imagen);
        }
    })
});

imagenes.forEach(imagen => {
    observer.observe(imagen);
});

const cerrarMenu = (boton) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar')
        boton.remove();
    })
  
}

/*filros */

const platillos = () => {
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo')

    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);/*Cuendo se vaya recorriendo, se mete un platillo en el arreglo*/
    const ensaladas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'ensalada');
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillo') == 'postre');

    mostrarPlatillos(ensaladas, pastas, pizzas, postres,platillosArreglo);
}

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres,todos) => {
    btnEnsaladas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada => contenedorPlatillos.appendChild(ensalada));
    });

    btnPasta.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta => contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));
    });

    btnPostres.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre => contenedorPlatillos.appendChild(postre));
    });
    
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=>contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor)=>{/*Limpiar los platillos que no coincidad con la categoria elegida*/
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

