const scriptURL = "https://script.google.com/macros/s/AKfycbz5m4o-lZifiaypyi0xXEWZ7wkq72uC7-H7Jlu-CzxO8iEdqYv5QywNoZVbk834af6d/exec";

const questions = [
    "¿Cuál fue tu primera impresión de mí, y ha cambiado con el tiempo?",
    "¿Cuándo te diste cuenta de que yo era especial para ti?",
    "¿Qué cosa de mí siempre consigue hacerte sonreír?",
    "¿Cuál es tu recuerdo favorito de nosotros, y por qué?",
    "¿Qué crees que hace diferente nuestra relación?",
    "¿Qué experiencia te gustaría vivir conmigo algún día?",
    "Cuando imaginas nuestro futuro, ¿qué es lo primero que imaginas?",
    "¿Qué cosa de nuestra relación nunca quieres que perdamos?",
    "Si pudieras volver a vivir un momento conmigo, ¿cuál elegirías?",
    "Si tuvieras que elegirme de nuevo, ¿qué te haría elegirme otra vez? ♡"
];

let questionNumber = 0;
const answers = [];

const question = document.getElementById("question");
const progress = document.getElementById("progress");
const answer = document.getElementById("answer");
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", async function () {
    const currentAnswer = answer.value.trim();

    if (!currentAnswer) {
        answer.placeholder = "Primero escribe tu respuesta ♡";
        answer.focus();
        return;
    }

    answers.push(currentAnswer);
    questionNumber++;

    if (questionNumber < questions.length) {
        question.textContent = questions[questionNumber];
        progress.textContent =
            "Pregunta " + (questionNumber + 1) + " de " + questions.length;

        answer.value = "";
        answer.placeholder = "Escribe tu respuesta aquí...";
        answer.focus();
        return;
    }

    question.textContent = "Enviando tus respuestas, Azdine... ♡";
    progress.textContent = "";
    answer.style.display = "none";
    nextButton.disabled = true;

    const data = {};
    answers.forEach((value, index) => {
        data["q" + (index + 1)] = value;
    });

    try {
        await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        question.innerHTML =
            "Gracias por responder, Azdine. ♡<br><br>" +
            "Tus respuestas han sido enviadas.<br><br>" +
            "También quería recordarte lo especial que eres para mí. ♡<br><br>" +
            "Te quiero.";

    } catch (error) {
        question.textContent =
            "No se pudieron enviar las respuestas. Por favor, avisa a quien te envió este cuestionario.";
        answer.style.display = "block";
        nextButton.disabled = false;
    }
});
