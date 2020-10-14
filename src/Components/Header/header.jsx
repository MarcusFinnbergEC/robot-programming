import React from "react";
import { Row } from "reactstrap";

const Header = () => (
	<Row
		className="header-with-background"
		style={{
			backgroundImage: `url(${process.env.PUBLIC_URL}/Media/robot-background.png)`,
		}}
	>
		<h1 className="uppercase headline">Move-it Robot</h1>
	</Row>
);

export default Header;
