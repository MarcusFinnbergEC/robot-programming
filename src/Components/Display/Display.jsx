import React from "react";
import { Col, Row } from "reactstrap";
import Controls from "../Controls/Controls";

const Display = (props) => {
	return (
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
				</div>
			)}
			<Row>
				<Controls runProgram={(sequence) => props.runProgram(sequence)} />
			</Row>
		</Col>
	);
};

export default Display;
