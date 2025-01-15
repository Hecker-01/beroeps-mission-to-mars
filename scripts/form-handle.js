document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  handleForm();
});

function handleForm() {
  const naam = document.getElementById("naam").value;
  const email = document.getElementById("email").value;
  const bericht = document.getElementById("bericht").value;
  const response = document.getElementById("response");

  response.innerHTML = `Hey ${naam}!<br /> We hebben je bericht "${bericht}" ontvangen! We zullen je zo snel mogelijk een antwoord sturen.`;
  response.style.display = "block";
}
