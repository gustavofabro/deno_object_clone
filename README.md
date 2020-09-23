<h1 align="center">🦕 Clone</h1>

<p align="center">
  Deno module for deep object clone
</p>

<p align="center">
  <a href="https://github.com/gustavofabro/deno_kill_port/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/gustavofabro/deno_kill_port" alt="Deno kill-port is under MIT license." />
  </a>
</p>


Clone is available through:
- https://deno.land/x/object_clone@1.0.0

## Usage

```typescript
import { clone } from "https://deno.land/x/object_clone@1.0.0/mod.ts";

const objA = {
  foo: {
    bar: "bar",
    barFn: () => "bar",
  },
};

const objAClone = clone(objA);
```

## Test

```bash
deno test
```

## Format code

```bash
deno fmt
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/manual/contributing/style_guide)
- [Deno Gitter](https://gitter.im/denolife/Lobby)
