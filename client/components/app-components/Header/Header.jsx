import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
	componentDidMount(){
		componentHandler.upgradeDom();
	}
	render() {
		return (
			<header className="mdl-layout__header mdl-color--primary">
				<div className="mdl-layout__header-row">
					{this.props.children}
				</div>
			</header>
		);
	}
}

export default Header;