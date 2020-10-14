import React from "react";
import { Col, Row, Form, FormGroup, Input, Label, Button } from "reactstrap";
import availableRooms from "../../Utils/rooms";

const SettingsAndResult = (props) => {
	const roomOptions = availableRooms.map((room) => (
		<option key={room.x * room.y}>{`${room.x} x ${room.y}`}</option>
	));

	const setRoomSize = (event) => {
		props.setRoomSize({
			x:
				Math.floor(
					event.target.value.length > 6
						? event.target.value.substring(0, 2)
						: event.target.value.substring(0, 1)
				) - 1,
			y:
				Math.floor(
					event.target.value.length > 6
						? event.target.value.substring(event.target.value.length - 2)
						: event.target.value.substring(event.target.value.length - 1)
				) - 1,
		});
	};

	return (
		<Col md={3}>
			<Row style={{ justifyContent: "flex-end" }}>
				<Form>
					<FormGroup>
						<Label>Room size</Label>
						<Input type="select" onChange={(event) => setRoomSize(event)}>
							{roomOptions}
						</Input>
					</FormGroup>
				</Form>
			</Row>
			<Row style={{ justifyContent: "flex-end" }}>
				<Button color="warning" onClick={() => props.reset()}>
					Reset program
				</Button>
			</Row>
		</Col>
	);
};

export default SettingsAndResult;
