import React from "react";
import axios from "axios";

function SendAnswer(answers) {
  console.log(answers);

  const sendAnswers = (e) => {
    e.preventDefault();
   
  
      axios
        .post('', answers)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    
 
  };

  return (
    <div>
      <button onClick={(e) => sendAnswers(e)}> send answers as json </button>
    </div>
  );
}

export default SendAnswer;
