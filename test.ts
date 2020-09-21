import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { clone } from "./mod.ts";

Deno.test("it should be able to clone surface properties", () => {
  const objA = {
    foo: 'foo',
  };

  const objB = clone(objA);

  objB.foo = 'bar';

  assertEquals(objA.foo, 'foo');
});

Deno.test("it should be able to clone deep properties", () => {
  const objA = {
    foo: {
      bar: 'bar',
    },
  };

  const objB = clone(objA);

  objB.foo.bar = 'foo';

  assertEquals(objA.foo.bar, 'bar');
});
