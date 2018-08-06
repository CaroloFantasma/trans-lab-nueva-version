//Firebase
firebase.database().ref('dataBip')
  .limitToLast(10) //filtro para no obtener todos las tarjetas
  .once('value')
  .then((bipData) => {
    console.log("Mensajes >" + JSON.stringify(dataBip));
  })
  .catch(() => {
  });

firebase.database().ref('dataBip')
  .limitToLast(10)
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
    const userEmail = document.getElementById('userEmail').value;
    showEmail.innerHTML = userEmail;

    //Para tener una nueva llave en la colección infoBip
    const newNumberKey = firebase.database().ref().child('infoBip').push().key;

    firebase.database().ref(`infoBip/${newNumberKey}`).set({
      num: BipNumber,
      email:userEmail
    });
    numberOfBip.value = '';
    alert('Tarjeta guardada con éxito');
  }
}
