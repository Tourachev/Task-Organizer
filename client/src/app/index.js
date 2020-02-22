import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {NavBar} from '../components';
import {NoteList, NoteInsert, NoteUpdate} from '../pages/';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path='/notes/list' exact component={NoteList} />
				<Route path='/notes/create' exact component={NoteInsert} />
				<Route path='/notes/update/:id' exact component={NoteUpdate} />
			</Switch>
		</Router>
	);
}

export default App;
