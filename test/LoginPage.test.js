import * as React from "react";
import * as ReactDOM from "react-dom";
import LoginPage from "../src/routes/LoginPage/LoginPage";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<LoginPage/>, div);
}