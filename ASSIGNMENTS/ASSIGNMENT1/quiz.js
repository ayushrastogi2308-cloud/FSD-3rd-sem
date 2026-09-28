const questions = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'High Text Machine Language'],
    answer: 'Hyper Text Markup Language'
  },
  {
    question: 'What is CSS used for?',
    options: ['To style web pages', 'To store data', 'To write server code'],
    answer: 'To style web pages'
  },
  {
    question: 'Which tag adds JavaScript to a web page?',
    options: ['<script>', '<style>', '<link>'],
    answer: '<script>'
  }
];

let questionNumber = 0;
let score = 0;

function startQuiz() {
  const name = document.getElementById('studentName').value.trim();

  if (name === '') {
    alert('Please enter your name');
    return;
  }

  sessionStorage.setItem('studentName', name);
  window.location.href = 'quizpage.html';
}

function highlightButton(button) {
  button.style.backgroundColor = '#b9d6ff';
}

function showQuiz() {
  document.getElementById('studentInfo').textContent =
    'Student: ' + (sessionStorage.getItem('studentName') || 'Student');
  showQuestion();
}

function showQuestion() {
  const question = questions[questionNumber];
  let questionHtml = '<div class="question-box"><h2>Question ' + (questionNumber + 1) + '</h2>';
  questionHtml += '<p>' + question.question + '</p><div class="options">';

  for (let i = 0; i < question.options.length; i++) {
    questionHtml += '<button class="option" onclick="checkAnswer(this, ' + i + ')" onmouseover="highlightButton(this)">' + question.options[i] + '</button>';
  }

  questionHtml += '</div><p id="feedback"></p></div>';
  document.getElementById('quizContainer').innerHTML = questionHtml;
  document.getElementById('nextButton').style.display = 'none';
}

function checkAnswer(button, optionNumber) {
  const question = questions[questionNumber];
  const buttons = document.querySelectorAll('.option');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  if (question.options[optionNumber] === question.answer) {
    score++;
    document.getElementById('feedback').textContent = 'Correct!';
  } else {
    document.getElementById('feedback').textContent = 'Try again on the next question!';
  }

  button.style.backgroundColor = '#b9d6ff';
  document.getElementById('nextButton').style.display = 'inline-block';
}

function nextQuestion() {
  questionNumber++;

  if (questionNumber < questions.length) {
    showQuestion();
  } else {
    document.getElementById('quizContainer').innerHTML =
      '<h2>Quiz complete!</h2><p>Your score: ' + score + ' / ' + questions.length + '</p>';
    document.getElementById('nextButton').style.display = 'none';
  }
}

