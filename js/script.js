// Toggle class active for the navigation menu
const navbarNav = document.querySelector(".navbar-nav");

// When menu button is clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// JavaScript for the carousel
let currentIndex = 0;

const slides = document.querySelectorAll(".carousel .tayar");
const totalSlides = slides.length;

function showSlide(index) {
  const offset = -index * 100; // Assuming each slide takes full width
  document.querySelector(
    ".carousel-track"
  ).style.transform = `translateX(${offset}%)`;
}

document
  .querySelector(".carousel-button.prev")
  .addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    showSlide(currentIndex);
  });

document
  .querySelector(".carousel-button.next")
  .addEventListener("click", function () {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

showSlide(currentIndex);
// Hide all tab content
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("tablinks");

// Remove "active" class from all buttons
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab and add "active" class to the button that opened it
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//contact us
function sendWhatsAppMessage() {
  // Get form input values
  let mobileNumber = document.getElementById("mobileNumber").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let textInput = document.getElementById("message").value;

  // Construct WhatsApp URL with form inputs
  let url =
    `https://wa.me/${0138337295}?text=` +
    encodeURIComponent("Name: " + name) +
    "%0a" +
    encodeURIComponent("Email ID: " + email) +
    "%0a" +
    encodeURIComponent("Message: " + textInput);

  // Open WhatsApp chat in a new tab
  window.open(url, "_blank").focus();
}
