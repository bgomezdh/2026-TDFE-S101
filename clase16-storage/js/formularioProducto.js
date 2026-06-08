
const form = document.querySelector('.form');
const nombreInput = document.querySelector('.nombreAuto');
const marcaInput  = document.querySelector('.marcaAuto');
const imagenInput = document.querySelector('.fotoAuto');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const producto = {
        nombre: nombreInput.value,
        marca: marcaInput.value,
        foto: imagenInput.value
    };    

    // Convertir la info en String
    let infoString = JSON.stringify(producto);

    // Enviar la info a local con su identificador unico Key=Value
    localStorage.setItem("productKey", infoString)


    // Enviar Formulario 
    form.submit();
});
