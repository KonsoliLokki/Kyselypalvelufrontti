import React, { useState } from 'react';
import SendAnswers from './SendAnswers.js';
import ProtoSurvey from './ProtoSurvey.js';


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
   // e.preventDefault();
    setAllanswers({ ...allanswers, [e.target.name]: e.target.value });
    setOlioanswer(olioanswer.concat(allanswers));
    setAllanswers({ answertext: '' });

    console.log(allanswers)
    console.log(olioanswer);

  }


  return (
    <div style= {{marginLeft: '100px'}}>
 
   
      <button type ='button' onClick={() => fetch_url()} >Hae surveys</button>

      <div>
        <h1>{survey.name}</h1>
        {survey.questions.map(q => {
          return (
            <div key={q.questionId} >
              
              <p>Kysymys: {q.quetext}{q.required ? '***' : ''}</p>
              
              <form>
              <input type='text' name={'answertext' + q.questionId} value={allanswers.answertext} onChange={(e) => returnAnswer(e)}/><br></br>
              <input type='submit' value='Lisää' onClick={(e) => giveAnswer(e)}/>
              </form>
            </div>
          );
        })}
        </div>

          
        <SendAnswers answers = {olioanswer}/> 
        <ProtoSurvey/>
       
 </div>

    
  )
}

export default Surveys;