let URL_PROV = "https://apis.datos.gob.ar/georef/api/v2.0/provincias";

// recuperar elementos del DOM
let lista = document.querySelector(".lista");


fetch(URL_PROV)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let prov = data.provincias
    console.log(prov);

    let contenido = "";

    for (let i = 0; i < prov.length; i++) {
        const element = prov[i];
        console.log(element);
        contenido += `<li><a href="./detalleProv.html?idProv=${element.id}">${element.nombre}</a></li>`;
    }

    lista.innerHTML = contenido;
    
})
.catch(function(error) {
    console.log(error);
    
});

