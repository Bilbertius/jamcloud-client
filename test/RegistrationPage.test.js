import * as React from "react";
import * as ReactDOM from "react-dom";
import RegistrationPage from "../src/routes/RegistrationPage/RegistrationPage";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<RegistrationPage/>, div);
}