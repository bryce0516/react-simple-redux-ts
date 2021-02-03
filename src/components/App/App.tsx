import React from 'react';
import Recorder from '../Recorder';
import './App.css';
import {Link, BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import CanStopRecorder from '../CanStopRecorder';
import Calendar from '../Calendar';
interface Props {}
const App = () =>  {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink to="/canstoprecorder" >CanStopRecorder</NavLink></li>
        </ul>
        <Switch>

          <Route path="/canstoprecorder" component={CanStopRecorder} />
        </Switch>
      </Router>
      <Recorder />
      <Calendar />
    </div>
  );
}

export default App;
