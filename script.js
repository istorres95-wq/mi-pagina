let botonComenzar = document.getElementById("comenzar");

let portada = document.getElementById("portada");

let menu = document.getElementById("menu");

let fotosBtn = document.getElementById("fotosBtn");

let galeria = document.getElementById("galeria");


botonComenzar.addEventListener("click", function() {

    portada.style.display = "none";

    menu.style.display = "block";

});

fotosBtn.addEventListener("click", function() {

    menu.style.display = "none";

    galeria.style.display = "block";

});
let fotos = document.querySelectorAll(".foto");

let visor = document.getElementById("visor");

let fotoGrande = document.getElementById("fotoGrande");

let cerrar = document.getElementById("cerrar");

let anterior = document.getElementById("anterior");

let siguiente = document.getElementById("siguiente");

let fotoActual = 0;
fotos.forEach(function(foto, indice) {

    foto.addEventListener("click", function() {

        fotoActual = indice;

        fotoGrande.src = foto.src;

        visor.style.display = "flex";

    });

});
cerrar.addEventListener("click", function() {

    visor.style.display = "none";

});
siguiente.addEventListener("click", function() {

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    fotoGrande.src = fotos[fotoActual].src;

});
anterior.addEventListener("click", function() {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotos.length - 1;
    }

    fotoGrande.src = fotos[fotoActual].src;

});
let cartasBtn = document.getElementById("cartasBtn");

let cartas = document.getElementById("cartas");


cartasBtn.addEventListener("click", function() {

    menu.style.display = "none";

    cartas.style.display = "block";

});
let historiaBtn = document.getElementById("historiaBtn");

let historia = document.getElementById("historia");


historiaBtn.addEventListener("click", function() {

    menu.style.display = "none";

    historia.style.display = "block";

});
let dedicatoriasBtn = document.getElementById("dedicatoriasBtn");

let dedicatorias = document.getElementById("dedicatorias");


dedicatoriasBtn.addEventListener("click", function() {

    menu.style.display = "none";

    dedicatorias.style.display = "block";

});
let sorpresaBtn = document.getElementById("sorpresaBtn");

let sorpresa = document.getElementById("sorpresa");

let abrirCapsula = document.getElementById("abrirCapsula");

let capsula = document.getElementById("capsula");

let mensajeCapsula = document.getElementById("mensajeCapsula");


sorpresaBtn.addEventListener("click", function() {

    menu.style.display = "none";

    sorpresa.style.display = "block";

    // Reiniciar la sorpresa
    document.getElementById("videoSorpresa").style.display = "block";
    document.getElementById("capsula").style.display = "none";
    document.getElementById("mensajeCapsula").style.display = "none";

    // Reiniciar el video
    let video = document.getElementById("videoCapsula");

    if (video) {
        video.currentTime = 0;
        video.pause();
    }

});


abrirCapsula.addEventListener("click", function() {

    capsula.style.display = "none";

    mensajeCapsula.style.display = "block";

});
let botonesVolver = document.querySelectorAll(".volver");


botonesVolver.forEach(function(boton) {

    boton.addEventListener("click", function() {

        galeria.style.display = "none";

        cartas.style.display = "none";

        historia.style.display = "none";

        dedicatorias.style.display = "none";

        sorpresa.style.display = "none";

        menu.style.display = "block";

    });

});
function siguienteMomento() {
    const momentos = document.querySelectorAll("#historia .momento");

    let actual = -1;

    momentos.forEach((momento, index) => {
        if (momento.classList.contains("activo")) {
            actual = index;
        }
    });

    if (actual < momentos.length - 1) {
        momentos[actual].classList.remove("activo");
        momentos[actual + 1].classList.add("activo");
    }
}
function continuarCapsula() {
    document.getElementById("videoSorpresa").style.display = "none";
    document.getElementById("capsula").style.display = "block";
}
