let titulo = document.querySelector(".titulo");


//recuperar QS con location 
let qs = location.search;

//recuperar QS como Objeto literal con URLSearchParams 
let qsObj = new URLSearchParams(qs)


//recuperar QS con get()
let idProvincia = qsObj.get("idProv");

titulo.innerText += ` numero ${idProvincia}`;