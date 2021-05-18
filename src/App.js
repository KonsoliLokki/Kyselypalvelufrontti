import React from 'react';
import Surveys from './components/Surveys';
import ProtoSurvey from './components/ProtoSurvey';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Report from './components/Report';

function App() {
  return (
    <div className="App">
      <Router>

        <AppBar position="static" style={{ marginBottom: 20 }}>
          <Toolbar>
            <Typography variant="h6">
              Kyselypalvelu
          </Typography>
            <nav className="nav">
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
          <Switch>
            <Route path="/raportti">
              <Report />
            </Route>
            <Route path="/prototyyppi">
              <ProtoSurvey />
            </Route>
            <Route path="/:urlId">
              <Surveys />
            </Route>
            <Route path="/">
              <h3>VIRHE: URL:n pitää sisältää kyselyn ID</h3>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
