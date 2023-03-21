import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    expect(result.current.count).toBe(0);
  });

  test("should render the initial props", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("should decrement", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 2 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(1);
  });
});
