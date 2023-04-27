export default function validation(datos, event){
    let regExpEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    let regExpPass = /\d/
    let error = {};

    if(datos.email.lenght === 0){ error.email = "No puede estar vacio"};
    if(!regExpEmail.test(datos.email)){ error.email = "Tiene que se un mail valido"}
    else if(datos.email.length > 35){ error.email = "No puede tener mas de 35 caracteres"};

    if(!regExpPass.test(datos.password)){error.password = "Debe contener al menos un numero"}
    else if(datos.password.length < 6 || datos.password.length > 10){error.password = "Debe tener una longitud entre 6 y 10 caracteres"}

    return error;
}

