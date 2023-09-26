import calculator from "calculator";

describe("sum testing", () => {
    it("should return the sum of two numbers", () => {
        const n1 = 5;
        const n2 = 7;
        const result = calculator.sum(n1, n2);
        expect(result).toEqual(n1 + n2);
    });

    it("should return the sub of two numbers", () => {
        const n1 = 5;
        const n2 = 7;
        const result = calculator.sub(n1, n2);
        expect(result).toEqual(n1 - n2);
    });

    it("should return the div of two numbers", () => {
        const n1 = 5;
        const n2 = 7;
        const result = calculator.div(n1, n2);
        expect(result).toEqual(n1 / n2);
    });

    it("should return the mult of two numbers", () => {
        const n1 = 5;
        const n2 = 7;
        const result = calculator.mul(n1, n2);
        expect(result).toEqual(n1 * n2);
    });


  });