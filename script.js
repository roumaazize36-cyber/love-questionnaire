const questions = [
    "Azdine, ¿me quieres? ♡",
    "¿Me echas de menos cuando no estoy contigo? ♡",
    "¿Cuál fue tu primera impresión de mí?",
    "¿Qué es lo que más te gusta de mí?",
    "¿Cuál es tu recuerdo favorito conmigo?",
    "¿Te imaginas un futuro conmigo?",
    "¿Qué lugar te gustaría visitar conmigo?",
    "¿Qué cosa de mí nunca quieres que cambie?",
    "Si pudieras volver a vivir un momento conmigo, ¿cuál elegirías?",
    "Y la última... ¿me elegirías otra vez? ♡"
];

let questionNumber = 0;

const question = document.getElementById("question");
const progress = document.getElementById("progress");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", function() {

    questionNumber++;

    if (questionNumber < questions.length) {

        question.textContent = questions[questionNumber];

        progress.textContent =
            "Pregunta " + (questionNumber + 1) + " de " + questions.length;

    } else {

        question.innerHTML =
            "Gracias por responder, Azdine. ♡<br><br>" +
            "No importan solo tus respuestas...<br>" +
            "también quería recordarte lo especial que eres para mí. ♡<br><br>" +
            "Te quiero.";

        progress.textContent = "";

        yesButton.style.display = "none";
        noButton.style.display = "none";
    }
});


noButton.addEventListener("click", function() {

    const maxX = window.innerWidth - noButton.offsetWidth - 30;
    const maxY = window.innerHeight - noButton.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});