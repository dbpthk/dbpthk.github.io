//navigation activity
$(document).on("click", "nav ul li", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  function toggleNativation() {
    if (window.getComputedStyle(burger).display !== "block") return;

    //toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  }

  burger.addEventListener("click", toggleNativation);

  //this one (reloading whole page ob phone)
  Array.from(navLinks).forEach(link =>
    link.addEventListener("click", toggleNativation)
  );
};

const app = () => {
  navSlide();
};
app();

//contact page contact form validation

var name = null;
var subject = null;
var email = null;
var message = null;

window.onload = function() {
  document.getElementById("clear").reset();
};
$(document).ready(function() {
  $(".submit").click(function(event) {
    var name = $(".name").val();
    var subject = $(".subject").val();
    var email = $(".email").val();
    var message = $(".message").val();

    var statusN = $(".statusN");
    var statusS = $(".statusS");
    var statusE = $(".statusE");
    var statusM = $(".statusM");
    var status = $(".status");
    statusN.empty();
    statusE.empty();
    statusS.empty();
    statusM.empty();

    if (name.length < 5) {
      event.preventDefault();
      statusN.append(
        "<div>&#9888 Name needs to be at least 5 characters long</div>"
      );
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      console.log("Email is valid");
    } else {
      event.preventDefault();
      statusE.append("<div>Email is not valid</div>");
    }

    if (subject.length <= 2) {
      event.preventDefault();
      statusS.append("<div>Subject is not valid</div>");
    }
    if (message.length <= 10) {
      event.preventDefault();
      statusM.append(
        "<div>A message needs to be at least 10 characters long</div>"
      );
    }
  });
});

//escape key function to close
$(document).keyup(function(e) {
  if (e.key === "Escape") {
    // escape key maps to keycode `27`
    document.querySelector(".modal").style.display = "none";
  }
});

// Open the Modal
window.openModal = function openModal() {
  document.getElementById("myModal").style.display = "block";
};

// Close the Modal
window.closeModal = function closeModal() {
  document.getElementById("myModal").style.display = "none";
};

window.showSlides = function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
window.currentSlide = function currentSlide(n) {
  showSlides((slideIndex = n));
  $(".thumbnail img").addClass(".active");
};
