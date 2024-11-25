const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openai.com/v1/completions";

const button = document.getElementById("generate-btn");
const questionContainer = document.getElementById("question");

button.addEventListener("click", async () => {
    questionContainer.textContent = "Generating a question...";
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: "Generate a creative, thought-provoking question for getting to know someone better and building a closer relationship.",
                max_tokens: 50,
                temperature: 0.7,
            }),
        });

        const data = await response.json();
        const question = data.choices[0].text.trim();
        questionContainer.textContent = question;
    } catch (error) {
        questionContainer.textContent = "Sorry, there was an error generating the question.";
        console.error(error);
    }
});
