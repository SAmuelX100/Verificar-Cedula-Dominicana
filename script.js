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

    var numero, suma = 0, resultado = 0;


    for (i = 0; i < cedula.length; i++) {

        numero = parseInt(cedula.charAt(i));

        if (i % 2 == 0) {
            numero = numero * 2;

            if (numero > 10) {
                numero = numero - 10;
            }

        }
        suma = suma + numero;

    }

    if (suma % 11 != 0) {
        resultado = suma % 11;
        if (resultado == numero) {
            document.getElementById('resultado').innerHTML = window.alert("Cedula Correcta");
        } else {
            document.getElementById('resultado').innerHTML = window.alert("Cedula Incorrecta");
        }
    } else {
        document.getElementById('resultado').innerHTML = window.alert("Cedula Correcta");
    }

}