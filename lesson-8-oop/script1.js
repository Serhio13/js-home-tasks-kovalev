(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  var score = 0;

  Question.prototype.showScore = function () {
    console.log('score: ', score);
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans == this.correct) {
      console.log('Correct answer!');
      score++;
      nextQuestion();
    } else {
      console.log('Wrong answer. Try again :)');
      nextQuestion();
    }
  };

  var q1 = new Question('For which film did Leonardo DiCaprio win an Oscar?', ['Shutter Island', 'The Revenant', 'Catch Me If You Can'], 1);

  var q2 = new Question('Who starred in the main role in the film The Matrix?', ['Keanu Reeves', 'Tom Hardy', 'Jason Statham'], 0);

  var q3 = new Question('The highest-grossing film in the world', ['Skyfall', 'Jurassic Park', 'Avatar'], 2);

  var questions = [q1, q2, q3];

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');
    if (answer === 'exit') {
      questions[n].showScore();
      return;
    }
    questions[n].checkAnswer(answer);
  }

  nextQuestion();

})();