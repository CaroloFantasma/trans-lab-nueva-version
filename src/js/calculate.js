
btnBalance.addEventListener('click', () => {
  let bipNumber = cardNumberBip.value;
fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipNumber}`)
  .then(response => response.json())
  .then(data => {
    infoBip = data;
    console.log(data);
    dataBipContainer.innerHTML = `
    <p>Saldo total: ${data['saldoTarjeta']}</p>
    <p>Fecha saldo: ${data['fechaSaldo']}</p>
    `
  })
  .catch(error => {
    console.error("No fue posible completar la solicitud.");
  });
});