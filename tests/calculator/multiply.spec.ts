import { multiply } from "../../src/calculator/multiply";

import { expect } from "chai";
import "mocha";

describe("Calculator", () => {
    describe("Multiply", () => {
        it("Should multiply 2x2", () => {
            const result = multiply(2, 2);
            expect(result).to.equal(4);
        });

        it("Should allow up to and including 100", () => {
            const result = multiply(100, 100);
            expect(result).to.equal(10000);
        });

        it("Should allow down to and including 0", () => {
            const result = multiply(0, 0);
            expect(result).to.equal(0);
        });

        it("Should throw a RangeError for a less than 0", () => {
            expect(() => {
                multiply(-1, 5);
            }).to.throw(
                RangeError,
                "Numbers passed in must be between 0 and 100"
            );
        });

        it("Should throw a RangeError for a greater than 100", () => {
            expect(() => {
                multiply(101, 5);
            }).to.throw(
                RangeError,
                "Numbers passed in must be between 0 and 100"
            );
        });

        it("Should throw a RangeError for b less than 0", () => {
            expect(() => {
                multiply(5, -1);
            }).to.throw(
                RangeError,
                "Numbers passed in must be between 0 and 100"
            );
        });

        it("Should throw a RangeError for b greater than 100", () => {
            expect(() => {
                multiply(5, 101);
            }).to.throw(
                RangeError,
                "Numbers passed in must be between 0 and 100"
            );
        });
    });
});
