// document.addEventListener('DOMContentLoaded', function() {

//   try {
//     let app = firebase.app();
//     let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
//     document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
//   } catch (e) {
//     console.error(e);
//     document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
//   }
// });

let infoBip = null;

fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=')
    .then(response => response.json())
    .then(data => {
        infoBip = data;
        console.log(data);
    })
    .catch(error => {
      console.error("No fue posible completar la solicitud.");
    });

    firebase.database().ref('visitas')
  .limitToLast(50) //filtro para no obtener todos los mensajes
  .once('value')
  .then((messages) => {
    console.log("Mensajes >" + JSON.stringify(visitas));
  })
  .catch(() => {

  });

firebase.database().ref('infoBip')
  .limitToLast(50)
  .on('child_added', (newData) => {
    const time = new Date(newData.val().time);
    invitadosContainer.innerHTML = `
    <tr>
    <td>${newData.val().names}</td>
    <td>${newData.val().ruts}</td>
    <td>${newData.val().patentes} </td>
    <td>${time.getHours()}:${time.getMinutes()} del día ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}</td>
    <td><img src="${dataPhoto}" alt="algo" style="width:200px; height:auto;" ></td>
    </tr> 
          `+ invitadosContainer.innerHTML;
  });


// Firebase Database
// Guarda  ela info en database, llamada visitas
function sendMessage() {
  if (inputName.value.length === 0 || null && inputRut.value.length === 0 || null) {
    alert('Debes ingresar todos los datos solicitados')
  } else {

    const name = inputName.value;
    const rut = inputRut.value;
    const patente = inputPatente.value;
    
    //Para tener una nueva llave en la colección visitas
    const newMessageKey = firebase.database().ref().child('visitas').push().key;

    firebase.database().ref(`visitas/${newMessageKey}`).set({
      names: name,
      ruts: rut,
      patentes: patente,
      time: Date.now(),
      foto: dataPhoto
    });
    inputName.value = '';
    inputRut.value = '';
    inputPatente.value = '';
    alert('Datos ingresados correctamente, y notificación enviada con éxito');
  }
}
    