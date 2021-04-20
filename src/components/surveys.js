import React, { useState } from 'react';
import SendAnswer from './SendAnswers';

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
    setAllanswers(allanswers.concat(answer));
    setAnswer('');
   
       console.log(allanswers)
   
  }


  return (
    <div>
      <button onClick={() => fetch_url()} >Hae surveys</button>
      <div>
        {survey.map(e => {
          return (
            <div key={e.id}>
                Survey: {e.name}<br></br><br></br>
                questions :
              {e.questions.map(q => {
                return (
                  <div key={q.questionId}>
                    <p>Question text: {q.quetext}</p>
                    
                  </div>
                );
              })}
              <br></br>
                status:{ e.status}<br></br>
            </div>
          )
        })}
      </div>

      <form>
        <label htmlFor='answer'>Answer to Question </label>
        <input type='text' name='answer' value={answer} onChange={(e) => returnAnswer(e)} /> <br></br>
        <button onClick={(e) => giveAnswer(e)}>Give answer</button>
      </form>

<SendAnswer allanswers= {allanswers}/>
    </div>
  )
}

export default Surveys;