import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import data from "../data/documentation/toc.json";

class Toc extends Component {

	state = {
		openTocItems: []
	}

	getToc() {
		const { url } = this.props.match;
		const page = url.substring(url.lastIndexOf("/") + 1);
		const toc = data[page];

		return toc;
	}

	handleItemToggleClick = (item) => {
		const itemIndex = this.state.openTocItems.indexOf(item.path);

		const openTocItems = itemIndex === -1
			? [...this.state.openTocItems, item.path]
			: [...this.state.openTocItems].filter(i => i !== item.path)

		this.setState({ openTocItems });
	}

	renderTocItems(items, nestingIndex) {
		const { openTocItems } = this.state;

		return (
			<Fragment>
				{items.map((item, i) => (
					<div key={i} className="toc-item" style={{ marginLeft: (20 * nestingIndex) }}>
						{item.children && (
							<a className="toc-item-toggle" onClick={this.handleItemToggleClick.bind(this, item)}>
								<span className="icon">
									{openTocItems.includes(item.path) && (
										<FontAwesomeIcon icon={faAngleUp} />
									)}
									{!openTocItems.includes(item.path) && (
										<FontAwesomeIcon icon={faAngleDown} />
									)}
								</span>
							</a>
						)}
						<Link to={item.path}>{item.title}</Link>
						{openTocItems.includes(item.path) && (
							<Fragment>
								{item.children && this.renderTocItems(item.children, nestingIndex + 1)}
							</Fragment>
						)}
					</div>
				))}
			</Fragment>
		);
	}

	render() {
		const toc = this.getToc();

		return (
			<div className="toc">
				{this.renderTocItems(toc, 0)}
			</div>
		);
	}
};

export default withRouter(Toc);