/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
          0.3}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  }

  burger.addEventListener("click", toggleNativation);
  //    document.getElementById("main-page").style.marginTop = "289px";

  // reloading whole page ob phone
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
    } else {
      event.preventDefault();
      statusE.append("<div>&#9888 Email is not valid</div>");
    }

    if (subject.length <= 2) {
      event.preventDefault();
      statusS.append("<div>&#9888 Subject is not valid</div>");
    }
    if (message.length <= 10) {
      event.preventDefault();
      statusM.append(
        "<div>&#9888 Message needs to be at least 10 characters long</div>"
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


/***/ })
/******/ ]);