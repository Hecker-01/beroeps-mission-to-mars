const urlParams = new URLSearchParams(window.location.search);
const order = urlParams.get("order");

switch (order) {
  case "ontbijt-diner":
    document.getElementById("ontbijt-diner").style.display = "block";
    break;
  case "snacks":
    document.getElementById("snacks").style.display = "block";
    break;
  case "drinken":
    document.getElementById("drinken").style.display = "block";
    break;
  case "populair":
    document.getElementById("populair").style.display = "block";
    break;
  default:
    document.getElementById("errorSection").style.display = "block";
    document.getElementById("form").style.display = "none";
    break;
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const room = document.getElementById("room").value;

  document.getElementById("form").style.display = "none";
  document.getElementById("response").style.display = "block";
  document.getElementById("ontbijt-diner").style.display = "none";
  document.getElementById("snacks").style.display = "none";
  document.getElementById("drinken").style.display = "none";
  document.getElementById("populair").style.display = "none";
  document.getElementById("response").innerHTML = `
      <h2>Bedankt voor uw order, ${name}!</h2>
      <p>Uw bestelling wordt zo snel mogelijk naar u toegebracht.</p>
      <p>Op kamer nummer: ${room}</p>
      <p>Verwacht ons in de komende 30 minuten.</p>
    `;
});
