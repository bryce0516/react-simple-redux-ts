import React from 'react';
import Recorder from '../Recorder';
import './App.css';
import {Link, BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import CanStopRecorder from '../CanStopRecorder/CanStopRecorder';
import Calendar from '../Calendar/Calendar';
interface Props {}
const App = () =>  {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink to="/" >Recorder</NavLink></li>
          <li><NavLink to="/canstoprecorder" >CanStopRecorder</NavLink></li>
          <li><NavLink to="/calendar" >Calendar</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Recorder} />
          <Route path="/canstoprecorder" component={CanStopRecorder} />
          <Route path="/calendar" component={Calendar} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
