/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function redireccion() {
    document.getElementById("Inicio_sesion")
}

var eemail = ["admin@gmail.com"];
var coontraseña = ["jagua"];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");

function register() {
    event.preventDefault();

    var email = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var fecha = document.getElementById("fecha").value;
    var usuario = document.getElementById("usuario").value;
    var direccion = document.getElementById("direccion").value;
    var cedula = document.getElementById("cedula").value;

    if (usuario == "") {
        alert("Usuario invalido.");
        return;
    } else if (email == "") {
        alert("Email invalido.");
        return;
    } else if (contraseña == "") {
        alert("Contraseña invalida.");
        return;
    } else if (fecha == "") {
        alert("Fecha invalida.");
        return;
    } else if (cedula == "") {
        alert("Fecha invalida.");
        return;
    } else if (direccion == "") {
        alert("Direccion invalida.");
        return;
    } else if (eemail.indexOf(email) == -1) {
        eemail.push(email)
        coontraseña.push(contraseña);
        location.href = "inicio_sesion.html";
        document.getElementById("correo").value = "";
        document.getElementById("contraseña").value = "";
        document.getElementById("fecha").value = null;
        document.getElementById("usuario").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("cedula").value = null;
    } else {
        alert("El email ya se encuentra registrado");
        return;
    }
}


function login() {
    event.preventDefault();

    var email = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var i = eemail.indexOf(email);

    if (eemail.indexOf(email) == -1) {
        if (email == "") {
            alert("Email invalido.");
            return;
        }
        alert("El email ingresado no existe.");
        return;
    } else if (coontraseña[i] != contraseña) {
        if (contraseña == "") {
            alert("Contraseña invalida.");
            return;
        }
        alert("Las contraseñas no coinciden");
        return;
    } else {
        location.href = "White_Space.html";
        document.getElementById("correo").value = "";
        document.getElementById("contraseña").value = "";
        return;
    }
}

function CrearRuta() {
    alert("la ruta se guardo correctamente");
}

function EntarRuta() {
    alert("se ingreso correctamente");
}

function Perfil() {
    alert("los datos se guardaron correctamente");
    location.href = "White_Space.html";
}