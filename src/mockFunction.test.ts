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

/**
 * & descride  안에있ㄲ는 before~은 안에서만 실행된다
 * * 바깥은 전부 다 실행된다
 * ^ 말그대로 그룹화~
 */
describe("beforEach/afterEach", () => {
  test("1", () => {});
  test("2", () => {});

  beforeAll(() => {
    console.log("이 파일에 준비사항 실행");
  });

  beforeEach(() => {
    console.log("각 테스트 전에 실행");
  });
});

beforeAll(() => {
  console.log("이 파일에 준비사항 실행");
});

beforeEach(() => {
  console.log("각 테스트 전에 실행");
});

afterEach(() => {
  console.log("각 테스트 후에 실행");

  // 싹다 제거
  jest.restoreAllMocks();
});

afterAll(() => {
  console.log("모든 테스트가 끝난 후");
});

test.todo("테스트 나중에 만들어야지 ~");

test.skip("정말 급할떄 스킵", () => {});
