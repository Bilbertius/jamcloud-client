import * as React from "react";
import * as ReactDOM from "react-dom";
import FrontPage from "../src/components/FrontPage/FrontPage";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<FrontPage />,  div);
}