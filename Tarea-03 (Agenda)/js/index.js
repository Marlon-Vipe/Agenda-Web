function loadContact(){
    var Contacts = document.getElementById('Contacts');  
    Contacts.innerHTML = "";
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(data){
        return data.json();
    }).then(function (data){
        data.forEach(
            function(contacto){
                Contacts.innerHTML += "<b>"+contacto.nombre + "</b> " + contacto.apellido + " <i>" + contacto.telefono +"</i><br/>";
            }
        )
    })
}

function showContact(nombre, apellido, telefono){
    var Contacts = document.getElementById('Contacts');  
    Contacts.innerHTML += "<b>"+nombre + "</b> " + apellido + " <i>" + telefono +"</i><br/>";
}

function agregarContacto(){
    var txtNombre = document.getElementById('txtNombre');
    var txtApellido = document.getElementById('txtApellido');
    var txtTelefono = document.getElementById('txtTelefono');
    var contacto = {nombre: txtNombre.value, apellido: txtApellido.value, telefono : txtTelefono.value};
    fetch("http://www.raydelto.org/agenda.php",
        {
          method: 'POST',
          body: JSON.stringify(contacto)
        }
    ).then(function(respuesta){
        return respuesta.json()
    }).then(function(respuesta){
        if(respuesta.exito === true){
            showContact(txtNombre.value, txtApellido.value, txtTelefono.value);
        }
    })    
    
}