import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { clone } from "./mod.ts";

Deno.test("it should be able to clone surface properties", () => {
  const objA = {
    foo: 1,
  };

  const objB = clone(objA);

  objB.foo = 2;

  assertEquals(objA.foo, 1);
});

Deno.test("it should be able to clone deep properties", () => {
  const objA = {
    bar: 2,
    foo: {
      bar: 1,
    },
  };

  const objB = clone(objA);

  objB.foo.bar = 3;

  assertEquals(objA.foo.bar, 1);
});
