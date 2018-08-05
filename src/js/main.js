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

fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=`)
    .then(response => response.json())
    .then(data => {
        infoBip = data;
        console.log(data);
    })
    .catch(error => {
      console.error("No fue posible completar la solicitud.");
    });

    