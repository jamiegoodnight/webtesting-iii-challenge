import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("renders!", () => {
    render(<Controls />);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
