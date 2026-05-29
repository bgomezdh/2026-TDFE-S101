let container = document.querySelector(".container");



let listaProductos = [{
    nombrePersonas: "Messi",
    mail: "messi@gmail.com",
    genero: "Masculino",
    img: "./img/messi.png",
    color: "rgb(251 189 217)"
},{
    nombrePersonas: "CR7",
    mail: "CR7@gmail.com",
    genero: "Masculino",
    img: "./img/cr7.png",
    color: "rgb(19, 143, 110)"
},{
    nombrePersonas: "Ney",
    mail: "Ney@gmail.com",
    genero: "Masculino",
    img: "./img/ney.png",
    color: "rgb(197, 26, 26)"
},{
    nombrePersonas: "Suarez",
    mail: "Suarez@gmail.com",
    genero: "Masculino",
    img: "./img/suarez.png",
    color: "rgb(92, 208, 246)"
}];

let contenidoFor = "";

for (let i = 0; i < listaProductos.length; i++) {
    
    contenidoFor += ` <div class="card" style="box-shadow: 0 2px 20px ${listaProductos[i].color}">
        <div class="card-header">
          <a href="/detalleArtista.html">
            <img class="fotoPerfil" alt="rover" src="${listaProductos[i].img}" />
          </a>
        </div>
        <div class="card-body">
          <span class="tag tag-teal genero">${listaProductos[i].genero}</span>
          <h4 class="telefono">+54 9 1121322</h4>
          <p class="email">${listaProductos[i].mail}</p>

          <ul class="lista">
            <li class="listItem">Argentina</li>
            <li class="listItem">Peru</li>
          </ul>

          <div class="user">
            <img
              class="fotoPerfil2"
              alt="user"
              src="${listaProductos[i].img}"
            />
            <div class="user-info">
              <h5 class="nombre">${listaProductos[i].nombrePersonas}</h5>
              <small>2025-07-14</small>
            </div>
          </div>
        </div>
      </div>`
    
}

container.innerHTML = contenidoFor;