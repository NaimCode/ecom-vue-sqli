import { debounce } from "../../../src/utils/functions";

describe("debounce", () => {
  test("should execute function after waiting period", () => {
    jest.useFakeTimers();

    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();

    expect(mockFn).not.toBeCalled();
    jest.advanceTimersByTime(499);
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(1);
    expect(mockFn).toBeCalled();
  });
});
