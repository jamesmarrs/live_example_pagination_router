import { renderHook, act, cleanup } from "@testing-library/react";

import { useIsMounted } from "../use_is_mounted";

describe("useIsMounted", () => {
  test("should return true if component mounted", () => {
    const { result } = renderHook(() => useIsMounted());

    expect(result.current).toEqual({ current: true });
  });

  test("should return false if component unmounted", async () => {
    const { result } = renderHook(() => useIsMounted());

    // Emulate unmount
    await act(() => cleanup());
    expect(result.current).toEqual({ current: false });
  });
});
