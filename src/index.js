import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import 'css-reset.css'
import 'style.css'


const root = document.querySelector("#react-root")


render(<App></App>, root)