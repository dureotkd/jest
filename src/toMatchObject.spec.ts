import obj from "./toMatchObject";

test("클래스 비교는 toMatchObject로 해야한다", () => {
  expect(obj(1)).toMatchObject({ a: 1 });
});
