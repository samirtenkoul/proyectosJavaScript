      let listDiv = "";
      let listUl = "";
      let lis = "";
      let toggleList = "";
      let descriptionInput = "";
      let descriptionP = "";
      let descriptionButton = "";
      let addItemInput = "";
      let addItemButton = "";


       window.addEventListener("load",iniciar);
       function iniciar(){
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
        var boton = event.target;
        var element =  boton.parentElement;
        var lista = element.parentElement;
        
        if (boton.className=="subir"){
            var anterior = element.previousElementSibling;
            var texto = anterior.innerHTML;
            anterior.innerHTML = element.innerHTML;  
            element.innerHTML = texto;
            
        } else if (boton.className=="bajar"){
            var siguiente = element.nextElementSibling;
            var texto = siguiente.innerHTML;
            siguiente.innerHTML = element.innerHTML;  
            element.innerHTML = texto;
        }else {
            lista.removeChild(element);
        }
       }

       function MostrarOcultarLista(){
        // Muestra u oculta la información de las cosas que son violeta (listDiv)
        var lista = document.getElementsByClassName("list")[0];
        var boton = document.getElementById("toggleList");
        
        if(lista.style.display == "none"){
          lista.style.display = "block";
          boton.innerHTML = "Ocultar lista";

        }else {
          lista.style.display = "none";
          boton.innerHTML = "Mostrar lista";
        }
      }
       function CambiarTextoLista(){
        //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
        // Inicialmente COSAS QUE SON VIOLETA
        var texto = descriptionInput.value;
        descriptionP.innerHTML = texto;
        
      }
       function AñadirElemento(){
        //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
        //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
        var fila = document.createElement("li");
        var valor = document.createTextNode(document.getElementsByClassName("addItemInput")[0].value);
        fila.appendChild(valor);
        attachListItemButtons(fila);
        document.getElementsByTagName("ul")[0].appendChild(fila);
}


