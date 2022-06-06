import { add, sub } from "./App";

test("should add two numbers", () => {
  const sum = add(22, 11);
  expect(sum).toBe(33);
});
test("should subtract two num", () => {
  const subtract = sub(10, 5);
  expect(subtract).toBe(5);
});
