window.addEventListener("load", function () {
    document.getElementById('cedula').addEventListener("keypress", soloNumeros, false);
});

function soloNumeros(e) {
    var key = e.which || e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

function validarCedula() {
    var cedula = document.getElementById('cedula').value.replace(/-/g, '');

    if (cedula.length !== 11 || !/^\d+$/.test(cedula)) {
        alert("La cédula debe tener 11 dígitos.");
        return false;
    }

    var peso = [1, 2]; // Alternar entre estos pesos
    var suma = 0;

    for (var i = 0; i < 10; i++) {
        var numero = cedula[i] * peso[i % 2];
        suma += (numero >= 10) ? numero - 9 : numero;
    }

    var digitoVerificador = (10 - (suma % 10)) % 10;

    if (digitoVerificador == cedula[10]) {
        alert("Cédula Correcta");
    } else {
        alert("Cédula Incorrecta");
    }
}

