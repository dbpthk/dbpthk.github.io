//contact form validation 
window.onload = function() {
    document.getElementById('clear').reset();
    }
  $(document).ready(function(){
      $('.submit').click(function(event){
          var name = $('.name').val();
          var subject = $('.subject').val();
          var email = $('.email').val();
          var message = $('.message').val();

          var statusN = $('.statusN')
          var statusS = $('.statusS')
          var statusE = $('.statusE')
          var statusM = $('.statusM')
          var status = $('.status')
          statusN.empty();
          statusE.empty();
          statusS.empty();
          statusM.empty();

          if(name.length < 5){
            event.preventDefault()
            statusN.append('<div>&#9888 Name needs to be at least 5 characters long</div>')
          }

          if(email.length > 5 && email.includes('@') && email.includes('.')){
              console.log('Email is valid');
          }else{
            event.preventDefault()
            statusE.append('<div>Email is not valid</div>')
          }

          if(subject.length <= 2){
            event.preventDefault()
            statusS.append('<div>Subject is not valid</div>')
          }
          if(message.length <= 10){
            event.preventDefault()
            statusM.append('<div>A message needs to be at least 10 characters long</div>')
          }

      })
  });

//navigation activity
$(document).on('click', 'nav ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () =>{
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
        });

}
const app = ()=> {
    navSlide();
}
app();

import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }

});