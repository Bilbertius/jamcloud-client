import * as React from "react";
import * as ReactDOM from "react-dom";
import SongList from "../src/routes/SongList/SongList";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<SongList/>, div);
}