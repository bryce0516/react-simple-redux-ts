import React from 'react';
import Recorder from '../Recorder';
import './App.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import CanStopRecorder from '../CanStopRecorder';
import Calendar from '../Calendar';
interface Props {}
const App = () =>  {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink to="/" >Recorder</NavLink></li>
          <li><NavLink to="/canstoprecorder" >CanStopRecorder</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Recorder} />
          <Route path="/canstoprecorder" component={CanStopRecorder} />
        </Switch>
      </Router>
      {/* <Recorder /> */}
    </div>
  );
}

export default App;
