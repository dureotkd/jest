import obj from "./mockFunction";

test("obj.minus에 스파이를 심고 리턴값을 바꾸게", () => {
  /**
   * * 테스트를 위해 함수는 실행하고 싶지만 (민감한 정보 DB삽입등 조회)
   * & 실제 실행은 안하고 함수를 바꿔 치고싶을때 mockImplementation 사용
   */
  const spyFn = jest.spyOn(obj, "add");

  spyFn.mockImplementation((a, b) => a + b);
  expect(obj.add(1, 2)).toBe(3);

  // & clear안하면 밑에 테스트까지 영향을 끼친다 (중첩 효과)
  spyFn.mockClear(); // Times , with 초기화
  spyFn.mockReset(); // mockClear + mockImplementation(() => {})
  spyFn.mockRestore(); // 아예 다 없애버림
});

test("obj.minus에 스파이를 심고 리턴값을 바꾸게 (MockReturnValue)", () => {
  /**
   * * 테스트를 위해 함수는 실행하고 싶지만 (민감한 정보 DB삽입등 조회)
   * & 실제 실행은 안하고 리턴값만 바꿔 치고싶을떄 mockReturnValue 사용
   *
   */
  jest.spyOn(obj, "add").mockReturnValue(3);
  expect(obj.add(1, 2)).toBe(3);
});
