const faqbodys = document.querySelectorAll(".faq-body")

faqbodys.forEach((faqbody)=>{
    faqbody.addEventListener("click", ()=>{
        if(faqbody.classList.contains("active")){
            faqbody.classList.remove("active")
        }
    else{
        faqbody.classList.add("active")
    }
    })
}

)

//------------------------slider---------------------------
const sliderMain = document.querySelector(".slider-main");
const sliders = document.querySelector(".sliderbody");
const sliderBtns = document.querySelectorAll(".slider-btn");

let scrollPerClick = sliderMain.offsetWidth; // Scrolls one slider-main width
let scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: Math.max(0, (scrollAmount -= scrollPerClick)),
        behavior: "smooth"
    });
}

function sliderScrollRight() {
    sliders.scrollTo({
        top: 0,
        left: Math.min(sliders.scrollWidth - sliders.clientWidth, (scrollAmount += scrollPerClick)),
        behavior: "smooth"
    });
}
