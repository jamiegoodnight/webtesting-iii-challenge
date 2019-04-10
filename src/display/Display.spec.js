import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Display from "./Display";

afterEach(cleanup);

describe("<Display />", () => {
  it("renders!", () => {
    render(<Display />);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
