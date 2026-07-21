/* =====================================================
   DARK MODE FUNCTIONALITY
   Arya Mahendra Karade Portfolio
===================================================== */

// Select Theme Button

const themeBtn = document.getElementById("theme-toggle");

// Load saved theme when website opens

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    if(themeBtn){

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }
}

// Toggle Dark Mode

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        const isDark =
        document.body.classList.contains(
            "dark-mode"
        );

        if(isDark){

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        }

        else{

            localStorage.setItem(
                "theme",
                "light"
            );

            themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        }

    });
}
