let questions = []; // Array to store the questions

const button = document.getElementById("generate-btn");
const questionContainer = document.getElementById("question");

// Fetch the questions from the questions.json file
fetch("questions.json")
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    // Store the questions in the questions array
    questions = data.questions;
  })
  .catch(error => {
    console.error("Error loading questions:", error);
    questionContainer.textContent = "Sorry, there was an error loading the questions.";
  });

button.addEventListener("click", () => {
  // Check if the questions have been loaded
  if (questions.length > 0) {
    // Select a random question from the array
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionContainer.textContent = randomQuestion;
  } else {
    questionContainer.textContent = "Questions are still loading. Please try again shortly.";
  }
});
