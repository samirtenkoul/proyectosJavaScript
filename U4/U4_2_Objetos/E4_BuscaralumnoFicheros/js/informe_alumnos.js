var message = '';
var alumno;
var search;

// observa estos nuevos métodos y propiedades... 
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function imprimir (alumno){
    var salida = "<h2>Nombre del alumno: " + alumno.nombre + "</h2>";
    salida += "Empresa FCT: " + alumno.empresafct + "<br>";
    salida += "Titulo del proyecto: " + alumno.tituloproyecto + "<br>";
    salida += "Nota media del ciclo: " + alumno.notamedia + "<br>";
    return salida;
}
var hay = false;
do{
    search = prompt("Introduzca el nombre  (pej David)");
    if( search === "" ){
        alert("Debe introducir un nombre");
    }else if (search === null){ //cancelar === null
        print("Ha seleccionado 'cancelar'");
        hay = true;
    }else {
        hay = true;
    }
}while( hay === false );

if(hay === true){
    var aux = true;
    for (var i = 0; i < alumnos.length && aux === true; i++) {
            alumno = alumnos[i];
            if (alumno.nombre.toLowerCase() === search.toLowerCase()) {
                message = imprimir(alumno);
                aux = false;
            }else {
                message = "No se ha encontrado ningun alumno con el nombre de " + search;
            }
        }
    print(message);
}


