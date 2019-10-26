"use strict";

const validator = require("./lib/validator.js");

const schema = {
  fields: {
    id: { type: "string", required: true },
    name: { type: "string", required: true },
    age: { type: "number" },
    children: { type: "array", valueType: "string" }
  }
};

const record = {
  id: "123-123",
  name: "foo",
  age: 12,
  children: []
};

console.log(validator.isValid(schema, record));
