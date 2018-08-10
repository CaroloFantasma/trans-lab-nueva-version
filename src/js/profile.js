//Firebase
firebase.database().ref('infoBip')
  .limitToLast(10) //filtro para no obtener todas las tarjetas
  .once('value')
  .then((bipData) => {
    console.log("Tarjetas >" + JSON.stringify(dataBip));
  })
  .catch(() => {
  });

// Firebase Database
// Guarda  la info en database, llamada infoBip
function addCard() {
  let bipNumber = numberOfBip.value;
    console.log(bipNumber);
    const emailUser = userEmail.value;
    console.log(emailUser);

    //Para tener una nueva llave en la colección infoBip
    const newNumberKey = firebase.database().ref().child('infoBip').push().key;
    firebase.database().ref(`infoBip/${newNumberKey}`).set({
      num: bipNumber,
      userName: emailUser
    });

    bipNumber.value = '';
    alert('Tarjeta guardada con éxito');
  }

  firebase.database().ref('infoBip')
    .limitToLast(10)
    .on('child_added', (newCard) => {
      cardOptions.innerHTML += `
      <p id = newCardNumber>${newCard.val().num}</p>
            `;

      dataBipContainer.innerHTML += `
    <select>
    <option>${newCard.val().num}</option>
    </select>
    `

      selectCard.innerHTML += `
    <select>
    <option>${newCard.val().num}</option>
    </select>
    `
    });

//Subir foto de perfil

function sendPhotoToStorage(){
  const photoFile = photoFileSelector.files[0];
  const fileName = photoFile.name; 
  const metadata = { // datos sobre el archivo 
      contentType : photoFile.type// tipo de archivo
  };
  // genera un objeto
  const task = firebase.storage().ref('images')
      .child(fileName)
      .put(photoFile, metadata);

  task.then(snapshot => snapshot.ref.getDownloadURL())  //url de descarga de la imagen)
      .then(url => {
          console.log("URL del archivo > "+url);
          let picture = url;
          document.getElementById('userImg').src = picture;
 
      });
}
