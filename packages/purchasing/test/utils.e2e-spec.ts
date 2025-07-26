import { removeProps } from "../src/util";

describe("utils#removeProps", () => {
  const testSimpleObj = { field1: "field1", field2: "field2" };

  it("should remove props at the top level", () => {
    expect(removeProps(testSimpleObj, ["field2"])).toEqual({
      field1: "field1",
    });
  });

  const testComplexObj = {
    field1: { nestedField1: "nestedField1" },
    field2: "field2",
  };

  it("should reomove props in nested objects", () => {
    expect(removeProps(testComplexObj, ["field1"])).toEqual({
      field2: "field2",
    });
  });
});
