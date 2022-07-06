import operate from "../../logics/operate";

describe("operate file test", () => {
  test("Should return 5+5 =10 ", () => {
    const result = operate(5, 5, "+");
    expect(result).toBe("10");
  });

  test("Should return the 10-5 = 5", () => {
    const result = operate(10, 5, "-");
    expect(result).toBe("5");
  });

  test("Should return the 10 x 5 = 50", () => {
    const result = operate(10, 5, "x");
    expect(result).toBe("50");
  });

  test("Should return the 10÷5 = 5", () => {
    const result = operate(10, 5, "÷");
    expect(result).toBe("2");
  });

  test("Should return the 10%5 = 0", () => {
    const result = operate(10, 5, "%");
    expect(result).toBe("0");
  });
});
