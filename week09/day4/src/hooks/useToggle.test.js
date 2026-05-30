
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useToggle } from "./useToggle";




describe("useToggle", () => {
    it("starts at false by default", () => {
        const { result } = renderHook(() => useToggle());
        expect(result.current[0]).toBe(false);
    });

    it("toggle to true on call", () => {
        const { result } = renderHook(() => useToggle());
        act(() => {
            result.current[1]();
        });
        expect(result.current[0]).toBe(true);
    });

});

