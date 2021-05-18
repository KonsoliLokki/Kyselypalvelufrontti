import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import QuestionTypeBanner from "./QuestionTypeBanner"

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

  let { urlId } = useParams();
  const survey_id = urlId;
  const surveyUrl = `https://survey-task.herokuapp.com/surveys/${survey_id}`;
  const answersUrl = `https://survey-task.herokuapp.com/answers/`;

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

      {survey.questions.map((q) => {
        return (
          <div key={q.questionId} >
            <h3>{q.quetext}<QuestionTypeBanner type={q.questiontype.typename} /></h3>
            {answers.map((a) => {
              if (q.questionId === a.question.questionId)
                return (
                  <div key={a.answerId}>
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