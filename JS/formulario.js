function validar(formulario){
    //obtener los valores del formulario
   
    if(formulario.nombre.value.length < 5){
        alert("Escribe mas de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }

    if(formulario.email.value.length == 0){
        alert("Escribe un email");
        formulario.email.focus();
    return false;

    }
    var txt = formulario.email.value;
    //patron
    var b = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    var esValido = b.test(txt);

    if(esValido==false){
        alert("El correo electrónico no es valido");
        formulario.email.focus();
    return false;
    }

    if(formulario.telefono.value.length < 10){
        alert("Escribe al menos 10 digitos en Número de contacto");
        formulario.telefono.focus();
    return false;
    }

    if(formulario.telefono.value.length > 10){
        alert("Escribe menos  de 10 digitos en Número de contacto");
        formulario.telefono.focus();
    return false;
    }


    if(formulario.mensaje.value.length == 0){
        alert("Escribe un mensaje");
        formulario.mensaje.focus();
    return false;

    }


    /*
    vamos a crear una opcion para que solo se pueda ingresar
    letras dentro del campo nombre
    */

    var checkOK = " QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + " qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = " QWERTYUIOPASDFGHJKLÑZXCVBNM"
        + " qwertyuiopasdfghjklñzxcvbnm"+
        "!?¡¿$%#&"
        +"1234567890";

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


    /*
    vamos a validar la entrada de numeros
    */ 

    var checkOK = "1234567890";

    var checkStr = formulario.telefono.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo Telefono");
        formulario.telefono.focus();
        return false;
    }



}