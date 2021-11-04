"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Link = require("./Link");

/**
 * A straightforward link wrapper that renders an <a> with the passed props.
 * What we are testing here is that the Link component passes the right props to the wrapper and itself.
 */
var LinkWrapper = function LinkWrapper(props) {
  return /*#__PURE__*/_react.default.createElement("a", props);
}; // eslint-disable-line jsx-a11y/anchor-has-content


it("has a href attribute when rendering with linkWrapper", function () {
  var div = document.createElement("div");

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Link.Link, {
    href: "https://storybook.js.org/tutorials/",
    LinkWrapper: LinkWrapper
  }, "Link Text"), div);

  expect(div.querySelector('a[href="https://storybook.js.org/tutorials/"]')).not.toBeNull();
  expect(div.textContent).toEqual("Link Text");

  _reactDom.default.unmountComponentAtNode(div);
});