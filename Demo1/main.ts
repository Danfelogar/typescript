function Saludador(saludo) {
    this.saluo = saludo;
}

Saludador.prototype.decirHola = function() {
    return "hola " + this.saludo;
}

let saludador = new Saludador("mundo");

let boton = document.createElement('button');

boton.textContent = "Decir Hola";

boton.onclick = function () {
    alert(saludador.decirHola());
}

document.body.appendChild(boton);
//con esto hacemos el appen del boton a la pag web