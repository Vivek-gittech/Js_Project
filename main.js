const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Venus", "Jupiter"],
      correct: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correct: 2
    }
  ];
  
  // Function to get a random question
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.innerHtml +=randomIndex;
    // return questions[randomIndex];
  }
  
  // Usage
  const randomQuestion = getRandomQuestion();
  document.innerHtml=randomQuestion;
//   console.log(randomQuestion);
  