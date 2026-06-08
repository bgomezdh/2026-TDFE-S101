
const imagen = document.querySelector('.detailImage');
const nombre = document.querySelector('.nombreProducto');
const marca = document.querySelector('.marcaProducto');

// Recueperar la info de local con la Key
let infoString = localStorage.getItem("productKey");

// Transformar la info en Obj
let infoObj = JSON.parse(infoString);

if(infoObj){
    imagen.src = infoObj.foto;
    nombre.innerText = 'Nombre: ' + infoObj.nombre;
    marca.innerText = 'Marca: ' + infoObj.marca;
}else{
    alert("No hay producto gaurdado.")
}
