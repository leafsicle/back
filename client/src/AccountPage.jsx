import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import axios from 'axios'

class AccountPage extends Component {
	state = {
		loading: true
	}

	handleDelete = () => {
		axios.delete('/events/' + this.state.account.id + '.json').then(data => {
			this.props.history.push('/accounts')
		})
	}

	componentWillMount() {
		const id = this.props.match.params.id

		axios
			.get('/events.json')
			.then(response => {
				this.setState({
					account: response.data[id],
					loading: false
				})
			})
			.catch(error => console.log(error))
	}

	render() {
		if (this.state.loading) {
			return <DefaultHeader title="Loading..." />
		} else {
			return (
				<div className="container">
					<DefaultHeader title={`${this.state.account.name}`} />
					<table className="table is-bordered ">
						<tbody>
							<tr>
								<td>Amount</td>
								<td>{this.state.account.amount_due}</td>
							</tr>
							<tr>
								<td>Date due</td>
								<td>{this.state.account.due_date}</td>
							</tr>
							<tr>
								<td>Income or Expense?</td>
								<td>{this.state.account.flow}</td>
							</tr>
							<tr>
								<td>Notes</td>
								<td>{this.state.account.notes}</td>
							</tr>
						</tbody>
					</table>

					<div className="has-text-centered ">
						{/* delete button to remove from DB */}
						<a>
							<div
								className="button is-danger is-pulled-right"
								onClick={this.handleDelete}
							>
								x
							</div>
						</a>
						{/* Returns back to the accounts page */}
						<a href="/accounts">
							<div className="button is-info is-pulled-right">back</div>
						</a>
					</div>
				</div>
			)
		}
	}
}

export default AccountPage
