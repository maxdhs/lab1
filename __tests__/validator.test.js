"use strict";

const validator = require("../lib/validator.js");

const str = "max";
const arr = [];

describe("the input matches the proper type", () => {
  it("input is a string", () => {
    expect(validator.isString(str)).toBeTruthy();
  });
  it("input is a array", () => {
    expect(validator.isArray(arr)).toBeTruthy();
  });
});
