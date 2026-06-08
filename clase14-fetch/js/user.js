let URL = "https://randomuser.me/api";

// recuperar elementos del DOM
let fotoPerfil = document.querySelector(".fotoPerfil");
let fotoPerfil2 = document.querySelector(".fotoPerfil2");

let genero = document.querySelector(".genero");
let telefono = document.querySelector(".telefono");
let nombre =  document.querySelector(".nombre");


fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    const user = data.results[0];
    console.log(user);
    
    fotoPerfil.src = user.picture.large;
    fotoPerfil2.src = user.picture.thumbnail;
    genero.innerText = user.gender;
    telefono.innerText = user.cell;
    nombre.innerText = `${user.name.title}. ${user.name.first} ${user.name.last}`;
})
.catch(function(error) {
    console.log(error);
    
});


