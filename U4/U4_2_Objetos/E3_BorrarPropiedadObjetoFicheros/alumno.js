  let alumno =  [
      {
      nombre : "David Perez", 
      grupo : "DAW2", 
      fct : "no"  
      }, 
      {
      nombre : "Ana Garcia",
      grupo : "DAW2",
      fct : "si"  
      },
      {
      nombre : "Gema Perez",
      grupo: "ASIR2",
      fct : "no"
      }
  ]
  
document.write("VAMOS A COMPROBAR COMO SE BORRA LA PROPIEDAD fct DEL ALUMNO <br>");
document.write("Alumnos antes del borrado <br>");
  
for (var i = 0; i < alumno.length; i++) {
    Object.keys(alumno[i]).forEach(elemento => document.write(elemento + ": " + alumno[i][elemento] + "<br>"));
}

delete alumno[0].fct;

document.write("Alumnos despues del borrado <br>");
for (var i = 0; i < alumno.length; i++) {
    Object.keys(alumno[i]).forEach(elemento => document.write(elemento + ": " + alumno[i][elemento] + "<br>"));
}
  