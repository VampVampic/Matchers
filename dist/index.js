"use strict";

var _app = _interopRequireDefault(require("./js/app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const userObject = [{
  name: 'мечник',
  health: 10
}, {
  name: 'маг',
  health: 100
}, {
  name: 'лучник',
  health: 80
}];
console.log((0, _app.default)(userObject));