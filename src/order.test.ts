import { first, second, last } from "./order";

test("first->second->last", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(last);

  spy1();
  spy2();
  spy3();

  // & spy1이 spy2보다 빨리 실행됐어?
  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
    spy2.mock.invocationCallOrder[0]
  );

  // * 위와 같지만 훨신 명확
  expect(spy1).toHaveBeenCalledBefore(spy2);

  // & spy1이 spy2보다 늦게 실행됐어?
  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
    spy2.mock.invocationCallOrder[0]
  );

  // * 위와 같지만 훨신 명확
  expect(spy3).toHaveBeenCalledAfter(spy2);
});
