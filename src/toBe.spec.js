import sum from "./toBe";
/**
 * & npx cross-env NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" jest
 */
test("sum 함수는 두 숫자를 더해야 합니다", () => {
  expect(sum(1, 2)).toBe(3);
});
