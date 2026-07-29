import "@testing-library/jest-dom";

import { App } from "./App.js";
import { render, expect } from "@testing-library/react";

test("check header text", () => {
	render(App);
	const headingElement = screen.getByText("Welcome to React");
	expect(headingElement).toBeInTheDocument();
});
