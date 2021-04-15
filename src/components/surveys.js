import React, { useState } from 'react';

function Surveys() {
  const [survey, setSurvey] = useState([{
    name: '',
    amount: '',
    status: '',
    questions: [],
    id: ''
  }]);

  const [answer, setAnswer] = useState('');
  const [allanswers, setAllanswers] = useState([]);

  const url = 'https://survey-task.herokuapp.com/surveys';

  const fetch_url = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json();

      console.log(json)
      setSurvey(json);
     
    }
    catch {
      console.log('Error while fetching surveys.')
    }

  }

  const returnAnswer = (e) => {
    setAnswer(e.target.value);
  }

  const giveAnswer = (e) => {
    e.preventDefault();
    setAllanswers(allanswers.push(answer));
    setAnswer('');
  }

  
  return (
    <div>
      <button onClick={() => fetch_url()} >Hae surveys</button>
      <div>
       

      </div>

      <form>
        <label htmlFor='answer'>Answer to Question </label>
        <input type='text' name='answer' value={answer} onChange={(e) => returnAnswer(e)} /> <br></br>
        <button onClick={(e) => giveAnswer(e)}>Give answer</button>
      </form>
    </div>
  )
}

export default Surveys;