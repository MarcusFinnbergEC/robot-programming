import React, { useState } from "react";
import { Col, Row, Form, FormGroup, Input, Label, Button } from "reactstrap";
import availableRooms from "../../Utils/rooms";
import { getIntFromString } from "../../Utils/mathHelpers";

const SettingsAndResult = (props) => {
	const [xAxis, setXAxis] = useState(0);
	const [yAxis, setYAxis] = useState(0);
	const [direction, setDirection] = useState("N");
	const [newRoomSize, setNewRoomSize] = useState(props.roomSize);
	const roomOptions = availableRooms.map((room) => (
		<option key={room.x * room.y}>{`${room.x} x ${room.y}`}</option>
	));

	const setRoomSize = (event) => {
		setNewRoomSize({
			x: getIntFromString(event.target.value) - 1,
			y: getIntFromString(event.target.value) - 1,
		});
	};

	const xAndYAxisOptions = [];

	for (let i = 0; i <= newRoomSize.x; i++) {
		xAndYAxisOptions.push(i);
	}

	const setCustomSetup = () => {
		props.setCustomSetup({ xAxis, yAxis, direction, newRoomSize });
		document.getElementById("settings-form").reset();
	};

	return (
		<Col md={3}>
			<Row style={{ justifyContent: "flex-end" }}>
				<Form id="settings-form">
					<FormGroup>
						<Label>Room size</Label>
						<Input type="select" onChange={(event) => setRoomSize(event)}>
							{roomOptions}
						</Input>
					</FormGroup>
					<FormGroup>
						<Label>Starting position X-axis</Label>
						<Input
							type="select"
							onChange={(event) =>
								setXAxis(getIntFromString(event.target.value))
							}
						>
							{xAndYAxisOptions.map((number) => (
								<option key={number * 154}>{number}</option>
							))}
						</Input>
					</FormGroup>
					<FormGroup>
						<Label>Starting position Y-axis</Label>
						<Input
							type="select"
							onChange={(event) =>
								setYAxis(getIntFromString(event.target.value))
							}
						>
							{xAndYAxisOptions.map((number) => (
								<option key={number * 222}>{number}</option>
							))}
						</Input>
					</FormGroup>
					<FormGroup>
						<Label>Starting Direction</Label>
						<Input
							type="select"
							onChange={(event) => setDirection(event.target.value)}
						>
							<option key={100000001} value="N">
								N
							</option>
							<option key={100000002} value="E">
								E
							</option>
							<option key={100000003} value="S">
								S
							</option>
							<option key={100000004} value="W">
								W
							</option>
						</Input>
					</FormGroup>
				</Form>
			</Row>
			<Row style={{ justifyContent: "flex-end" }}>
				<Button color="primary" onClick={() => setCustomSetup()}>
					Save
				</Button>
			</Row>
		</Col>
	);
};

export default SettingsAndResult;
