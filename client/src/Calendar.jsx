import React, { Component } from 'react'
// import BigCalendar from 'react-big-calendar-like-google'
// import moment from 'moment'
import DefaultHeader from './DefaultHeader'

class Calendar extends Component {
	render() {
		return (
			<div>
				<DefaultHeader title="Calendar" />
				{/* Setup the localizer by providing the moment (or globalize) Object */}
				{/* to the correct localizer. */}
				<div>
					I'm a calendar
					{/* <BigCalendar
						events={myEventsList}
						startAccessor="startDate"
						endAccessor="endDate"
					/> */}
				</div>
			</div>
		)
	}
}

export default Calendar
