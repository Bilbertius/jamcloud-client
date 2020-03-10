import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SongListProvider } from "./contexts/SongListContext";

ReactDOM.render(
  <BrowserRouter>
    <SongListProvider>
      <App />
    </SongListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
