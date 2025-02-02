import { nopromise, okpromise } from "./asyncFunction";

test("promise resolve 테스트", () => {
  const okSpy = jest.fn(okpromise);
  return expect(okSpy()).resolves.toBe("ok");
});

test("promise reject 테스트", () => {
  const noSpy = jest.fn(nopromise);
  return expect(noSpy).rejects.toBe("no");
});

test("promise reject 테스트 (더 좋은 방법)", async () => {
  const noSpy = jest.fn(nopromise);

  try {
    await noSpy();
  } catch (error) {
    expect(error).toBe("no");
  }
});
