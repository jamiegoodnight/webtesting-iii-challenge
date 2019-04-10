import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("<Dashboard />", () => {
  it("renders!", () => {
    render(<Dashboard />);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should toggle Closed when close gate button is clicked", () => {
    const { getByText } = render(<Dashboard />);

    const closeButton = getByText(/Close Gate/);
    fireEvent.click(closeButton);
    getByText(/Closed/);
  });

  it("should toggle Locked when close gate button is clicked, and the lock gate button is clicked", () => {
    const { getByText } = render(<Dashboard />);

    const closeButton = getByText(/Close Gate/);
    fireEvent.click(closeButton);
    getByText(/Closed/);
    const lockButton = getByText(/Lock Gate/);
    fireEvent.click(lockButton);
    getByText(/Locked/);
  });
});
