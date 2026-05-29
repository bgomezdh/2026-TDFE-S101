let listaAutos = [
  {
    patente: "AE 111 QW",
    marca: "Toyota",
    annio: 2021,
    describirAuto: function () {
      return `Este auto es un ${this.marca} y el año es el ${this.annio}`;
    },
  },
  {
    patente: "AE 222 QW",
    marca: "Toyota",
    annio: 2022,
    describirAuto: function () {
      return `Este auto es un ${this.marca} y el año es el ${this.annio }`;
    },
  },
  {
    patente: "AE 333 QW",
    marca: "Toyota",
    annio: 2023,
    describirAuto: function () {
      return `Este auto es un ${this.marca} y el año es el ${this.annio}`;
    },
  },
];



let annioFiltrado = prompt("Ingrese año de busqueda: ej (2020,2022,2023)");


for (let i = 0; i < listaAutos.length; i++) {
  
    if (listaAutos[i].annio == annioFiltrado) {
        console.log(listaAutos[i].describirAuto());
        
    }
    
}
