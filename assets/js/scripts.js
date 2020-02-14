function validar(){ //Aquí se contiene toda la función que se pretende realizar
    var nombre, apellidos, correo, usuario, clave, telefono, expresion; //Aquí están las variables que pretendemos usar
    /* Cada variable será buscada en el HTML, y se le agrega el método getElementById para que, dentro del documento,
    busque los ID de cada etiqueta input*/
    nombre = document.getElementById("name").value;
    apellidos = document.getElementById("surnames").value;
    correo = document.getElementById("mail").value;
    usuario = document.getElementById("usser").value;
    clave = document.getElementById("pass").value;
    telefono = document.getElementById("phone").value;

    expresion = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico

    /*IF (Si) en JS significa que dada una condición o expresión, se debe ejecutar aquello que contiene dentro.
    En este caso expresa que si los campos son extrictamente iguales (===) a 'vacío' (" "), debe ejecutar una
    alerta avisando que debe colocar los datos dentro ya que son campos obligatorios, junto con un return false
    el cual significa "Si no hay datos ingresados, el resultado es falso" (Toma respuestas primitivas parecidas
    a los booleans)*/
    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave ==="" || telefono ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    /*ELSE IF - IF ELSE (Sino si - Si sino) en JS significa que aquello que se ejecuta en el if, el else es quien
    da la instrucción a realizar para que la condición se cumpla. En este caso dice que si escribimos más de 30
    palabras (length: cuenta strings), la instrucción que ejecuta es un alert avisando que el nombre es muy largo*/
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    // Si el apellido escrito es mayor a 80 palabras, ejecuta un alert avisando que el apellido es muy largo
    else if (apellidos.length>80){
        alert("El apellidos son muy largos");
        return false;
    }
    // Si el correo escrito es mayor a 100 palabras, ejecuta un alert avisando que el mail es muy largo
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    /*En este caso, lo que dice es: si la expresión (lo escrito) no corresponde a las expresiones strings, @, y .,
    ejecuta un alert avisando que el correo electrónico no es válido*/
    else if (!expresion.test(correo)){
        alert("El correo no es válido");
        return false;
    }
    /*Si el nombre de usuario y contraseña sobrepasan los 20 carácteres, ejecuta un alert avisando que tiene un tope
    un tope maximo de letras que se deben colocar*/
    else if (usuario.length>20 || clave.length>20){
        alert("El usuario y la contraseña sólo deben tener 20 caracteres como máximo");
        return false;
    }
    // Si el número de teléfono sobrepasa los 15 números, ejecuta un alert avisando que el número de teléfono es largo
    else if (telefono.length>15){
        alert("El teléfono es muy largo");
        return false;
    }
    /*En este caso explica que si se escribe otra cosa que no sea número, mandará un alert avisando que la información
    ingresada, no corresponde*/
    else if (isNaN(telefono)){
        alert("El teléfono ingresado no es número");
        return false;
    }
    /*Por último, si se cumplen todos los parámetros (ingresar correctamente todos los datos), mandará un alert dando
    la bienvenida, junto a su nombre de usuario y contraseña*/
    var saludo = "Bienvenido " + nombre + apellidos + "!!!. Gracias por registrarte. Tu Nombre de Usuario es: " + usuario + " y tu contraseña es: " + clave + ".";

    alert(saludo);
}
