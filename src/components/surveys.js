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
      console.log(survey[0].questions);
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
<<<<<<< HEAD
       
=======
        {survey.map(e => {
          return (
            <div key={e.id}>
              amount: {e.amount}<br></br>
                id: {e.id}<br></br>
                name: {e.name}<br></br>
                questions :
              {e.questions.map(q => {
                return (
                  <div key={q.questionId}>
                    <p>Question id: {q.questionId}</p>
                    <p>Question type: {q.type}</p>
                    <p>Question text: {q.quetext}</p>
                    <p>Question required?: {q.required}</p>
                  </div>
                );
              })}
              <br></br>
                status:{ e.status}<br></br>
            </div>
>>>>>>> 7789e07bf8f3aa9420697c3d8bfdc4b0ee247fca

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