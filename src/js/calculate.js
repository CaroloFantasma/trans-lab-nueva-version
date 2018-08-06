
btnBalance.addEventListener('click', () => {
  if (cardNumberBip.value.length === 8) {
  let bipNumber = cardNumberBip.value;
fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipNumber}`)
  .then(response => response.json())
  .then(data => {
    infoBip = data;
    console.log(data);
    dataBipContainer.innerHTML = `
    <p class="totalBalance">Saldo total: ${data['saldoTarjeta']}</p>
    <p class="totalBalance">Fecha saldo: ${data['fechaSaldo']}</p>
    `
  })

  .catch(error => {
    console.error("No fue posible completar la solicitud.");
  });
} else {
  alert('Debe ingresar 8 números');
}
});