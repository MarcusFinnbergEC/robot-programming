import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "reactstrap";
import { validateStringValueOrKey } from "../../Utils/validators";

const Controls = (props) => {
	const [string, setString] = useState("");

	const handleControlButtonClick = (event, direction) => {
		event.preventDefault();
		setString(string + direction);
	};

	const onKeyPress = (event) => {
		if (!validateStringValueOrKey(event.key)) {
			event.preventDefault();
		}
	};

	const validatePastedString = (event) => {
		const pastedString = (event.clipboardData || window.clipboardData).getData(
			"text"
		);
		let isValid = true;
		[...pastedString].forEach((value) => {
			if (!validateStringValueOrKey(value)) {
				isValid = false;
			}
		});
		if (isValid) {
			setString(event.target.value.toUpperCase());
		} else {
			event.preventDefault();
			alert(
				"NO VALID MOVEMENT PATTERN. YOU CAN ONLY USE R, L AND F. MAKE SURE THAT YOU DON'T HAVE WHITESPACE BEFORE OR AFTER"
			);
		}
	};

	const runProgram = (event) => {
		event.preventDefault();
		props.runProgram(string);
		setString("");
		document.getElementById("sequence-form").reset();
	};

	return (
		<Col sm={12}>
			<Form className="text-align-center" id="sequence-form">
				<Row>
					<Col sm={12}>
						<Input
							placeholder="insert your sequence here or use the control buttons..."
							onKeyPress={(event) => onKeyPress(event)}
							onChange={(event) => setString(event.target.value.toUpperCase())}
							onPaste={(event) => validatePastedString(event)}
							value={string}
							className="uppercase"
						/>
					</Col>
					<Col md={6}>
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
					</Col>
					<Col md={6}>
						<Row style={{ flexDirection: 'column', justifyContent: "space-around", alignItems: 'center', marginTop: 15}}>
							<Button
								color="danger"
								onClick={(event) => {
									runProgram(event);
								}}
							>
								Run sequence
							</Button>
							<Button color="warning" onClick={() => props.reset()} style={{ marginTop: 5 }}>
								Reset program
							</Button>
						</Row>
					</Col>
				</Row>
			</Form>
		</Col>
	);
};

export default Controls;