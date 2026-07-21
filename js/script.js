const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const roles = [
    "Computer Engineering Student",
    "Full Stack Web Developer",
    "PHP Developer",
    "React Learner",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (typing) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            typing = false;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            typing = true;

            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typeEffect, typing ? 100 : 50);
}

typeEffect();

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger on load
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    // Basic email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.textContent = "Enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

    form.reset(); // clear form
});
