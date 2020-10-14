import React from "react";
import { Col, Row } from "reactstrap";
import Controls from "../Controls/Controls";

const Display = (props) => (
	<Col md={6}>
		{props.runnedSequence ? (
			<div className="display text-align-center">
				<p>Your robots final position is:</p>
				<b>{props.finalPosition}</b>
				<p>Sequence runned:</p>
				<b>{props.runnedSequence || "none"}</b>
				<p>Your robots starting position was:</p>
				<b>{props.startingPosition}</b>
			</div>
		) : (
			<div className="display text-align-center">
				<p>Your starting position is:</p>
				<b>{props.startingPosition}</b>
				<p>Current room size is:</p>
				<b>{`${props.roomSize.x + 1} x ${props.roomSize.y + 1}`}</b>
			</div>
		)}
		<Row>
			<Controls
				runProgram={(sequence) => props.runProgram(sequence)}
				reset={() => props.reset()}
			/>
		</Row>
	</Col>
);

export default Display;
