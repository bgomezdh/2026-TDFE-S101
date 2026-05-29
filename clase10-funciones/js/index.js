

let estudiante = "";


/* funcion expresada */

let saludarEstudiante = function(nombre){

    estudiante = nombre.toLowerCase();

    return "Hola querido estudiante " + estudiante;
}


console.log(saludarEstudiante("CARLOS"));

