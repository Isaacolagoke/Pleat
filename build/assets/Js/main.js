// Responsiveness

        var navItems = document.getElementById("navItems");
        var mobileNav = document.getElementById("mobileNav");
        var hamburger = document.getElementById("hamburger");


        function adjustNavbar() {
            screenWidth = parseInt(window.innerWidth);

            if (screenWidth < 541) {
                navItems.style.display = "none";
                hamburger.style.display = "flex";
            }
            else {
                navItems.style.display = "flex";
                hamburger.style.display = "none";
            }
        }

        adjustNavbar();

        window.addEventListener("resize", adjustNavbar);

        hamburger.addEventListener("click", function () {
            mobileNav.classList.toggle("left-[-70%]");
            hamburger.classList.toggle("fa-bars");
            hamburger.classList.toggle("fa-close");
        })
 



    

// form

const scriptURL = 'https://script.google.com/macros/s/AKfycbwHv-d1FSQddl-ClTD4WjPc4C8afmhToHksBN1CVDRCP8oTnjy4kJYxWy-bfdLKuLAi/exec'
const form = document.querySelector("#form")
const btn = document.querySelector("#submit")

var allInputs = document.querySelectorAll('input');
 

form.addEventListener('submit', e => {
 e.preventDefault()
  btn.disabled = true
  btn.innerHTML = "Adding your business..."

 let requestBody = new FormData(form)
 fetch(scriptURL, {method: 'POST', body: requestBody})

   .then(response => {
     btn.disabled = false 
     btn.innerHTML = "Register your Business"
     
     alert('Thank you for registering your business', response)})
     btn.disabled=false
     // clear all input
     allInputs.forEach(singleInput => singleInput.value = '')

   .catch(error => {
     btn.disabled = false
     btn.innerHTML = "Register your business"
 
   alert('Sorry, Please try again!', error.message)})
   btn.disabled = false

})
  