import React, { useState, useEffect } from 'react';

function Report() {

  const [survey, setSurvey] = useState({
    name: '',
    amount: '',
    status: '',
    questions: [],
    id: ''
  });

  const [answers, setAnswers] = useState([{
    answerId: '',
    ansText: '',
    question: {
      questionId: ''
    }
  }]);

  const survey_id = '1';
  const surveyUrl = `https://survey-task.herokuapp.com/surveys/${survey_id}`;
  const answersUrl = `http://localhost:8080/answers`;

  useEffect(() => {
    fetchSurveyAndQuestions();
    fetchAnswers();
  }, []);

  const fetchSurveyAndQuestions = async () => {
    try {
      const response = await fetch(surveyUrl)
      const json = await response.json();

      setSurvey(json);
    }
    catch {
      console.error('Error while fetching surveys.')
    }
  }

  const fetchAnswers = async () => {
    try {
      const response = await fetch(answersUrl)
      const json = await response.json();

      setAnswers(json);
    }
    catch {
      console.error('Error while fetching answers.')
    }
  }

  return (
    <div>

      <h1>{survey.name} kyselyn tulosraportti</h1>

      {survey.questions.map((q, index) => {
        return (
          <div key={q.questionId} >

            <h2>Kysymys: {q.quetext}</h2>
            {answers.map((a, index) => {
              if (q.questionId === a.question.questionId)
                return (
                  <div>
                    <ul>
                      <li>{a.ansText}</li>
                    </ul>

                  </div>)
            }
            )}
          </div>
        );
      })}

    </div>
  )
}

export default Report;