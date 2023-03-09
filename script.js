window.addEventListener("load", function () {
    cedula.addEventListener("keypress", soloNumeros, false);
});

function soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

function validarCedula(cedula) {

    cedula = document.getElementById('cedula').value;

    console.log(typeof (cedula));

    var numero, suma, resultado;

    for (i = 0; i < cedula.length; i++) {
        numero = cedula.split('');

        if (i % 2 == 0) {
            numero = numero * 2;

            if (numero > 10) {
                numero = numero - 10;
            }

        }
        suma = suma + numero;
    }

    if (suma % 11 != 0) {
        resultado = 11 - (suma % 11);
        if (resultado == numero) {
            document.getElementById('resultado').innerHTML = '<p> Cedula Correcta </p>';
        } else {
            document.getElementById('resultado').innerHTML = '<p> Cedula Incorrecta </p>';
        }
    }


}