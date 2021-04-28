import React from "react";

function SendAnswer(answers) {

  const data = [
    {
      ansText: 'Testiiiiiiii',
      question: {
        questionId: 2
      }
    }
  ]

  const sendAnswers = () => {
    fetch('https://survey-task.herokuapp.com/answers',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          console.log('Success: Data sent')
        }
        else {
          console.log('Error: Data sending failed')
        }
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <button onClick={(e) => sendAnswers(e)}> send answers as json </button>
    </div>
  );
}

export default SendAnswer;
