import React, { Component } from "react";

import Menu from "../components/menu";
import Content from "../components/content";
import TableOfContents from "../components/table-of-contents";

export default class Documentation extends Component {
	render() {
		return (
			<div className="documentation container is-fluid">
				<div className="sidebar-container">
					<div className="right-sidebar">
						<TableOfContents />
					</div>
					<div className="sidebar-content">
						<Content />
					</div>
				</div>
			</div>
		);
	}
};