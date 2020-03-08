function setHigh() {
  var savedScores = JSON.parse(localStorage.getItem("highscores"));
  for (let i = 0; i < savedScores.length; i++) {
    var placeholdName = document.querySelector("#placeholdName");
    var placeholdScore = document.querySelector("#placeholdScore");
    var nameEntry = document.createElement("li");
    var scoreEntry = document.createElement("li");
    nameEntry.textContent = savedScores[i].nameSave;
    scoreEntry.textContent = savedScores[i].scoreSave;
    placeholdName.appendChild(nameEntry);
    placeholdScore.appendChild(scoreEntry);
  }
}
setHigh();
