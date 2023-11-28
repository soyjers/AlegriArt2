document.querySelector("#formLogin").addEventListener("submit", (e) => {
    e.preventDefault()
    if(e.target.txtCorreo.value != "" && e.target.txtPass.value != ""){
        location.href = "alegriArt.html"
    }else{
        alert("Por Favor Rellene los Espacios Vacios")
    }
})

document.querySelector("#verPass").addEventListener("click", () => {
    let inputPass = document.querySelector("#txtPass")
    let estado = inputPass.dataset.vista
    if(estado == "off"){
        inputPass.setAttribute("type", "text")
        inputPass.setAttribute("data-vista", "on")

    }else{
        inputPass.setAttribute("type", "password")
        inputPass.setAttribute("data-vista", "off")
    }
})

//comentario