Fetch("https://opentdb.com/api.php?amount=10")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (let triviaQ = 0; triviaQ < data.results.length; triviaQ++) {
      createQuestion(data.results[triviaQ]);
    }
  })
  .catch(console.error);


function createQuestion(triviaQ) {
  const card = document.createElement("article");
  card.className = "card"

  const category = document.createElement("h2");
  category.textContent = triviaQ.category;

  const question = document.createElemeent("p");
  question.textContent = triviaQ.question;

  const answerButton = document.createElement("button");
  answerButton.textContent = "Show Answer";

  const correctAnswer = document.createElement("p");
  correctAnswer.className = "hidden"
  correctAnswer.textContent = triviaQ.correct_answer;

  answerButton.addEventListener("click", (event) => {
    event.preventDefault();
    correctAnswer.classList.remove("hidden");
  })

  card.append(
    category,
    question,
    answerButton,
    correctAnswer
  )
  document.querySelector("main").append(card);
}


{/* <article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article> */}