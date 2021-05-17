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
  const handleChange = (e, questionId, index) => {
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

  const QuestionHandle = () => {

    let questionsToRender
    let choicesToRender

    questionsToRender = survey.questions.map((question, i) => {
      return <div key={question.questionId}>

        {<p>Kysymys: {question.quetext}
          <span style={{ color: 'red' }} >{question.required ? '*' : ''}</span>
        </p>}

      </div>
    })

    choicesToRender = survey.questions.map((choiceObj, i) => {
      return (<div key={i}>
        {
          choiceObj.choices.map(choiceIndex => {
            return (<div key={choiceIndex.choiceId}>
              {/* <input type="radio" value={choiceIndex.choiceText} name="ansText" onChange={(e) => handleChange(e, choiceIndex.choiceId, i)} /> {choiceIndex.choiceText} */}
            </div>)
          }
          )}
      </div>)
    })


    return (<div>

      <h1>{survey.name}</h1>

      {questionsToRender}

      {choicesToRender}

    </div>)

    /* return(
      <div>
        <h1>{survey.name}</h1>
            {survey.questions.map((q, i) => {

              return (
                <div key={q.questionId}>

                    <div>
                      {q.questiontype.typename === 'text' && 
                        <p>Kysymys: {q.quetext} {console.log("This is Q: ", q)} <span style={{ color: 'red' }} >{q.required ? '*' : ''}</span></p>
                      }
                      {q.questiontype.typename === 'radio' && 
                        <div>
                          
                        </div>
                      }

                      <form>
                        <input
                          type="text"
                          name="ansText"
                          value={answers.ansText}
                          onChange={(e) => handleChange(e, q.questionId, i)}
                        />
                      </form>

                    </div>
                </div>
              )
              
            })}
    </div>
    ) */
  }

  useEffect(() => {
    console.log("Input changed")
    console.log(answers)
  }, [answers])

  return (
    <div>

      <Button onClick={() => fetch_url()} variant="contained" color="primary">
        Hae kysely
      </Button>

      <QuestionHandle />

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