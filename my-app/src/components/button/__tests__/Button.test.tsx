import * as React from "react";
import * as renderer from "react-test-renderer";
import Button from '../button'
it("renders apply now correctly", () => {
  const tree = renderer.create(<Button name="hello"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
