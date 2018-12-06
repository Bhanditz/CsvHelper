import React, { Component } from "react";

import Menu from "../components/menu";
import Content from "../components/content";
import TableOfContents from "../components/table-of-contents";

export default class Documentation extends Component {
	render() {
		return (
			<div className="documentation container is-fluid">
				<div className="columns">
					{/* <div className="column left-sidebar">
						<Menu />
					</div> */}
					<div className="column right-sidebar">
						<TableOfContents />
					</div>
					<div className="column">
						<Content />
					</div>
				</div>
			</div>
		);
	}
};