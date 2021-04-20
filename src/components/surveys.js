import React, { useState } from 'react';

function Surveys() {
  const [survey, setSurvey] = useState({
    name: '',
    amount: '',
    status: '',
    questions: [],
    id: ''
  });

  const [answer, setAnswer] = useState('');
  const [allanswers, setAllanswers] = useState([]);

  const survey_id = '1';
  const url = `https://survey-task.herokuapp.com/surveys/${survey_id}`;

  const fetch_url = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json();

      console.log(json)
      setSurvey(json);
      console.log(survey.questions);
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
        <div>
          amount: {survey.amount}<br></br>
          id: {survey.id}<br></br>
          name: {survey.name}<br></br>
          questions :
          {survey.questions.map(q => {
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
                status:{survey.status}<br></br>
        </div>
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