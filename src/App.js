import React, { useState } from 'react';
import Surveys from './components/Surveys';
import ProtoSurvey from './components/ProtoSurvey';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Report from './components/Report';

function App() {
  const [value, setValue] = useState('survey');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <Router>

        <AppBar position="static" style={{ marginBottom: 20 }}>
          <Toolbar>
            <Typography variant="h6">
              Kyselypalvelu
          </Typography>
            <nav>
              <ul>
                <li>
                  <Link to="/">Kysely</Link>
                </li>
                <li>
                  <Link to="/prototyyppi">Prototyyppi</Link>
                </li>
                <li>
                  <Link to="/raportti">Raportti</Link>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>

        <div className="page-content">
          {value === 'survey' && <Surveys />}
          {value === 'prototype' && <ProtoSurvey />}
          {value === 'report' && <Report />}
        </div>

      </Router>
    </div>
  );
}

export default App;
