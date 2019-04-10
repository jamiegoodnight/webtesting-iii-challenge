import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

afterEach(cleanup);

describe("Controls tests!", () => {
  it("renders!", () => {
    render(<Controls />);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should toggle the correct buttons and trigger their correct effects.", () => {
    const { getByText } = render(<Dashboard />);

    const closeButton = getByText(/Close Gate/);
    const lockButton = getByText(/Lock Gate/);
    expect(lockButton).toBeDisabled();
    fireEvent.click(closeButton);
    getByText(/Closed/);
    fireEvent.click(lockButton);
    getByText(/Locked/);
    const openButton = getByText(/Open Gate/);
    expect(openButton).toBeDisabled();
    const unlockButton = getByText(/Unlock Gate/);
    fireEvent.click(unlockButton);
    getByText(/Unlocked/);
    fireEvent.click(openButton);
    getByText(/Open/);
  });
});
