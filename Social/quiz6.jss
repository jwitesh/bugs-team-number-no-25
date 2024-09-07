const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        correct: 1
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Indira Gandhi"],
        correct: 0
    },
    {
        question: "Which river is known as the 'Lifeline of Egypt'?",
        answers: ["Ganges", "Amazon", "Nile", "Danube"],
        correct: 2
    },
    {
        question: "Which form of government is practiced in India?",
        answers: ["Monarchy", "Dictatorship", "Democracy", "Oligarchy"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

function startQuiz() {
    document.querySelector('.quiz-container').style.display = 'block';
    showQuestion();
    totalQuestionsElement.textContent = questions.length;
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
    });
    nextButton.style.display = 'none';
}

function selectAnswer(index) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (index === correctIndex) {
        score++;
        answerButtons[index].style.backgroundColor = 'green';
    } else {
        answerButtons[index].style.backgroundColor = 'red';
        answerButtons[correctIndex].style.backgroundColor = 'green';
    }
    answerButtons.forEach(button => button.disabled = true);
    nextButton.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        resetState();
        showQuestion();
    } else {
        showResult();
    }
}

function resetState() {
    answerButtons.forEach(button => {
        button.style.backgroundColor = '#4CAF50';
        button.disabled = false;
    });
    nextButton.style.display = 'none';
}

function showResult() {
    document.querySelector('.quiz-container').style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = score;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.style.display = 'none';
    startQuiz();
}

startQuiz();