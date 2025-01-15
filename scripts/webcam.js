
function changeWebcam(location) {
  const webcamImage = document.getElementById('webcam-image');
  const images = {
    sport: './assets/Images/sport.jpg',
    bibliotheek: './assets/Images/bibliotheek.jpg',
    restaurant: './assets/Images/restaurant.jpg',
    background: './assets/Images/background.png'
  };
  webcamImage.src = images[location];
}