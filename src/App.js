import React, { useState } from 'react';
import './App.css';

function App() {
  const [survey, setSurvey] = useState({});
  const [ready, setReady] = useState(false);

  // API query options
  const API_URL = '';

  // Call API
  const getQuestions = () => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return Response.json();
      })
      .then(responseData => {
        setSurvey(responseData);
        setReady(true);
      })
      .catch(err => console.log(err))
  }

  return (
    <div >
      Olen kyselypalvelu.
    </div>
  );
}

export default App;
