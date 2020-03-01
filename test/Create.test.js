import * as React from "react";
import * as ReactDOM from "react-dom";
import Create from "./src/components/CreateSong/Create";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Create />,  div);
}