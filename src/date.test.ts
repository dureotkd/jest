import { after3days } from "./date";

test("3일 후를 리턴합니다", () => {
  const date = new Date();
  jest.useFakeTimers().setSystemTime(new Date(2024, 3, 9));
  expect(after3days()).toStrictEqual(new Date(2024, 3, 12));
});

test("0.1 + 0.2 = 0.3", () => {
  // * expect가 몇번 실행 되는지 확인
  expect.assertions(1);
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

afterEach(() => {
  jest.useRealTimers();
});
