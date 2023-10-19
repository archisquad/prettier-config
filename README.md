# prettier-config

Our prettier config with TailwindCSS support & imports sorting

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

## How to use it?

If you just want to apply config in your repository, add key in `package.json`:

```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@archisquad/prettier-config"
}
```

If you don’t want to use `package.json`, you can use any of the supported
extensions to export a string, e.g. `.prettierrc.json`:

```json
"@archisquad/prettier-config"
```

## Development

At first make a local copy of this repository, then install all the dependencies
using `pnpm` or package manager of your choice:

```bash
git clone git@github.com:archisquad/prettier-config.git
cd prettier-config
pnpm i
```

Then, create a branch, make your changes in code, commit it following
[gitmoji](https://gitmoji.dev/) &
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) styles.

After that, push it and then create a
[Pull Request](https://github.com/archisquad/prettier-config/pulls) with target
to `develop` branch.

## License

[MIT](./LICENSE.md)

<!-- Badges -->

[npm-version-src]:
  https://img.shields.io/npm/v/@archisquad/prettier-config?style=flat-square
[npm-version-href]: https://npmjs.com/package/@archisquad/prettier-config
[npm-downloads-src]:
  https://img.shields.io/npm/dm/@archisquad/prettier-config?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@archisquad/prettier-config
