let arregloImagenes = document.querySelectorAll(".imagenSliderDetalle")
arregloImagenes.forEach((imagen) => {
    imagen.addEventListener("click", () => {
        document.querySelector("#imagenAgrandada").src = imagen.src
    })
})