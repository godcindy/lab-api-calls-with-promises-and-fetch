
function createQuestion(category, question, correct_answer) {

  const article = document.createElement("article");
  article.classList.add("card");

  const h2 = document.createElement("h2");
  h2.innerText = category;
  article.append(h2)

  const paragraph = document.createElement("p");
  paragraph.innerText = question;
  article.append(paragraph)


  const button = document.createElement("button");
  button.innerText = "Show Answer";
  button.addEventListener("click", (event) => {
    corrAnswer.classList.remove("hidden")
  })
  article.append(button)
  const corrAnswer = document.createElement("p")
  corrAnswer.classList.add("hidden")
  corrAnswer.textContent = correct_answer;
  article.append(corrAnswer)
  const main = document.querySelector("main")
  main.append(article)
}

const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://opentdb.com/api.php?amount=10")
    .then(function(response) {
      return response.json()
    })

    .then(function(data) {
      for (let result of data.results) {
        console.log(result)
        createQuestion(result.category, result.question, result.correct_answer)
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  });






  // const correctAnswer = document.createElement("p");
  // correctAnswer.innerText = "hidden"
  // correctAnswer.textContent = createQuestion.correct_answer;

  // answerButton.addEventListener("click", (event) => {
  //   event.preventDefault();
  //   correctAnswer.classList.remove("hidden");
  // })



  // const paragraph2 = document.createElement("p")
  // paragraph2.innerText = correct_answer
  // const paragraph2.classList.add("hidden")
  // article.append(paragraph2)




  // card.append(
  //   category,
  //   question,
  //   answerButton,
  //   correctAnswer
  // )
  // document.querySelector("main").append(card);
// }



// fetch(`https://opentdb.com/api.php?amount=10`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         for (let trivia = 0; trivia < data.results.length; trivia++) {
//             createTriviaQuestion(data.results[trivia]);
//         }
//     })
//     .catch(console.error)

// function createTriviaQuestion(trivia) {
//     const card = document.createElement("article");
//     card.className = "card"

//     const category = document.createElement("h2");
//     category.textContent = trivia.category;

//     const question = document.createElement("p");
//     question.textContent = trivia.question;

//     const ansButton = document.createElement("button");
//     ansButton.textContent = "Show Answer";

//     const correctAns = document.createElement("p");
//     correctAns.className = "hidden"
//     correctAns.textContent = trivia.correct_answer;

//     ansButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         correctAns.classList.remove("hidden");
//     })

//     card.append(
//         category,
//         question,
//         ansButton,
//         correctAns
//         )
