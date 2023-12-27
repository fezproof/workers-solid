import { action } from "@solidjs/router";

export const actionTest = action(async () => {
  "use server";

  console.log("hello world");

  return "hello world";
});
