import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Stack from './Stack'
import Accounts from './Accounts'
import AccountPage from './AccountPage'
import NewAccount from './NewAccount'
import Calendar from './Calendar'


class App extends Component {
	render() {
		return (
			<div className="">
				<Router>
					<Switch>
						<Route exact path="/" component={Stack} />
						<Route path="/accounts" component={Accounts} />
						<Route path="/accountPage/:id" component={AccountPage} />
						<Route path="/newAccount" component={NewAccount} />
						<Route path="/calendar" component={Calendar} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
