// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
function agregarAmigo (){
    let nombreAmigo = document.getElementById("amigo").value;
    if(nombreAmigo == ""){
        alert("por favor inserte un nombre");

    } else{
        listaAmigos.push(nombreAmigo);
        nombreAmigo = document.getElementById("amigo").value="";
        mostrarLista();
        return nombreAmigo;
    }
}

function mostrarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar la lista antes de actualizar
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i]; // Crear un nuevo elemento de lista con el nombre
        listaElement.appendChild(li); // Agregar el elemento a la lista
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}