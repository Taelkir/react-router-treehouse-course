import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";

// components
import CSS from "./courses/CSS";
import HTML from "./courses/HTML";
import JavaScript from "./courses/JavaScript";

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
					<NavLink to='/courses/html'>HTML</NavLink>
				</li>
        <li>
					<NavLink to='/courses/css'>CSS</NavLink>
				</li>
        <li>
					<NavLink to='/courses/javascript'>JavaScript</NavLink>
				</li>
      </ul>
    </div>

		{/* This route renders a redirect component only if the user ends up on /courses so that they /courses route doesn't only feature a title and a navbar. Exact prop is needed because otherwise you get into a loop */}
		<Route exact path="/courses" render={ () => <Redirect to="/courses/html" /> } />
		<Route path="/courses/html" component={HTML} />
		<Route path="/courses/css" component={CSS} />
		<Route path="/courses/javascript" component={JavaScript} />
  </div>
);

export default Courses;
