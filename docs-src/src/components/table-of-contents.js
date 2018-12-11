import React, { Component, Fragment } from "react";
import { withRouter, Link, withRouteData } from "react-static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

class Toc extends Component {

	state = {
		openTocItems: []
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
						<Link className="toc-item-name" to={`/${item.path}`}>{item.title}</Link>
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
		const { toc } = this.props;

		return (
			<Fragment>
				{toc && (
					<div className="toc">
						{this.renderTocItems(toc.children, 0)}
					</div>
				)}
			</Fragment>
		);
	}
};

export default withRouteData(withRouter(Toc));