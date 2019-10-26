"use strict";

let validator = {};

validator.isString = input => typeof input === "string";

validator.isArray = input => Array.isArray(input);

validator.isNumber = input => typeof input === "number";

validator.isObject = input =>
  typeof input === "object" && !Array.isArray(input);

validator.isType = (type, value) => {
  switch (type) {
    case "string":
      return validator.isString(value);
    case "number":
      return validator.isNumber(value);
    case "array":
      return validator.isArray(value);
    case "object":
      return validator.isObject(value);
  }
};

validator.allTypesMatch = (fields, record) => {
  for (let property of Object.keys(fields)) {
    if (!validator.isType(fields[property].type, record[property])) {
      return false;
    }
  }
  return true;
};

validator.allRequiredPropertiesPresent = (fields, record) => {
  for (let property of Object.keys(fields)) {
    if (
      Object.keys(fields[property]).includes("required") &&
      !Object.keys(record).includes(property)
    ) {
      return false;
    }
  }
  return true;
};

validator.isValid = (schema, record) =>
  validator.allTypesMatch(schema.fields, record) &&
  validator.allRequiredPropertiesPresent(schema.fields, record);

module.exports = validator;

// test
