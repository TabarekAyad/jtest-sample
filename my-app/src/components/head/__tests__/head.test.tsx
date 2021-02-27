import * as React from "react";
import * as renderer from "react-test-renderer";
import Head from '../head'

it("this is working head", () => {
  const tree = renderer.create(<Head/>).toJSON();
  expect(tree).toMatchSnapshot();
});
