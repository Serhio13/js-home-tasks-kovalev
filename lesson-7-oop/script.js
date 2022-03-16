function filmQuiz() {
  function question(question, answers, right) {
    this.question = question;
    this.answers = answers;
    this.right = right;
  }

  question.prototype.showQuestion = function() {
    console.log(this.question);
    for (i = 0; i < this.answers.length; i++) {
      console.log(i + 1 + ': ' + this.answers[i]);
    }
  };

  question.prototype.checkAnswer = function(answer) {
    if (answer === this.right) {
        console.log('Right answer!');
    } else {
        console.log('Wrong answer!');
    }
  };

  var firstQuestion = new question('For which film did Leonardo DiCaprio win an Oscar?', ['Shutter Island', 'The Revenant', 'Catch Me If You Can'], 2);
  var secondQuestion = new question('Who starred in the main role in the film The Matrix?', ['Keanu Reeves', 'Tom Hardy', 'Jason Statham'], 1);
  var thirdQuestion = new question('The highest-grossing film in the world', ['Skyfall', 'Jurassic Park', 'Avatar'], 3);

  var questionList = [firstQuestion, secondQuestion, thirdQuestion];
  var random = Math.floor(Math.random() * questionList.length);
  questionList[random].showQuestion();
  var answer = +prompt('Choose the right answer');
  questionList[random].checkAnswer(answer);
}

filmQuiz();