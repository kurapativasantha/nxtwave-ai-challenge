// FAQ


const questions = document.querySelectorAll(".faq-question");

questions.forEach((question)=>{

question.addEventListener("click",()=>{

const answer=question.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});


// Countdown Timer

const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 7);
countdownDate.setHours(0, 0, 0, 0); // normalize time

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate.getTime() - now;

    const days = Math.ceil(distance / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerHTML = days;
}

updateCountdown(); // run immediately
setInterval(updateCountdown, 1000);