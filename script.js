document.getElementById("quizButton").addEventListener("click", function() {
    window.location.href = "quiz.html"; // Change 'quiz.html' to the path of your quiz page
});

// Example of a simple quiz
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.createElement('div');
    const question = questions[currentQuestionIndex];
    
    questionElement.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, index) => `
            <button onclick="checkAnswer('${option}')">${option}</button>
        `).join('')}
    `;

    document.body.appendChild(questionElement);
}

function checkAnswer(selected) {
    const question = questions[currentQuestionIndex];
    if (selected === question.answer) {
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
    }
}

showQuestion();

