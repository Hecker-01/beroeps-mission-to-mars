function changeWebcam(location) {
  const webcamImage = document.getElementById("webcam-image");
  const images = {
    sport: "./assets/Images/sport.png",
    bibliotheek: "./assets/Images/bibliotheek.png",
    restaurant: "./assets/Images/restaurant.png",
  };
  webcamImage.src = images[location];
}
