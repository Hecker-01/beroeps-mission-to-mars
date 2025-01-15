const urlParams = new URLSearchParams(window.location.search);
const item = urlParams.get("item");

if (item === "tour") {
  document.getElementById("tourSection").style.display = "block";
  document.getElementById("sub-total").innerHTML = "€19,99";
} else if (item === "combo") {
  document.getElementById("comboSection").style.display = "block";
  document.getElementById("sub-total").innerHTML =
    "<s>€29,99</s> €26,98 (inclusief verzendkosten)";
} else if (item === "album") {
  document.getElementById("albumSection").style.display = "block";
  document.getElementById("sub-total").innerHTML =
    "€9,99 (inclusief verzendkosten)";
} else {
  document.getElementById("errorSection").style.display = "block";
  document.getElementById("form").style.display = "none";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const room = document.getElementById("room").value;

  document.getElementById("form").style.display = "none";
  document.getElementById("response").style.display = "block";
  document.getElementById("tourSection").style.display = "none";
  document.getElementById("comboSection").style.display = "none";
  document.getElementById("albumSection").style.display = "none";
  document.getElementById("response").innerHTML = `
      <h2>Thank you for your order, ${name}!</h2>
      <p>Your order will be delivered to:</p>
      <p>Room number ${room}</p>
      <p>Expect us in 15 to 30 minutes!</p>
    `;
});
