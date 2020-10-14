import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "reactstrap";

const Controls = (props) => {
	const [string, setString] = useState('');

	const handleControlButtonClick = (event, direction) => {
		event.preventDefault();
		setString(string + direction);
	};

	const onKeyPress = (event) => {
		const validKey =
			event.key === "r" ||
			event.key === "R" ||
			event.key === "l" ||
			event.key === "L" ||
			event.key === "f" ||
			event.key === "F";
		if (!validKey) {
			event.preventDefault();
		}
	};

	const runProgram = (event) => {
		event.preventDefault();
		props.runProgram(string);
		setString('')
		document.getElementById("sequence-form").reset();
	};

	return (
		<Col sm={12}>
			<Form className="text-align-center" id="sequence-form">
				<Input
					placeholder="insert your sequence here or use the control buttons..."
					onKeyPress={(event) => onKeyPress(event)}
					onChange={(event) => setString(event.target.value.toUpperCase())}
					value={string}
					className="uppercase"
				/>
				<Row style={{ justifyContent: "center", marginTop: 15 }}>
					<Button
						color="secondary"
						onClick={(event) => handleControlButtonClick(event, "F")}
					>
						F
					</Button>
				</Row>
				<Row style={{ justifyContent: "center", paddingTop: 5 }}>
					<Button
						color="secondary"
						style={{ marginRight: 10 }}
						onClick={(event) => handleControlButtonClick(event, "L")}
					>
						L
					</Button>
					<Button
						color="secondary"
						style={{ marginLeft: 10 }}
						onClick={(event) => handleControlButtonClick(event, "R")}
					>
						R
					</Button>
				</Row>
				<Button
					color="danger"
					onClick={(event) => {
						runProgram(event);
					}}
					style={{ marginTop: 5 }}
				>
					Run sequence
				</Button>
			</Form>
		</Col>
	);
};

export default Controls;
