import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

// App components
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

const App = () => (
	<BrowserRouter>
	  <div className="container">
			<Header />
			<Switch> {/* Switch looks through all the routes until it finds one that works. If it can't find one, it'll render the last one. */}
				{/* 'Exact' prop here makes sure that the / is only used for the Index page and not included in other routes which also contain a */}
				<Route exact path="/" component={Home} />
				<Route path="/about" render={ () => <About title="About"/> } />
				<Route exact path="/teachers" component={Teachers} />
				{/*
					`name` is just a variable in this Featured component route
					match.path: "/teachers/:topic/:fname-:lname"
					match.params.fname: "tom"
					match.params.topic: "javascript"
					match.url: "/teachers/javascript/tom-stanley"

					A ? after a parameter makes it optional.
				*/}
				<Route path="/teachers/:topic/:fname-:lname" component={Featured} />
				<Route path="/courses" component={Courses} />
				<Route component={NotFound} />
			</Switch>
	  </div>
	</BrowserRouter>
);

export default App;
