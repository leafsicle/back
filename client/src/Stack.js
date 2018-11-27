import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Card from './Card'
import axios from 'axios'

class Stack extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		axios
			.get('/events.json')
			.then(response => {
				this.setState({ events: response.data }, () => {
					this.updateTotals()
				})
			})
			.catch(error => console.log(error))
	}

	updateTotals = () => {
		let total = 0
		this.state.events.forEach(event => {
			if (event.flow === 'expense') {
				total -= event.amount_due
			} else {
				total += event.amount_due
			}
		})
		this.setState({
			totalBudget: total
		})
	}
	render() {
		return (
			<main className="is-fluid container">
				<DefaultHeader title="Budget Better" />

				{/* Overall card with working link */}

				<div className="is-fluid title">
					<p className="accounts">Overall Balance: ${this.state.totalBudget}</p>
				</div>
				<div className="container card-container">
					{/* Accounts card with working link */}
					<Card className="title" cardName="Accounts" urlLink="/accounts" />

					{/* Upcoming bills. Needs redirect */}
					{/* <Card className="title" cardName="Calendar" urlLink="/calendar" /> */}
				</div>
			</main>
		)
	}
}

export default Stack
