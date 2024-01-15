const sections = document.querySelectorAll(".section"); //Select sections.
const sectionBtns = document.querySelectorAll(".controls"); //Select buttons parent container.
const sectionBtn = document.querySelectorAll(".control") //Select individual buttons.
const allSections = document.querySelectorAll(".main-content"); //Select body.

function PageTransitions() {
    //Button click active class.
    for(let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener("click", function() { //"function" instead of arrow function "=>" because this keyword doesn't exist in "=>".
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += "active-btn" //this keyword.
        })
    }
};

PageTransitions();