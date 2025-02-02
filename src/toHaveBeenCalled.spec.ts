import sum from "./toBe";

// ^ 실무에서 많이 사용안하는 테스트 코드
test("sum 함수가 호출되는지 확인합니다", () => {
  const sumfunc = jest.fn(sum);
  sumfunc(1, 2);
  expect(sumfunc).toHaveBeenCalled();
});

// & 실무에서 사용하는 테스트 코드
test("sum 함수가 1번 호출되는지 확인합니다", () => {
  const sumfunc = jest.fn(sum);
  sumfunc(1, 2);
  expect(sumfunc).toHaveBeenCalledTimes(1);
});

// & 실무에서 사용하는 테스트 코드
test("sum 함수가 1,2와 함께 호출되었다", () => {
  const sumfunc = jest.fn(sum);
  sumfunc(1, 2);
  expect(sumfunc).toHaveBeenCalledWith(1, 2);
});
