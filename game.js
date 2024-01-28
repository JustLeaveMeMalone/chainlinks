let words = []; // Array to store the words
let currentWordIndex = 0; // Index of the word player is currently guessing
let incorrectGuesses = 0;
let gameUrls = []; // Array to store generated game URLs

function clearWords() {
    // Clear all text boxes
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`word${i}`).value = "";
    }
}

function generateRandomUrl() {
    // Generate a random subpage URL
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomUrl = '';

    for (let i = 0; i < 8; i++) {
        randomUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomUrl;
}

function generateGame() {
    // Get words from input boxes
    for (let i = 1; i <= 6; i++) {
        let word = document.getElementById(`word${i}`).value.trim();
        if (word === "") {
            alert("Please fill in all word boxes.");
            return;
        }
        words.push(word);
    }

    // Generate a random subpage URL
    let randomUrl = generateRandomUrl();

    // Simulate storing the URL in a database (add it to the array)
    gameUrls.push(randomUrl);

    // Redirect to the newly created game page
    window.location.href = `index.html#${randomUrl}`;
}

function generateGame() {
    // Get words from input boxes
    for (let i = 1; i <= 6; i++) {
        let word = document.getElementById(`word${i}`).value.trim();
        if (word === "") {
            alert("Please fill in all word boxes.");
            return;
        }
        words.push(word);
    }

    // Display first and last word for player
    document.getElementById("display-words").textContent = `${words[0]} ... ${words[5]}`;

    // Show player section and hide creator section
    document.getElementById("creator-section").style.display = "none";
    document.getElementById("player-section").style.display = "block";
}

function checkGuess() {
    // Get the guessed word
    let guess = document.getElementById(`guess${currentWordIndex + 1}`).value.trim().toLowerCase();

    // Check if the guess is correct
    if (guess === words[currentWordIndex]) {
        document.getElementById(`guess${currentWordIndex + 1}`).value = words[currentWordIndex];
        document.getElementById(`guess${currentWordIndex + 1}`).style.backgroundColor = "green";
        currentWordIndex++;

        // Check if all words are guessed
        if (currentWordIndex === 4) {
            document.getElementById("result-message").textContent = "You won!";
        }
    } else {
        document.getElementById(`guess${currentWordIndex + 1}`).value = "";
        document.getElementById("result-message").textContent = "Incorrect guess!";
        incorrectGuesses++;
    }
}

// Add more features and styling as needed
