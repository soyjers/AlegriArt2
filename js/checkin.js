document.querySelector("#FormCheckIn").addEventListener("submit", (e) => {
    e.preventDefault()
    if(e.target.TxtApellido.value != "" && e.target.TxtNombre.value != "" && e.target.TxtEmail.value != ""  && e.target.TxtContraseña.value != "" && e.target.TxtConfContraseña.value != ""){
        location.href = "InicioDeSesion.html"
    }else{
        alert("Por Favor Rellene los Espacios Vacios")
    }
})