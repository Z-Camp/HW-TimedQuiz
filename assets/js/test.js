// questions as objects
var questionsArray = [
    {
        question: "Question 1",
        answer1: "q1a1",
        answer2: "q1a2",
        answer3: "q1a3",
        answer4: "q1a4",
        correct: "3"
    }
    {
        question: "Question 2",
        answer1: "q2a1",
        answer2: "q2a2",
        answer3: "q2a3",
        answer4: "q2a4",
        correct: "3"
    }
    {
        question: "Question 3",
        answer1: "q3a1",
        answer2: "q3a2",
        answer3: "q3a3",
        answer4: "q3a4",
        correct: "3"
    }
    {
        question: "Question 4",
        answer1: "q4a1",
        answer2: "q4a2",
        answer3: "q4a3",
        answer4: "q4a4",
        correct: "3"
    }
    {
        question: "Question 5",
        answer1: "q5a1",
        answer2: "q5a2",
        answer3: "q5a3",
        answer4: "q5a4",
        correct: "3"
    }
]
// questions and answers as individual arrays
var questionsArray = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
  ];
  var answer1Array = [
    "Answer1-1",
    "Answer1-2",
    "Answer1-3",
    "Answer1-4",
    "Answer1-5"
  ];
  var answer2Array = [
    "Answer2-1",
    "Answer2-2",
    "Answer2-3",
    "Answer2-4",
    "Answer2-5"
  ];
  var answer3Array = [
    "Answer3-1",
    "Answer3-2",
    "Answer3-3",
    "Answer3-4",
    "Answer3-5"
  ];
  var answer4Array = [
    "Answer4-1",
    "Answer4-2",
    "Answer4-3",
    "Answer4-4",
    "Answer4-5"
  ]

  var answerButtons = document.querySelectorAll(".answer");
// answerButtons.addEventListener("click", function(){
//     answerSelected = this.getAttribute("answer")
//     if (answerSelected = correctAnswer) {
//         score = score + 25
//         displayScore()
//     }
//     else{
//         alert("wrong")
//     }
// })