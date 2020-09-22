// deno-lint-ignore-file

export function clone(object: any) {
  const cloneObj = {} as any;

  for (const attr in object) {
    if (typeof object[attr] == "object") {
      cloneObj[attr] = clone(object[attr]);
    } else {
      cloneObj[attr] = object[attr];
    }
  }

  return cloneObj;
}
