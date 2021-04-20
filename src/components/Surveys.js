import React, { useState } from 'react';


function Surveys() {
  const [survey, setSurvey] = useState({
    name: '',
    amount: '',
    status: '',
    questions: [],
    id: ''
  });


  const [allanswers, setAllanswers] = useState({
    answertext: ''
  });
  const [olioanswer, setOlioanswer] = useState([]);

  console.log(olioanswer)

  const survey_id = '1';
  const url = `https://survey-task.herokuapp.com/surveys/${survey_id}`;

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

    setAllanswers({ [e.target.name]: e.target.value });
  }

  const giveAnswer = (e) => {
    e.preventDefault();
    setAllanswers({ ...allanswers, [e.target.name]: e.target.value });
    setOlioanswer(olioanswer.concat(allanswers));
    setAllanswers({ answertext: '' });

    console.log(allanswers)
    console.log(olioanswer);

  }


  return (
    <div>

      <button onClick={() => fetch_url()} >Hae surveys</button>

      <div>
        <h1>{survey.name}</h1>
        {survey.questions.map(q => {
          return (
            <div key={q.questionId}>
              <p>Kysymys: {q.quetext}{q.required ? '***' : ''}</p>
              <input type='text' name={'answertext' + q.questionId} value={allanswers.answertext} onChange={(e) => returnAnswer(e)}></input><br></br>
              <button onClick={(e) => giveAnswer(e)}>Give answer</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Surveys;