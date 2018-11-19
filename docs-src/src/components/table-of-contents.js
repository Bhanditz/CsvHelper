import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-static";

import data from "../data/documentation/toc.json";

class Toc extends Component {

	getToc() {
		const { url } = this.props.match;
		const page = url.substring(url.lastIndexOf("/") + 1);
		console.log("page", page);
		console.log("data", data);
		const toc = data[page];
		console.log("toc", toc);

		return toc;
	}

	render() {
		const toc = this.getToc();

		return (
			<Fragment>
				{toc.map((item, i) => (
					<p key={i}>
						<Link to={item.path}>{item.title}</Link>
					</p>
				))}
			</Fragment>
		);
	}
};

export default withRouter(Toc);