document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");
    const puzzleContainer = document.getElementById("puzzle-container");
    const puzzleQuestion = document.getElementById("puzzle-question");
    const puzzleAnswer = document.getElementById("puzzle-answer");
    const submitBtn = document.getElementById("submit-btn");
    const feedback = document.getElementById("feedback");
    const hintBtn = document.getElementById("hint-btn");
    const hint = document.getElementById("hint");
    const rewardContainer = document.getElementById("reward-container");
    const rewardMessage = document.getElementById("reward-message");
    const rewardImage = document.getElementById("reward-image");
    const motivationalQuote = document.getElementById("motivational-quote");
    const nextPuzzle = document.getElementById("next-puzzle");

    const puzzles = [
        { question: "What is 12 + 8 * 2?", answer: "28", hint: "Remember the order of operations!" },
        { question: "Solve for x: 2x + 5 = 15", answer: "5", hint: "Isolate x!" },
        { question: "A dragon has 3 heads. Each head breathes 2 times. How many total breaths?", answer: "6", hint: "Multiply the heads by breaths!" }
    ];

    let currentPuzzle = 0;
    let attempts = 0;

    startBtn.addEventListener("click", function() {
        document.querySelector(".container").classList.add("hidden");
        puzzleContainer.classList.remove("hidden");
        loadPuzzle();
    });

    function loadPuzzle() {
        puzzleQuestion.textContent = puzzles[currentPuzzle].question;
        puzzleAnswer.value = "";
        feedback.textContent = "";
        hint.textContent = "";
        hintBtn.classList.add("hidden");
        rewardContainer.classList.add("hidden");
    }

    submitBtn.addEventListener("click", function() {
        if (puzzleAnswer.value.trim() === puzzles[currentPuzzle].answer) {
            reward();
        } else {
            attempts++;
            feedback.textContent = "Try again!";
            if (attempts >= 5) {
                hintBtn.classList.remove("hidden");
            }
        }
    });

    hintBtn.addEventListener("click", function() {
        hint.textContent = puzzles[currentPuzzle].hint;
        hintBtn.classList.add("hidden");
    });

    function reward() {
        puzzleContainer.classList.add("hidden");
        rewardContainer.classList.remove("hidden");
        rewardMessage.textContent = "You solved it! Here’s your reward:";
        rewardImage.src = "https://via.placeholder.com/200"; // Replace with actual surprise images
        rewardImage.classList.remove("hidden");
        motivationalQuote.textContent = "You’re amazing, keep going!";
    }

    nextPuzzle.addEventListener("click", function() {
        currentPuzzle++;
        if (currentPuzzle < puzzles.length) {
            attempts = 0;
            puzzleContainer.classList.remove("hidden");
            rewardContainer.classList.add("hidden");
            loadPuzzle();
        } else {
            rewardMessage.textContent = "Congratulations! You've completed all puzzles!";
            nextPuzzle.classList.add("hidden");
        }
    });
});
