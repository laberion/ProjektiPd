import './App.css';
import React from 'react';
import Schedules from '../src/components/schedules/schedules';
import Doctors from '../src/components/doctors/doctors';
import Patients from '../src/components/patients/patients';
import Home from '../src/components/home/home';
import Chat from '../src/components/chat/chat';
import VideoChat from '../src/components/video/video';
import { BrowserRouter as Router, Route ,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:"20px"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Hospital Manager</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link" to="/schedules">Schedules</Link>
            <Link className="nav-link" to="/patients">Patinets</Link>
            <Link className="nav-link" to="/doctors">Doctors</Link>
            <Link className="nav-link" to="/chat">Chat</Link>
            <Link className="nav-link" to="/video">Video</Link>
            </div>
          </div>
        </div>
      </nav>
      <Route path="/" exact component={Home}/>
      <Route path="/schedules" exact component={Schedules} />
      <Route path="/doctors" exact component={Doctors} />
      <Route path="/patients" exact component={Patients} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/video" exact component={VideoChat} />
    </Router>
  );
}

export default App;
