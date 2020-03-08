// array of question objects with atributes for function to pull for population
var questionsArray = [
  {
    question: "Question 1",
    answer1: "q1a1",
    answer2: "q1a2",
    answer3: "q1a3",
    answer4: "q1a4",
    correct: "1"
  },
  {
    question: "Question 2",
    answer1: "q2a1",
    answer2: "q2a2",
    answer3: "q2a3",
    answer4: "q2a4",
    correct: "3"
  },
  {
    question: "Question 3",
    answer1: "q3a1",
    answer2: "q3a2",
    answer3: "q3a3",
    answer4: "q3a4",
    correct: "2"
  },
  {
    question: "Question 4",
    answer1: "q4a1",
    answer2: "q4a2",
    answer3: "q4a3",
    answer4: "q4a4",
    correct: "4"
  },
  {
    question: "Question 5",
    answer1: "q5a1",
    answer2: "q5a2",
    answer3: "q5a3",
    answer4: "q5a4",
    correct: "3"
  }
];
// variable declarations
var questionDiv = document.getElementById("questionDiv");
var ans1Div = document.getElementById("ans1Div");
var ans2Div = document.getElementById("ans2Div");
var ans3Div = document.getElementById("ans3Div");
var ans4Div = document.getElementById("ans4Div");
var ansDivArray = [ans1Div, ans2Div, ans3Div, ans4Div];
var startBtn = document.getElementById("startBtn");
var questionNumber = 0;
var score = 0;
var correctAnswer = questionsArray[questionNumber].correct;
var endGame = document.querySelector("#endGame");
var scoreDisp = document.querySelector("#scoreDisp");
var nameInput = document.querySelector("#nameInput");

// resets values of buttons with answers and pulls correct answer
function setQuestions() {
  // if loop checks for end game scenarios
  if (questionNumber === questionsArray.length) {
    document.getElementById("count").innerHTML = "Done";
    count = 0;
    scoreDisp.textContent = "Score: " + score;
    endGame.removeAttribute("style");
    disableAnswers();
    return;
  }
  questionDiv.textContent = questionsArray[questionNumber].question;
  ans1Div.textContent = questionsArray[questionNumber].answer1;
  ans2Div.textContent = questionsArray[questionNumber].answer2;
  ans3Div.textContent = questionsArray[questionNumber].answer3;
  ans4Div.textContent = questionsArray[questionNumber].answer4;
  correctAnswer = questionsArray[questionNumber].correct;
}

// used by endGame loop to disable buttons once game is done
function disableAnswers() {
  ansDivArray.forEach(function(div) {
    div.setAttribute("disabled", true);
  });
  ansDivArray.forEach(function(div) {
    div.classList.add("disabled");
  });
}

// timer tracks time fo
var count = 60;
function timer() {
  var interval = setInterval(function() {
    document.getElementById("count").innerHTML = count;
    count--;
    if (count <= -1) {
      clearInterval(interval);
      document.getElementById("count").innerHTML = "Done";
      scoreDisp.textContent = "Score: " + score;
      endGame.removeAttribute("style");
      disableAnswers();
    }
  }, 1000);
}

//function to pull final score and display at end of quiz 
function displayScore() {
  startBtn.textContent = "Score: " + score;
}

// click listener to start quiz
startBtn.addEventListener("click", function() {
  startBtn.classList.add("disabled");
  setQuestions();
  timer();
  displayScore();
  document.querySelector(".answerContain").removeAttribute("hidden")
});

// full page click listener for answer buttons
document.addEventListener(
  "click",
  function(e) {
    if (e.target.classList.contains("answer")) {
      var answerSelected = e.target.getAttribute("answer");
      if (answerSelected == correctAnswer) {
        score = score + 25;
        displayScore();
        questionNumber++;
        setQuestions();
      } else if (answerSelected != correctAnswer) {
        count = count - 10;
      }
    }
  },
  false
);

// Save score button sends score and name input to local storage
// Saves values to array then stringify to save to "highscores" item
document.querySelector("#saveBtn").addEventListener("click", function() {
  var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  var scoreEntry = {
    scoreSave: score,
    nameSave: nameInput.value
  }
  highScores.push(scoreEntry)
  highScores.sort((a, b) => b.scoreSave - a.scoreSave)
  localStorage.setItem("highscores", JSON.stringify(highScores))
  alert("score has been saved")
})
