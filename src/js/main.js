
let infoBip = null;

fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=20338150')
    .then(response => response.json())
    .then(data => {
        infoBip = data;
        console.log(data);
    })
    .catch(error => {
      console.error("No fue posible completar la solicitud.");
    });

    //Firebase
    firebase.database().ref('dataBip')
  .limitToLast(50) //filtro para no obtener todos los mensajes
  .once('value')
  .then((bipData) => {
    console.log("Mensajes >" + JSON.stringify(dataBip));
  })
  .catch(() => {
  });

  firebase.database().ref('dataBip')
  .limitToLast(50)
  .on('child_added', (newCard) => {
    cardOptions.innerHTML += `
    <p>${newCard.val().num}</p>
          `;
  });

// Firebase Database
// Guarda  la info en database, llamada infoBip
function addCard() {
  if (numberOfBip.value.length === 0 || numberOfBip.value.length > 8) {
    alert('Debe ingresar información válida')
  } else {

    const BipNumber = numberOfBip.value;
    
    //Para tener una nueva llave en la colección infoBip
    const newNumberKey = firebase.database().ref().child('infoBip').push().key;

    firebase.database().ref(`infoBip/${newNumberKey}`).set({
      num: BipNumber
    });
    numberOfBip.value = '';
    alert('Tarjeta guardada con éxito');
  }
}
    