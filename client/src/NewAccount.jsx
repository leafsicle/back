import React, { Component } from 'react'
import axios from 'axios'
import DefaultHeader from './DefaultHeader'

class NewAccount extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			due_date: '',
			// recurring: '',
			amount_due: 0,
			flow: '',
			was_paid: false,
			notes: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		// if this a checkbox we want to get the information from the status of it being checked or not
		// otherwise, get the input's value
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value

		this.setState({ [event.target.name]: value }, () => {
			console.log('state is updated and is equal to')
			console.log(this.state)
		})
	}

	handleSubmit(event) {
		axios.post('/events', {
			event: {
				name: this.state.name,
				recurring: this.state.frequency,
				due_date: this.state.due_date,
				amount_due: this.state.amount_due,
				flow: this.state.flow,
				was_paid: this.state.was_paid,
				notes: this.state.notes
			}
		})
	}
	render() {
		return (
			<div className="container ">
				<DefaultHeader title="New Account" />

				{/* This is where you will add a new account!! */}

				<form className="field">
					<label className="label">
						Account Name:
						<input
							className="input"
							type="text"
							name="name" //{this.state.name}
							onChange={this.handleChange}
							placeholder="What is this account called?"
						/>
					</label>
				</form>

				{/* When is the bill due with a calendar */}
				<form className="field">
					<div className="control">
						<label className="label">When is this bill due?</label>
						<input
							onChange={this.handleChange}
							className="input"
							type="date"
							name="due_date"
							value={this.due_date}
						/>
					</div>
				</form>
				{/* This is for how often the bill occurs*/}
				<div className="field ">
					<div className="control">
						<label className="label">Frequency</label>
						<select id="" onChange={this.handleChange}>
							<option value="">How often does this occur?</option>
							<option recurring="This Worked!">Daily</option>
							<option value="week">Weekly</option>
							<option value="bi-weekly">Bi-weekly</option>
							<option value="monthly">Monthly</option>
							<option value="annual">Annually</option>
						</select>
					</div>
				</div>
				{/* How much is this bill? */}
				<div className="field" onChange={this.handleChange}>
					<div className="control">
						<label className="label">Amount Due</label>
						<input
							className="input"
							type="number"
							min="0"
							max="10000"
							placeholder="Amount in $"
							name="amount_due"
							value={this.props.amount_due}
						/>
					</div>
				</div>
				{/* is this income or an expense? */}
				<form className="field">
					<div className="control">
						<label className="label">Is this income or an expense?</label>
						<input
							onChange={this.handleChange}
							type="radio"
							name="flow"
							value="Income"
							className="moveMe"
						/>
						Income <br />
						<input
							onChange={this.handleChange}
							type="radio"
							name="flow"
							value="Expense"
							className="moveMe"
						/>
						Expense
					</div>
				</form>
				{/* Was this bill paid or not paid? */}
				<div className="field">
					<div className="control">
						<label className="label">Was this bill paid?</label>
						<input
							onChange={this.handleChange}
							className="w3-check moveMe"
							type="checkbox"
							name="was_paid"
							value={this.state.was_paid}
						/>
					</div>
				</div>

				{/* Notes for the account */}
				<div className="field" onChange={this.handleChange}>
					<div className="control">
						<label className="label">Notes:</label>
						<input
							name="notes"
							className="input"
							type="text"
							placeholder="account number etc..."
						/>
						<span className="validity" />
					</div>
				</div>
				<div className="has-text-centered ">
					{/* submit button to post to DB */}
					<a href="/accounts">
						<div className="button is-success" onClick={this.handleSubmit}>
							Submit
						</div>
					</a>
					{/* Returns back to the accounts page */}
					<a href="/accounts">
						<div className="button is-danger">Cancel</div>
					</a>
				</div>
			</div>
		)
	}
}

export default NewAccount
