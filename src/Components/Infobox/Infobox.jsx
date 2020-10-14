import React from "react";
import { Col } from "reactstrap";

const Infobox = () => (
	<Col md={3}>
		<h5 className="uppercase">Information</h5>
		<p>Welcome to MOVE-IT Robot!</p>
		<p>Here are the basics to program your robots movement:</p>
		<ul>
			<li>Use R, L or F to get the robot to move around</li>
			<li>R = turn right</li>
			<li>L = turn left</li>
			<li>F = go forward</li>
			<li>
				You will start with a random starting position and when you run the
				sequence the display will show you your robots final position, the
				sequence you programmed and your robots initial (starting) position
			</li>
			<li>
				You can change the size of the room, the starting position (X- and
				Y-axis) and the direction your robot should intitally face by using the
				setup panel on the far right
			</li>
			<li>
				You can at any time reset the program by clicking the "Reset
				program"-button (it's yellow so you won't miss it) ;)
			</li>
		</ul>
		<b>Have fun and enjoy!</b>
	</Col>
);

export default Infobox;
