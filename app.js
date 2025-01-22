// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
function Amigos (){
    let nombreAmigo = document.getElementById("amigo").value;
    if(nombreAmigo == ""){
        alert("por favor inserte un nombre");

    } else{
        listaAmigos.push(nombreAmigo);
        nombreAmigo = document.getElementById("amigo").value="";
    }
}
