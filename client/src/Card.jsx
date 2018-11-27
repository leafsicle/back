import React, { Component } from 'react'

class Card extends Component {
	render() {
		return (
			<a href={this.props.urlLink}>
				<div className="card">
					<div className={this.props.className}>
						{/* The className title below indicates a class and not a value. just to remind myself */}
						<h1>{this.props.cardName}</h1>
						<h2>{this.props.cardValue}</h2>
						<h3 className="subtitle">{/* if needed */}</h3>
					</div>
				</div>
			</a>
		)
	}
}

export default Card
