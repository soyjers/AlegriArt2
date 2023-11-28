let botonLupaNav = document.querySelector("#btnLupa")
let divCajaBuscador = document.querySelector("#cajaBuscador")
botonLupaNav.addEventListener("click", (e) => {
    console.log(e.target)
    let estadoCajaBuscador = e.target.dataset.vista
    if(estadoCajaBuscador == "no"){
        divCajaBuscador.classList.remove("d-none")
        e.target.setAttribute("data-vista", "si")
    }else{
        divCajaBuscador.classList.add("d-none")
        e.target.setAttribute("data-vista", "no")
    }
})

let bodyHtml = document.querySelector("#bodyDiv")
bodyHtml.addEventListener("click", () => {
    divCajaBuscador.classList.add("d-none")
    botonLupaNav.setAttribute("data-vista", "no")
})