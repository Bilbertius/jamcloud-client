import * as React from "react";
import * as ReactDOM from "react-dom";
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<RegistrationForm/>, div);
};