import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {

  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Life finds a way. We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!</p>
        <p>Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Hey, take a look at the earthlings. Goodbye! What do they got in there? King Kong?</p>

        <hr />

        <h3>Featured Teachers</h3>
        <Link to="teachers/Acting/Tommy-Wisaeu">Tommy Wisaeu</ Link>
        <Link to="teachers/JavaScript/Tom-Stanley">Tom Stanley</ Link>

      </div>
    );
  }
}

export default Home;
