import { assert, assertEquals, assertStrictEquals } from "./test_deps.ts";
import { clone } from "./mod.ts";

Deno.test("it should be able to clone surface properties", () => {
  const objA = {
    foo: "foo",
    barFn: () => "bar",
  };

  const objB = clone(objA);

  objB.foo = "bar";
  objB.barFn = () => "foo";

  assertEquals(objA.foo, "foo");
  assertEquals(objA.barFn(), "bar");
});

Deno.test("it should be able to clone deep properties", () => {
  const objA = {
    foo: {
      bar: "bar",
      barFn: () => "bar",
    },
  };

  const objB = clone(objA);

  objB.foo.bar = "foo";
  objB.foo.barFn = () => "foo";

  assertEquals(objA.foo.bar, "bar");
  assertEquals(objA.foo.barFn(), "bar");
});

Deno.test("it should be able to clone array", () => {
  const arrayA = [1, 2, 3];

  const arrayB = clone(arrayA);

  arrayB.push(4);

  assert(!arrayA.includes(4));
});

Deno.test("it should be able to clone deep array", () => {
  const arrayA = [[1, 2]];

  const arrayB = clone(arrayA);

  arrayB[0].push(3);

  assert(!arrayA[0].includes(3));
});

Deno.test("it should be able to return the value sent when it is not an object", () => {
  const objA = clone("bar");
  const objB = clone(null);
  const objC = clone(undefined);

  assertEquals(objA, "bar");
  assertStrictEquals(objB, null);
  assertStrictEquals(objC, undefined);
});
