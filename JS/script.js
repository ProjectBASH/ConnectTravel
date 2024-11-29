let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripcionSeleccionda = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

//Funcion para cargar la informacion al seleccionar
function cargar(item){
    quitarbordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red"

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;
    descripcionSeleccionda.innerHTML = item.getElementsByTagName("h6")[0].innerHTML;
    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}

//Funcion que quita el borde del item anterior
function quitarbordes(){
    var items = document.getElementsByClassName("item");
    for(i=0; i < items.length; i++){
        items[i].style.border = "none";
    }
}

//Funcion para cerrar el item seleccionado
function cerrar(){
    mostrador.style.width = "100%"
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarbordes();
}