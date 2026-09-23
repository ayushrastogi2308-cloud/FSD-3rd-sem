const questions = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'High Text Machine Language'],
    answer: 'Hyper Text Markup Language'
  },
  {
    question: 'Which keyword is used to create a variable in JavaScript?',
    options: ['var', 'let', 'const', 'all of these'],
    answer: 'all of these'
  },
  {
    question: 'What is CSS used for?',
    options: ['To style web pages', 'To create database', 'To store data', 'To write server code'],
    answer: 'To style web pages'
  },
  {
    question: 'Which tag is used to add JavaScript in HTML?',
    options: ['<script>', '<link>', '<style>', '<js>'],
    answer: '<script>'
  },
  {
    question: 'Which operator is used for checking equality and data type?',
    options: ['==', '===', '!=', '>='],
    answer: '===' 
  }
];

let currentQuestion = 0;
let answers = [];

function startQuiz() {
  const name = document.getElementById('studentName').value.trim();
  const roll = document.getElementById('studentRoll').value.trim();
  const section = document.getElementById('studentSection').value;

  if (name === '' || roll === '' || section === '') {
    alert('Please enter all details');
    return;
  }

  sessionStorage.setItem('studentName', name);
  sessionStorage.setItem('studentRoll', roll);
  sessionStorage.setItem('studentSection', section);

  window.location.href = 'quizpage.html';
}

function showQuiz() {
  const name = sessionStorage.getItem('studentName') || 'Student';
  const info = document.getElementById('studentInfo');

  if (info) {
    info.textContent = 'Name: ' + name;
  }

  displayQuestion();
}

function displayQuestion() {
  const question = questions[currentQuestion];
  const quizContainer = document.getElementById('quizContainer');

  if (!quizContainer) {
    return;
  }

  let options = '';

  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    const checked = answers[currentQuestion] === option ? 'checked' : '';
    options += '<label><input type="radio" name="answer" value="' + option + '" ' + checked + '> ' + option + '</label><br>';
  }

  quizContainer.innerHTML = '<h2>Question ' + (currentQuestion + 1) + '</h2><p>' + question.question + '</p>' + options;
}

function getSelectedAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (selected) {
    return selected.value;
  }

  return null;
}

function nextQuestion() {
  answers[currentQuestion] = getSelectedAnswer();

  if (currentQuestion < questions.length - 1) {
    currentQuestion = currentQuestion + 1;
    displayQuestion();
  } else {
    submitQuiz();
  }
}

function prevQuestion() {
  answers[currentQuestion] = getSelectedAnswer();

  if (currentQuestion > 0) {
    currentQuestion = currentQuestion - 1;
    displayQuestion();
  }
}

function submitQuiz() {
  answers[currentQuestion] = getSelectedAnswer();

  const name = sessionStorage.getItem('studentName') || 'Student';
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].answer) {
      score = score + 1;
    }
  }

  const resultBox = document.getElementById('resultBox');
  if (resultBox) {
    resultBox.innerHTML = '<h3>Quiz Finished</h3><p>' + name + ', your score is ' + score + '/' + questions.length + '</p>';
  }

  const controls = document.getElementById('quizControls');
  if (controls) {
    controls.style.display = 'none';
  }
}