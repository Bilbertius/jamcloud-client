import * as React from "react";
import * as ReactDOM from "react-dom";
import Discover from "../src/components/Discover/Discover";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Discover/>, div);
}