let audio_success = new Audio("./assets/sounds/success.mp3");
let audio_wrong = new Audio("./assets/sounds/wrong.mp3");
let audio_cheer = new Audio("./assets/sounds/cheer.mp3");

function renderQuestion() {
  let myQuizCardRef = document.getElementById("card__body");
  myQuizCardRef.innerHTML = "";

  for (let indexQuiz = 0; indexQuiz < quiz.length; indexQuiz++) {
    myQuizCardRef.innerHTML += getMyQuestion(indexQuiz, quiz.length, quiz[indexQuiz]);

    document.getElementById("header-img").src = "./assets/img/Group 5.png";
    progressBarFunc(indexQuiz, quiz.length);
    enableButtons(indexQuiz);
    break;
  }
}

function nextQuestion(oldIndexQuiz) {
  let myQuizCardRef = document.getElementById("card__body");
  myQuizCardRef.innerHTML = "";
  let totalSum = 0;

  for (let indexQuiz = oldIndexQuiz + 1; indexQuiz < quiz.length + 1; indexQuiz++) {
    if (indexQuiz == quiz.length) {
      shwoEndscreen(myQuizCardRef, quiz.length, indexQuiz, totalSum);
      break;
    }
    nextQuestionTrue(myQuizCardRef, indexQuiz);
    break;
  }
}

function checkAnswer(currentIndexQuiz, number) {
  let myAnswerRef = document.getElementById("optioin" + currentIndexQuiz + number);

  for (let indexQuiz = currentIndexQuiz; indexQuiz < quiz.length; indexQuiz++) {
    if (number == quiz[indexQuiz].answer) {
      answerRight(myAnswerRef, currentIndexQuiz);
    }
    answerWrong(indexQuiz, myAnswerRef, currentIndexQuiz);
    break;
  }
}

function disableButtons(currentIndexQuiz) {
  document.getElementById("button" + currentIndexQuiz + 1).disabled = true;
  document.getElementById("button" + currentIndexQuiz + 2).disabled = true;
  document.getElementById("button" + currentIndexQuiz + 3).disabled = true;
  document.getElementById("button" + currentIndexQuiz + 4).disabled = true;
}

function enableButtons(currentIndexQuiz) {
  document.getElementById("button" + currentIndexQuiz + 1).disabled = false;
  document.getElementById("button" + currentIndexQuiz + 2).disabled = false;
  document.getElementById("button" + currentIndexQuiz + 3).disabled = false;
  document.getElementById("button" + currentIndexQuiz + 4).disabled = false;
}

function progressBarFunc(indexQuiz, length) {
  let progressRef = document.getElementById("progress-bar");
  progressRef.innerHTML = "";

  progressRef.innerHTML = Math.round(((indexQuiz + 1) / length) * 100) + "%";
  progressRef.style.width = Math.round(((indexQuiz + 1) / length) * 100) + "%";
}

function shwoEndscreen(myQuizCardRef, length, indexQuiz, totalSum) {
  score.push(0);

  for (let indexScore = 0; indexScore < score.length; indexScore++) {
    totalSum += parseInt(score[indexScore]);
  }
  myQuizCardRef.innerHTML += getMyResult(totalSum, length, indexQuiz);
  audio_cheer.play();
  document.getElementById("header-img").src = "./assets/img/ai-generated-8724371_1280.jpg";
}

function answerRight(myAnswerRef, currentIndexQuiz) {
  myAnswerRef.style.backgroundColor = "green";
  score.push(1);
  audio_success.play();
  disableButtons(currentIndexQuiz);
}

function answerWrong(indexQuiz, myAnswerRef, currentIndexQuiz) {
  let rightAnswer = quiz[indexQuiz].answer;
  myAnswerRef.style.backgroundColor = "red";
  disableButtons(currentIndexQuiz);
  score.push(0);
  audio_wrong.play();
  document.getElementById("optioin" + currentIndexQuiz + rightAnswer).style.backgroundColor = "green";
}

function nextQuestionTrue(myQuizCardRef, indexQuiz) {
  myQuizCardRef.innerHTML += getMyQuestion(indexQuiz, quiz.length, quiz[indexQuiz]);
  progressBarFunc(indexQuiz, quiz.length);
  enableButtons(indexQuiz, quiz.length);
}
