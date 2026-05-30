import { describe, expect, it } from "vitest";
import { formatCurrency } from "./format";

describe("formatCurrency", () => {
    it("format cents as KSh with comma separators", () => {
        expect(formatCurrency(150000)).toBe("KSh 1,500");
    });
    it("return KSh 0 for 0", () => {
        expect(formatCurrency(0)).toBe("KSh 0");
    });
});