import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';


// components
import CourseContainer from "./courses/CourseContainer";

// match is a custom prop made and inserted by React Router
// Another treehouse comment:
// "Note how in order for these props to get passed down to the Courses component automatically, you need to use the component={Courses} and not a render=. To use this with a render call we would need to pass the props to it manually with something like render= { props => <Courses match = props.match />}"
const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
					<NavLink to={`${match.url}/html`}>HTML</NavLink>
				</li>
        <li>
					<NavLink to={`${match.url}/css`}>CSS</NavLink>
				</li>
        <li>
					<NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
				</li>
      </ul>
    </div>

		{/* This route renders a redirect component only if the user ends up on /courses so that the /courses route doesn't only feature a title and a navbar. Exact prop is needed because otherwise you get into a loop */}
		{/* match.path is used here because /html /css /javascript are always going to be nested inside of /courses - but what if we one day want to change the name of /courses? this will allow us to do so without going through every url nested within it and changes that too */}
		<Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`} /> } />
		<Route path={`${match.path}/html`} render={ () => <CourseContainer data={HTMLCourses} />} />
		<Route path={`${match.path}/css`} render={ () => <CourseContainer data={CSSCourses} />} />
		<Route path={`${match.path}/javascript`} render={ () => <CourseContainer data={JSCourses} />} />
  </div>
);

export default Courses;

/*
Comment on differences between match.path and match.url from treehouse :

```
When we are creating a route path it is necessary to use the match.path; however, when we're linking to a path that is already created we use the match.url.

So in the case of the example, we created a route path to the html component using path={`${match.path}/html`}.
And when we want to link our navigation links to the created route path, we use to={`${match.url}/html`}.
```

*/
