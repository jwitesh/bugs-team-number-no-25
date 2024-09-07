function submitQuiz() {
    let score = 0;
    
    // History Questions
    if (document.querySelector('input[name="q1"]:checked')?.value === "A") {
        score++;
    }
    if (document.querySelector('input[name="q2"]:checked')?.value === "B") {
        score++;
    }
    if (document.querySelector('input[name="q3"]:checked')?.value === "A") {
        score++;
    }

    // Civics Questions
    if (document.querySelector('input[name="q4"]:checked')?.value === "A") {
        score++;
    }
    if (document.querySelector('input[name="q6"]:checked')?.value === "B") {
        score++;
    }

    // Economics Questions
    if (document.querySelector('input[name="q7"]:checked')?.value === "D") {
        score++;
    }
    if (document.querySelector('input[name="q8"]:checked')?.value === "A") {
        score++;

    }

    // Display score
    alert("Your score is: " + score + "/7");
}