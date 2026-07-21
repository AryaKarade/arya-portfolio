/* =====================================================
   TYPING ANIMATION
   Arya Mahendra Karade Portfolio
===================================================== */



const typingText =
document.querySelector(".typing");



if(typingText){



    const words = [


        "Full Stack Developer",


        "React Developer",


        "PHP & Laravel Developer",


        "AI Enthusiast",


        "Problem Solver"


    ];



    let wordIndex = 0;


    let charIndex = 0;


    let isDeleting = false;



    const typingSpeed = 100;


    const deletingSpeed = 60;


    const delayTime = 1500;





    function typeEffect(){



        const currentWord =
        words[wordIndex];



        if(!isDeleting){



            typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );



            charIndex++;




            if(charIndex === currentWord.length){



                isDeleting = true;



                setTimeout(
                    typeEffect,
                    delayTime
                );


                return;


            }



        }

        else{



            typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );



            charIndex--;



            if(charIndex === 0){



                isDeleting = false;



                wordIndex++;



                if(wordIndex === words.length){


                    wordIndex = 0;

                }

            }

        }

        setTimeout(

            typeEffect,

            isDeleting
            ?
            deletingSpeed
            :
            typingSpeed

        );

    }

    typeEffect();

}
