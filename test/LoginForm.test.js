import * as React from "react";
import * as ReactDOM from "react-dom";
import LoginForm from "../src/components/LoginForm/LoginForm";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<LoginForm/>, div);
};