/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class Test extends Component {
	render() {
		document.addEventListener('DOMContentLoaded', () => {
			// Get all "navbar-burger" elements
			const $navbarBurgers = Array.prototype.slice.call(
				document.querySelectorAll('.navbar-burger'),
				0
			)

			// Check if there are any navbar burgers
			if ($navbarBurgers.length > 0) {
				// Add a click event on each of them
				$navbarBurgers.forEach(el => {
					el.addEventListener('click', () => {
						// Get the target from the "data-target" attribute
						const target = el.dataset.target
						const $target = document.getElementById(target)

						// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
						el.classList.toggle('is-active')
						$target.classList.toggle('is-active')
					})
				})
			}
		})
		return (
			<nav class="navbar" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="https://bulma.io">
						<img
							src="https://bulma.io/images/bulma-logo.png"
							width="112"
							height="28"
						/>
					</a>

					<a
						role="button"
						class="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>

				<div id="navbarBasicExample" class="navbar-menu">
					<div class="navbar-start">
						<a class="navbar-item">Home</a>

						<a class="navbar-item">Documentation</a>

						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">More</a>

							<div class="navbar-dropdown">
								<a class="navbar-item">About</a>
								<a class="navbar-item">Jobs</a>
								<a class="navbar-item">Contact</a>
								<hr class="navbar-divider" />
								<a class="navbar-item">Report an issue</a>
							</div>
						</div>
					</div>

					<div class="navbar-end">
						<div class="navbar-item">
							<div class="buttons">
								<a class="button is-primary">
									<strong>Sign up</strong>
								</a>
								<a class="button is-light">Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Test