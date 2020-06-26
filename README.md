# Deno Slides

Slides for a talk I gave to my team on Deno.

The slides are available here: https://dprgarner.github.io/deno-slides/

## Links

- Deno: https://deno.land/
- Deno Manual: https://deno.land/manual
- 10 Things I regret about Node.js: https://www.youtube.com/watch?v=M3BM9TB-8yA
- Udemy course on learning Deno: https://www.udemy.com/course/deno-the-complete-guide-zero-to-mastery/

## Developing

This project uses [mdx-deck][mdx-deck] for the slides, which are specified in [MDX][mdx] syntax [here][slides].

[mdx]: https://mdxjs.com/
[mdx-deck]: https://github.com/jxnblk/mdx-deck
[slides]: ./slides.mdx


To run this project:

```bash
> yarn && yarn start
```

To turn on speaker notes: `Option + P`.

To deploy the static site:
```bash
> yarn build
> yarn deploy
```
