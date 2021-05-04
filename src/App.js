import React, { useState } from 'react';
import Surveys from './components/Surveys';
import ProtoSurvey from './components/ProtoSurvey';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import './App.css';
import Report from './components/Report';

function App() {
  const [value, setValue] = useState('survey');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: 20 }}>
        <Toolbar>
          <Typography variant="h6">
            Kyselypalvelu
          </Typography>
          <Tabs value={value} onChange={handleChange} className="links">
            <Tab value="survey" label="Kysely" />
            <Tab value="prototype" label="Prototyyppi" />
            <Tab value="report" label="Raportti" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className="page-content">
        {value === 'survey' && <Surveys />}
        {value === 'prototype' && <ProtoSurvey />}
        {value === 'report' && <Report />}
      </div>
    </div>
  );
}

export default App;
