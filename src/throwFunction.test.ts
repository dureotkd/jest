import { error } from "./throwFunction";

test("에러 테스트", () => {
  expect(() => error()).toThrow(Error);
});

test("에러 테스트 (더 좋은방법)", () => {
  try {
    error();
  } catch (err) {
    expect(err).toStrictEqual(new Error());
  }
});
