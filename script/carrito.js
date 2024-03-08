const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    cargarEventListeners();

    function cargarEventListeners(){
        elementos1.addEventListener("click", comprarElemento);
        carrito.addEventListener("click", eliminarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }
    
    function comprarElemento(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const elemento = e.target.parentElement.parentElement;
            leerDatosElemento(elemento);
        }
    }

    function leerDatosElemento(e){
        const infoElemento = {
            imagen : e.querySelector('img').src,
            titulo : e.querySelector('h3').textContent,
            precio : e.querySelector('.precio').textContent,
            id : e.querySelector('a').getAttribute('data-id')
        }
        insertarCarrito(infoElemento);
    }

    function insertarCarrito(e){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${e.imagen}" width=100/>
            </td>
            <td>
                ${e.titulo}
            </td>
            <td>
                ${e.precio}
            </td>
            <td>
                <a href="#" class="borrar" data-id="${e.id}">X</a>
            </td>
        `;
        lista.appendChild(row);
    }


    function eliminarElemento(e){
        e.preventDefault();
        let elemento, elementoId;
        if(e.target.classList.contains('borrar')){
            e.target.parentElement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoId = elemento.querySelector('a').getAttribute('data-id');
        }
    }

    function vaciarCarrito(){
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
        return false;
    }
