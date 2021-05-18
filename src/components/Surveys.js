import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom";

function Surveys() {

  const [survey, setSurvey] = useState({
    name: '',
    amount: '',
    status: '',
    questions: [],
    id: ''
  })

  const [answers, setAnswers] = useState([{
    ansText: '',
    question: {
      questionId: ''
    }
  }])

  // Ei toimi useamman radio button kysymyksen kanssa atm
  const [radioValue, setRadioValue] = useState('')

  // Set 'send answers' button visibility
  const [isShown, setIsShown] = useState(false)

  // Fetch options
  let { urlId } = useParams();
  const survey_id = urlId;
  const url = `https://survey-task.herokuapp.com/surveys/${survey_id}`

  // Get survey
  const fetch_url = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json()

      setSurvey(json);
      // Set 'send answers' button to visible
      setIsShown(true);
    }
    catch {
      console.error('Error while fetching surveys.')
    }
  }

  // Handle input values in answer fields
  const handleTextChange = (e, questionId, index) => {
    let newArr = [...answers]; // copying the old datas array
    newArr[index] = { [e.target.name]: e.target.value, question: { questionId: questionId } }

    setAnswers(newArr)
  }

  const handleRadioChange = (e, questionId, index) => {
    setRadioValue(e.target.value)
    let newArr = [...answers]; // copying the old datas array
    newArr[index] = { [e.target.name]: e.target.value, question: { questionId: questionId } }
    
    setAnswers(newArr)
  }

  const sendAnswers = () => {

    console.log(answers)
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


    setSurvey({
      name: '',
      amount: '',
      status: '',
      questions: [],
      id: ''
    });

    setIsShown(false);
  }

  return (
    <div>

      <Button onClick={() => fetch_url()} variant="contained" color="primary">
        Hae kysely
      </Button>

      <h1>{survey.name}</h1>

      { // Map questions
        survey.questions.map((question, index) => {
          return (
            <div key={question.questionId}>

              <p>Kysymys: {question.quetext}
                <span style={{ color: 'red' }} >{question.required ? '*' : ''}</span>
              </p>

              { // Display text input
                question.questiontype.typename === 'text' &&

                <form>
                  <input
                    type="text"
                    name="ansText"
                    
                    onChange={(e) => handleTextChange(e, question.questionId, index)}
                  />
                </form>
              }

              { // Display radio input
                question.questiontype.typename === 'radio' &&

                <form>
                  { // Map question choices
                    question.choices.map((choice) => {
                      return (
                        <div key={choice.choiceId}>
                          <label >
                            <input
                              type="radio"
                              value={choice.choiceText}
                              name="ansText"
                              onChange={(e) => handleRadioChange(e, question.questionId, index)}
                            />
                            {choice.choiceText}
                          </label>
                        </div>
                      )
                    })
                  }
                </form>
              }
            </div>
          )
        })
      }

      <Button
        onClick={sendAnswers}
        variant="contained"
        color="secondary"
        style={{ marginTop: 30, display: isShown ? 'block' : 'none' }}
      >
        Lähetä vastaukset
      </Button>

    </div>
  )
}

export default Surveys