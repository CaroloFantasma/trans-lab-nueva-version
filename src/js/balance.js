//Fetch, muestra saldo de tarjeta bip ingresada o seleccionada

validateCard.addEventListener('click', () => {
  let bipNumber = cardNumberBip.value;
  let dataBip = dataBipContainer.value;
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipNumber || dataBip}`)
    .then(response => response.json())
    .then(data => {
      infoBip = data;
      balanceInfoBip = data.saldoTarjeta;
      dataContainer.innerHTML = `
     <p id="balanceCard">Saldo total</p>  <p class="totalBalance"> ${data['saldoTarjeta']}</p>
    `;
    })
    .catch(error => {
      console.error("No fue posible completar la solicitud.");
    });
});







