let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;

    //ESta funcion se invoca al momento que el usuario hace click en el botón

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    //alert("Click del Usuario");

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}<button onclick="eliminarGasto(${posicion});">Eliminar</button> </li>`;
        totalGastos += Number(valorGasto);

        //calculamos total de gasto
        


    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById("nombreGasto").value = '';
    document.getElementById("valorGasto").value = ''; 
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}