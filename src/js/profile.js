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
      });
}