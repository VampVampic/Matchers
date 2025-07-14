"use strict";

var _app = _interopRequireDefault(require("../app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test('Проверка сортировка по убыванию', () => {
  const data = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг',
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }];
  const expectedData = [{
    name: 'маг',
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }, {
    name: 'мечник',
    health: 10
  }];
  const sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(expectedData);
});
test('проверка на отсутвие поля: name', () => {
  const data = [{
    name: 'мечник',
    health: 10
  }, {
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }];
  const sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(null);
});
test('проверка на отсутвие поля: health', () => {
  const data = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг'
  }, {
    name: 'лучник',
    health: 80
  }];
  const sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(null);
});
test('проверка поля: health на строку', () => {
  const data = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг',
    health: 'health'
  }, {
    name: 'лучник',
    health: 80
  }];
  const sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(null);
});