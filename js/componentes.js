fetch("componentes/header.html")
    .then(respuesta => respuesta.text())
    .then(datos => {
        document.getElementById("header").innerHTML = datos;
    });

fetch("componentes/footer.html")
    .then(respuesta => respuesta.text())
    .then(datos => {
        document.getElementById("footer").innerHTML = datos;
    });