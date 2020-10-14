import React from "react";
import { Row } from "reactstrap";

const Header = () => (
	<Row
		style={{
			justifyContent: "center",
			padding: "5rem",
			marginBottom: 25,
			backgroundColor: "#080808",
		}}
	>
		<h1 className="uppercase headline">Move-it Robot</h1>
	</Row>
);

export default Header;
