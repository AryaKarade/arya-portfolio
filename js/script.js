/* =====================================================
   PORTFOLIO WEBSITE JAVASCRIPT
   Arya Mahendra Karade
===================================================== */
// =====================================================
// MOBILE NAVBAR TOGGLE
// =====================================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}

// Close mobile menu after clicking link
document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});

// =====================================================
// ACTIVE NAVBAR LINK ON SCROLL
// =====================================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if(
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");

        }
    });

    navItems.forEach(link=>{

        link.classList.remove("active");



        if(

            link.getAttribute("href") === "#" + current

        ){

            link.classList.add("active");

        }


    });


});








// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================


const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-box, .timeline-item, .service-card"
);



function revealOnScroll(){



    revealElements.forEach(element=>{


        const elementTop =
        element.getBoundingClientRect().top;



        const revealPoint = 120;



        if(elementTop < window.innerHeight - revealPoint){



            element.classList.add("show");


        }



    });



}



window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();








// =====================================================
// SCROLL PROGRESS BAR
// =====================================================


const progressBar =
document.getElementById("progress-bar");



window.addEventListener("scroll",()=>{


    if(progressBar){


        let scrollTop =
        document.documentElement.scrollTop;



        let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;



        let progress =
        (scrollTop / scrollHeight) * 100;



        progressBar.style.width =
        progress + "%";


    }


});








// =====================================================
// BACK TO TOP BUTTON
// =====================================================


const backToTop =
document.getElementById("backToTop");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        if(backToTop)

        backToTop.classList.add("show");


    }

    else{


        if(backToTop)

        backToTop.classList.remove("show");


    }



});





if(backToTop){


    backToTop.addEventListener(
        "click",
        ()=>{


            window.scrollTo({


                top:0,


                behavior:"smooth"


            });


        }

    );


}








// =====================================================
// CONTACT FORM VALIDATION
// =====================================================


const contactForm =
document.getElementById("contact-form");




if(contactForm){


contactForm.addEventListener(
"submit",
(e)=>{


    e.preventDefault();



    const inputs =
    contactForm.querySelectorAll(
        "input, textarea"
    );



    let valid = true;



    inputs.forEach(input=>{


        if(input.value.trim()===""){


            valid=false;


            input.style.borderColor="red";


        }

        else{


            input.style.borderColor="";


        }



    });





    if(valid){


        alert(
        "Thank you! Your message has been sent successfully."
        );



        contactForm.reset();



    }

    else{


        alert(
        "Please fill all required fields."
        );


    }





});

}








// =====================================================
// IMAGE LAZY LOADING
// =====================================================


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.loading="lazy";


});








// =====================================================
// CURRENT YEAR AUTOMATIC UPDATE
// =====================================================


const year =
document.querySelector(".copyright");



if(year){


    const currentYear =
    new Date().getFullYear();



    year.innerHTML =
    `© ${currentYear} Arya Mahendra Karade.
    All Rights Reserved.`;


}
