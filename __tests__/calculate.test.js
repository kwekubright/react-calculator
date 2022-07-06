import calculate from "../src/logics/calculate";

describe("calculate", () => { 
  test("should return {total: 0, next: null, operation: null} when buttonName is AC", () => {
    expect(calculate({ total: 0, next: null, operation: null }, "AC")).toEqual({ total: 0, next: null, operation: null });
  });

  test("should return {total: 7, next: null, operation: null} when buttonName is 3+4", () => {
    expect(calculate({ total: '3', next: '4', operation: '+' }, "=")).toEqual({ total: '7', next: null, operation: null });
  });
});