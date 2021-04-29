import React from "react";
import axios from "axios";

function SendAnswer(answers) {
  const sendAnswers = (e) => {
    e.preventDefault();

    const data = ['{"ansText": "Testiiiiiiii", "question": { "questionId": "2"} }'] ;

  

    fetch("https://survey-task.herokuapp.com/answers", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log("jee","Success:", data);
      })
      .catch((error) => {
        console.error('oops!',"Error:", error);
      });
  };

  return (
    <div>
      <button onClick={(e) => sendAnswers(e)}> send answers as json </button>
    </div>
  );
}

export default SendAnswer;
