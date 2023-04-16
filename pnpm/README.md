# [Fylgja] with [PNPM]

This example demonstrates how to set up [Fylgja] with [PNPM] using [SCSS] syntax.

The steps outlined cover the minimal requirements and configuration needed to get started.

[Fylgja]: https://fylgja.dev/
[PNPM]: https://pnpm.io/
[SCSS]: https://sass-lang.com/

## How to use

```sh
git clone https://github.com/fylgja/examples.git
cd examples/pnpm/
pnpm install
pnpm start
```

## Setup notes

[PNPM] does not support the concept of a [flat node_modules directory](https://pnpm.io/pnpm-vs-npm#npms-flat-tree), unlike NPM.

While this approach works well for node packages written in JavaScript, it may not be suitable for Sass-based node modules.

If you want to use [Fylgja] with [PNPM], you'll need to hoist each package to the public pattern. This creates a symlink in the root of node_modules directory so that the same pattern as with NPM works as expected.

To do this, you can create an `.npmrc` file with;

```properties
public-hoist-pattern[]=@fylgja/*
```
