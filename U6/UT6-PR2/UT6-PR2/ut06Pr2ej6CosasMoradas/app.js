let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


window.addEventListener("load", iniciar);
function iniciar() {
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
  }
  listUl.addEventListener('click', crearbotones);
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista);
  addItemButton.addEventListener('click', AñadirElemento);
}

function attachListItemButtons(li) {
  let subir = document.createElement('button');
  subir.className = 'subir';
  subir.textContent = 'subir';
  li.appendChild(subir);

  let bajar = document.createElement('button');
  bajar.className = 'bajar';
  bajar.textContent = 'bajar';
  li.appendChild(bajar);

  let borrar = document.createElement('button');
  borrar.className = 'borrar';
  borrar.textContent = 'borrar';
  li.appendChild(borrar);
}

function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  //Recogemos todos los elementos que vamos a utilizar.
  let opcion = event.target;
  let elemLista = opcion.parentElement;
  let list = elemLista.parentElement;

  //Opcion borrar.
  if (opcion.className == 'borrar') {
    list.removeChild(elemLista);
 
  } else if (opcion.className == 'subir') {
    //Almacenamos los valores que vamos a cambiar.
    let mayor = elemLista.previousElementSibling;
    let aux = elemLista.innerHTML;
    //Cambiamos los valores mediante una triangulación con el apoyo de un elemento auxiliar.
    elemLista.innerHTML = mayor.innerHTML;
    mayor.innerHTML = aux;

  } else {
    //Lo mismo que el if anterior pero cogiendo el hermano menor.
    let menor = elemLista.nextElementSibling;
    let aux = elemLista.innerHTML;
    //Triangulamos otra vez.
    elemLista.innerHTML = menor.innerHTML;
    menor.innerHTML = aux;
  }

}

function MostrarOcultarLista() {
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  var estado = document.getElementsByClassName("list")[0].style.display;

  if (estado != 'none') {
    document.getElementsByClassName("list")[0].style.display = 'none';
    document.getElementById("toggleList").innerHTML = 'Mostrar lista';

  } else {
    document.getElementsByClassName("list")[0].style.display = 'block';
    document.getElementById("toggleList").innerHTML = 'Ocultar lista';

  }
}
function CambiarTextoLista() {
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  document.getElementsByClassName("description")[0].innerHTML = document.getElementsByClassName("description")[1].value;
}
function AñadirElemento() {
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  elemento = document.createElement('li');
  elemento.innerHTML = document.getElementsByClassName("addItemInput")[0].value;
  document.getElementsByTagName('ul')[0].appendChild(elemento);
  attachListItemButtons(elemento);
}


