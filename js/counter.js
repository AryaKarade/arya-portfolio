// Animated Counter Script 📊

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const speed = 200; // Lower = Faster animation

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / speed;


            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };


        updateCounter();

    });

});
