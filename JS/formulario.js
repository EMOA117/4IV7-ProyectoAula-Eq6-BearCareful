
function validar(formulario) {
    //obtener los valores del formulario
    if (formulario.nombre.value.length < 5) {
        alert("Escribe mas de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }


    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
        + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for (var i = 0; i < checkStr.length; i++) {
        var ch = checkStr.charAt(i);
        for (var j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allvalid = false;
            break;
        }
    }

    if (!allvalid) {
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    if (formulario.mensaje.value.length < 5) {
        alert("Escribe mas de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }


    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
        + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.mensaje.value;

    var allvalid = true;

    for (var i = 0; i < checkStr.length; i++) {
        var ch = checkStr.charAt(i);
        for (var j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allvalid = false;
            break;
        }
    }

    if (!allvalid) {
        alert("Escribe solo letras en el campo Mensaje");
        formulario.mensaje.focus();
        return false;
    }

    var checkOK = "1234567890";

    var checkStr = formulario.telefono.value;

    var allvalid = true;

    for (var i = 0; i < checkStr.length ; i++) {
        var ch = checkStr.charAt(i);
        for (var j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allvalid = false;
            break;
        }
    }

    if (!allvalid) {
        alert("Escribe solo numeros en el campo Telefono");
        formulario.telefono.focus();
        return false;
    }

    var txt = formulario.email.value;

    
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt) ? "" : " no ") + " valido");

    return b.test(txt);
}
