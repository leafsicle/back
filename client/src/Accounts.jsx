import React, { Component } from 'react'
import Account from './Account'
import DefaultHeader from './DefaultHeader'
import axios from 'axios'

class Accounts extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		axios
			.get('/events.json')
			.then(response => {
				this.setState({ events: response.data })
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="">
				<DefaultHeader title="Accounts" />
				{/* Each account will be listed here using a .Map function to generate each */}
				<div className="has-text-centered accounts">
					{this.state.events.map((event, index) => (
						<Account
							key={index}
							id={index}
							name={event.name}
							dueDate={event.due_date}
							frequency={event.recurring}
							amount={event.amount_due}
							flow={event.flow}
							paid={event.was_paid}
							notes={event.notes}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default Accounts
