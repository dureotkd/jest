import toStrictEqual from "./toStrictEqual";

test("객체는 toStrictEqual로 비교한다", () => {
  expect(toStrictEqual()).toStrictEqual({ a: "hello" });
});

test("배열도 toStrictEqual 사용해야합니다", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
});
