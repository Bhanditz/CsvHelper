import React, { Component, Fragment } from "react"

import Header from "./header"
import Footer from "./footer";

export default class Layout extends Component {

	render() {
		return (
			<Fragment>
				<a className="fork-me-on-github" href="https://github.com/joshclose/csvhelper" target="_blank">
					<img src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub" />
				</a>
				<Header />
				<div className="body">
					{this.props.children}
				</div>
				<Footer />
			</Fragment>
		)
	}

}
