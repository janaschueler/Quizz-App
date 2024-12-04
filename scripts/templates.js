function getMyQuestion(indexQuiz, length, quiz) {
  return `<p class="card-text" style="font-weight: bold">${quiz.question}</p>
          </div>
          <ul id="button${indexQuiz}" class="list-group list-group-flush">
              <li id="optioin${indexQuiz}1" class="list-group-item"><input id="button${indexQuiz}1" type="button" disabled onclick="checkAnswer(${indexQuiz}, 1)" style="margin-right: 8px" class="btn btn-light" value="A" >${quiz.option_1}</li>
              <li id="optioin${indexQuiz}2" class="list-group-item"><input id="button${indexQuiz}2" type="button" disabled onclick="checkAnswer(${indexQuiz}, 2)" style="margin-right: 8px" class="btn btn-light" value="B" >${quiz.option_2}</li>
              <li id="optioin${indexQuiz}3" class="list-group-item"><input id="button${indexQuiz}3" type="button" disabled onclick="checkAnswer(${indexQuiz}, 3)" style="margin-right: 8px" class="btn btn-light" value="C" >${quiz.option_3}</li>
              <li id="optioin${indexQuiz}4" class="list-group-item"><input id="button${indexQuiz}4" type="button" disabled onclick="checkAnswer(${indexQuiz}, 4)" style="margin-right: 8px" class="btn btn-light" value="D" >${quiz.option_4}</li>
          </ul>
          <div class="card-body card-footer">
         <div><b>${indexQuiz + 1}</b> von <b>${length} Fragen</b></div>
         <button onclick="nextQuestion(${indexQuiz})" class="btn btn-success">Nächste Frage</button>`;
}

function getMyResult(totalSum, length, indexQuiz) {
  return `<p class="card-text" style="font-weight: bold">Dein Ergebins</p>
          </div>
          <div class="score">
             <div style="margin-bottom: 16px;">Du hast <b>${totalSum}</b> von <b>${length}</b> richtige Antworten</div>
          <div class="card-body card-footer">
            <div><b>${indexQuiz}</b> von <b>${length}</b> Fragen</div>
         <button onclick="renderQuestion()" class="btn btn-success">Neues Quiz</button>`;
}
