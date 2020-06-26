import { future } from "@mdx-deck/themes";
export const theme = future;

# Deno

## Let's talk about Node

- Came out ~2009
- Designed for server-side JavaScript
- Single threaded
- Event loop
- Non-blocking I/O

---

Ryan Dahl: Go is better for fast servers

JS is nice for quick one-off calculations: prototyping, scientific computing

For a server, where you need stability and control: static is nicer.

- Regret: not sticking w/ promises

- Regret: no security. v8 is a very secure sandbox, but Node.js just didn't use any of that at all. You can exploit p. much anything
  - e.g. a Linter. Surely I can run a tool like that without worrying that it'll take over my computer?

- Regret: GYP.
  - The way that Node links to native C/C++ libraries.
  - V8 originally used it, but dropped it. Now only Node uses it.
  - It's shite.
  - Weird interface. Unmaintained by V8 (Chrome).

- Regret: package.json
  - require() syntax uses it for module resolution, so it's built in to Node.js.
  - npm is the de-facto standard - a privately-controlled reposity for all that OS code.
  - require('mymodule') is not specific. Need to know where it could come from.
  - Need to know {"dependencies": {"mymodule": "^0.0.1"}} too.
  - It cemented the idea of a "module" as a directory of files. i.e. you now need at least package.json. This is a divergence from browser JS, where you _only_ have isolated files.
  - (R.D.) views most of package.json as boilerplate noise. Licence? Repo? Description? We need package.json to say where modules resolve to. All I'm trying to do is link to another library.
  - (D.G not sure I have this big a problem with it.)

- Regret: node_modules
  - Vendor-by-default: installs everything locally.
  - That makes it fucking massive.
  - node_modules resolution algorithm is really complex.
  - Honestly, $NODE_PATH would have worked. (WHAT IS THIS?)

- Regret: require('module'), not require('module.js').
  - The module loader has to query multiple places to figure out where the file is
  - Less explicit, more complex than it needs to be.

- Regret: index.js
  - If you think something is "cute" to add in, don't do it.
  - Adds unnecessary complexity.


All regrets w/ Node.JS are about how it manages user code. He was really focusing on the event I/O early on, and not really planning that side of things.

---

Takes inspiration from Go.

## Vendoring

> Vendoring is the act of making your own copy of the 3rd party packages your project is using. Those copies are traditionally placed inside each project and then saved in the project repository.

----

Aims of Deno:

- Still want event-driven I/O. That worked.
- Secure by default. Pass in flags.
- All system calls are done by message passing
  - A single entrypoint in and out of the VM
  - protobuf serialization
  - Two fns: send and recv.

TypeScript built-in.

- No attempt at Node compatibilty.
  - If you do, then you'll just end up building Node.
  - No node_modules.
- Import directly. By on the web.
- First attempt: download and cache. It then never updates it again. Unless you do `--reload` to rebuild it.
- Vendoring can be done if you want to specify the directory.

- Single executable.
- Die immediately on unhandled promise.
- Top-level await.
- Browser-compatible where functionality overlaps.
- `window` for global.
  -- It was and is a dumb name, but `global` in Node was a bad choice because we now don't have compatibilty.

---

Details:
- window.onload
- window.addEventListener
---

### Sources

- 10 things I regret about Node.js https://www.youtube.com/watch?v=M3BM9TB-8yA
