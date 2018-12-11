import React, { Component } from "react";

import Content from "../components/content";
import TableOfContents from "../components/table-of-contents";

export default class Documentation extends Component {
	render() {
		return (
			<div className="documentation container is-fluid">
				<div className="columns">
					<div className="column container-right">
						<div className="sidebar">
							<TableOfContents />
						</div>
					</div>
					<div className="column content">
						<Content />
					</div>
				</div>
			</div>
		);
	}
};