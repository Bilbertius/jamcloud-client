import * as React from "react";
import * as ReactDOM from "react-dom";
import SongListItem from "../src/components/SongListItem/SongListItem";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<SongListItem />,  div);
}