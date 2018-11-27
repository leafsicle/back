import React, { Component } from 'react'

class Account extends Component {
	state = {
		id: this.props.id,

		events: []
	}

	render() {
		return (
			<a href={`/accountPage/${this.state.id}`} className="box is-centered">
				<div className="">
					<h2>
						<strong>{this.props.name}</strong>
					</h2>
				</div>
			</a>
		)
	}
}

export default Account
