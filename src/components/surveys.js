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
  const [allanswers, setAllanswers] = useState({
    answertext: ''
  });

  const url = 'https://survey-task.herokuapp.com/surveys';

  const fetch_url = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json();

      setSurvey(json);
     
    }
    catch {
      console.log('Error while fetching surveys.')
    }

  }

  const returnAnswer = (e) => {
    console.log(e.target.name);
    setAllanswers({[e.target.name]:e.target.value});
  }

  const giveAnswer = (e) => {
    e.preventDefault();
    setAllanswers({...allanswers, [e.target.name]: e.target.value} );
    setAllanswers('');
   
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
                    <input type='text' name={'answertext'+q.questionId} value={allanswers.answertext} onChange={(e) => returnAnswer(e)}></input><br></br>
                    <button onClick={(e) => giveAnswer(e)}>Give answer</button>
                    
                  </div>
                );
              })}
              <br></br>
                status:{ e.status}<br></br>
            </div>
          )
        })}
      </div>

      

    </div>
  )
}

export default Surveys;