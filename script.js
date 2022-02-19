// Magic 8 ball project - David Stobbe!

// Variables for HTML elements
let question = document.getElementById("question");
let magic8Ball = document.getElementById("8ball");
let response = document.getElementById("response");

// Event listener
magic8Ball.addEventListener("click", respond)
// Function
function respond() {
    if (question.value !== "") {
        if (question.value === "Does a magic 8 ball actually work?") {
            response.innerHTML = "How dare you doubt me?";
        } else if (question.value === "Is JavaScript awesome?") {
            response.innerHTML = "Of course!";
        } else if (question.value === "Is David an expert coder?") {
            response.innerHTML = "Evidence points to yes.";
        } else {
            let random = Math.random()
            if (random <= 0.2) {
                response.innerHTML = "Without a doubt.";
            } else if (random <= 0.4) {
                response.innerHTML = "As I see it, yes.";
            } else if (random <= 0.6) {
                response.innerHTML = "Concentrate and ask again.";
            } else if (random <= 0.8) {
                response.innerHTML = "Don't count on it.";
            } else {
                response.innerHTML = "Outlook not so good.";
            }
        }
    } else {
        response.innerHTML = "please ask a question..";
    }
}
