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

const App = () => (
	<BrowserRouter>
	  <div className="container">
			<Header />
			<Switch> {/* Switch looks through all the routes until it finds one that works. If it can't find one, it'll render the last one. */}
				{/* 'Exact' prop here makes sure that the / is only used for the Index page and not included in other routes which also contain a */}
				<Route exact path="/" component={Home} />
				<Route path="/about" render={ () => <About title="About"/> } />
				<Route path="/teachers" component={Teachers} />
				<Route path="/courses" component={Courses} />
				<Route component={NotFound} />
			</Switch>
	  </div>
	</BrowserRouter>
);

export default App;
