//Login de usuario
window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si estamos logueados
      document.getElementById('screenOne').style.display = 'none';
      document.getElementById('screenTwo').style.display = 'block';
      document.getElementById('menuNav').style.display = 'block';
      console.log("User > " + JSON.stringify(user));
      let uid = user.uid;
      let email = firebase.auth().currentUser.email;
      console.log(email);
      showEmail.innerHTML = email;
    } else {
      //No estamos logueados
      document.getElementById('screenOne').style.display = 'block';
      document.getElementById('screenTwo').style.display = 'none';
      document.getElementById('screenThree').style.display = 'none';
      document.getElementById('screenFour').style.display = 'none';
      document.getElementById('screenFive').style.display = 'none';
      document.getElementById('screenSix').style.display = 'none';
      document.getElementById('menuNav').style.display = 'none';
    }
  });
};

function signUp() {
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('inputPassword').value;
  if (userPassword.length <= 8) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        console.log("Usuario registrado");
      })
      .catch((error) => {
        console.log("Error de firebase > " + error.code);
        console.log("Error de firebase, mensaje > " + error.message);
      });
  } else {
    alert('Excede los 8 números permitidos');
  }
}

function logIn() {
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('inputPassword').value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      console.log("Usuario con login exitoso");
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
}

function logOut() {
  firebase.auth().signOut()
    .then(() => {
      console.log("Ha cerrado sesión");
    })
    .catch();
}

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
  if (numberOfBip.value.length === 0 || numberOfBip.value.length > 8) {
    alert('Debe ingresar 8 números')
  } else {

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
}

  firebase.database().ref('infoBip')
    .limitToLast(10)
    .on('child_added', (newCard) => {
      cardOptions.innerHTML += `
      <p>${newCard.val().num}</p>
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