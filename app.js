const sections = document.querySelectorAll(".section"); //Select sections.
const sectionBtns = document.querySelectorAll(".controls"); //Select buttons parent container.
const sectionBtn = document.querySelectorAll(".control") //Select individual buttons.
const allSections = document.querySelector(".main-content"); //Select body; document.querySelector not document.querySelectorAll because addEventListener (used below) is a method for individual elements, not for collections. .

function PageTransitions() {
    //Button click active class.
    for(let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener("click", function () { //"function" instead of arrow function "=>" because this keyword doesn't exist in "=>".
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn" //this keyword.
        })
    }

    //Sections active.
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id; //Load the dataset for icon selected.
        if(id){
            //Remove selected from the other btns.
            sectionBtns.forEach((btn) => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            //Hide other sections.
            sections.forEach((section) => {
                section.classList.remove("active")
            })

            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })

    //Toggle theme.
    const themeBtn = document.querySelector(".theme-btn");

    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode")
    })
};

PageTransitions();