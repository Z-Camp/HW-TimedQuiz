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
    correct: "3"
  },
  {
    question: "Question 4",
    answer1: "q4a1",
    answer2: "q4a2",
    answer3: "q4a3",
    answer4: "q4a4",
    correct: "3"
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

var questionDiv = document.getElementById("questionDiv");
var ans1Div = document.getElementById("ans1Div");
var ans2Div = document.getElementById("ans2Div");
var ans3Div = document.getElementById("ans3Div");
var ans4Div = document.getElementById("ans4Div");
var ansDivArray = [ans1Div, ans2Div, ans3Div, ans4Div]
var startBtn = document.getElementById("startBtn");
var questionNumber = 0;
var score = 0;
var correctAnswer = questionsArray[questionNumber].correct;
var endGame = document.querySelector("#endGame")
var scoreDisp = document.querySelector("#scoreDisp")

// resets values of buttons with answers and pulls correct answer
function setQuestions() {
    // if loop checks for end game scenarios
  if (questionNumber === questionsArray.length) {
        document.getElementById("count").innerHTML = "Done";
        count = 0
        endGame()
        return
    }
  questionDiv.textContent = questionsArray[questionNumber].question;
  ans1Div.textContent = questionsArray[questionNumber].answer1;
  ans2Div.textContent = questionsArray[questionNumber].answer2;
  ans3Div.textContent = questionsArray[questionNumber].answer3;
  ans4Div.textContent = questionsArray[questionNumber].answer4;
  correctAnswer = questionsArray[questionNumber].correct;
  
}

function endGame(){
    scoreDisp.textContent = "Score: " + score
    endGame.removeAttribute("style")
    disbleAnswers()
}
 
// used by endGame loop to disable buttons once game is done
function disbleAnswers(){
    ansDivArray.forEach(function(div) {
        div.setAttribute("disabled", true)
    });
    ansDivArray.forEach(function(div){
        div.classList.add("disabled");
    })
}

// timer tracks time fo
var count = 60;
function timer() {
  var interval = setInterval(function() {
    document.getElementById("count").innerHTML = count;
    count--;
    if (count <= 0) {
      clearInterval(interval);
      document.getElementById("count").innerHTML = "Done";
      endGame()
    }
  }, 1000);
}
function displayScore() {
  startBtn.textContent = "Score: " + score;
}
startBtn.addEventListener("click", function() {
  startBtn.classList.add("disabled");
  setQuestions();
  timer();
  displayScore();
});

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

// if (questionNumber > questionsArray.length - 1 || count <= 0) {
//     document.querySelector("#endGame").classList.remove("invisible")
// }