import React, { useState } from 'react';
import ProtoSurvey from './ProtoSurvey.js';

function Surveys() {
  const [survey, setSurvey] = useState({
    name: '',
    amount: '',
    status: '',
    questions: [],
    id: ''
  });
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([{
    ansText: ''
  }]);


  // Fetch options
  const survey_id = '1';
  const url = `https://survey-task.herokuapp.com/surveys/${survey_id}`;

  // Get survey
  const fetch_url = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json();

      setSurvey(json);
    }
    catch {
      console.error('Error while fetching surveys.')
    }
  }

  // Handle input values in answer fields
  const handleChange = (e) => {
    // Set input field value as answer text
   
    setAnswer({
      ansText: e.target.value,
      question: {
        questionId: e.target.id
      }
    });
  }

  const giveAnswer = (e) => {
    e.preventDefault();

    setAnswers(answers.concat(answer));
    setAnswer([{
      ansText: '',
      question: {
        questionId: ''
      }
    }]);

    
  
  }


  console.log(answers)
  const sendAnswers = () => {

    fetch('https://survey-task.herokuapp.com/answers',
      {
        method: 'POST',
        body: JSON.stringify(answers),
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
    <div style={{ marginLeft: 50, marginTop: 50 }}>

      <button type='button' onClick={() => fetch_url()} >Hae surveys</button>

      <div>
        <h1>{survey.name}</h1>
        {survey.questions.map(q => {
          return (
            <div key={q.questionId} >

              <p>Kysymys: {q.quetext}<span style={{ color: 'red' }} >{q.required ? '*' : ''}</span></p>

              <form>
                <input
                  type="text"
                  id={q.questionId}
                  value={answer.ansText}
                  onChange={(e) => handleChange(e)}
                />
                <input type='submit' value='Vastaa' onClick={e => giveAnswer(e)} />
              </form>
            </div>
          );
        })}
      </div>

      <button onClick={sendAnswers}>Lähetä vastaukset</button>

      <ProtoSurvey />
    </div>
  )
}

export default Surveys;