# Phobos

[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/phobos)

[Phobos](https://deimos.app/phobos/) is an experimental general purpose language. Phobos is heavily inspired by JavaScript, TypeScript and Dart. Phobos compiles to multiple targets including plain JavaScript, TypeScript, x86 assembly and RISCV x64. Try it out at the [playground](https://deimos.app/phobos/play/), and stay up to date via [our blog](https://deimos.app/blog/category/phobos).

Find others who are using Phobos at [our community page](https://deimos.app/phobos/community/).

## Installing

For the latest stable version:

```bash
npm install -g phobos
```

## Contribute

There are many ways to [contribute](https://github.com/Deimos-Applications/phobos/blob/main/CONTRIBUTING.md) to Phobos.

- [Submit bugs](https://github.com/Deimos-Applications/phobos/issues) and help us verify fixes as they are checked in.
- Review the [source code changes](https://github.com/Deimos-Applications/phobos/pulls).
- [Contribute bug fixes](https://github.com/Deimos-Applications/phobos/blob/main/CONTRIBUTING.md).
- Read the archived language ([specification](https://deimos.app/phobos/spec)

## Documentation

- [Phobos in 5 minutes](https://deimos.app/phobos/5-min)
- [Programming handbook](https://deimos.app/phobos/handbook)

## Building

In order to build the Phobos compiler, ensure that you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed.

Clone a copy of the repo:

```bash
git clone https://github.com/Deimos-Applications/phobos.git
```

Change to the Phobos directory:

```bash
cd phobos
```

Install [ts-node](https://www.npmjs.com/package/ts-node) and [nearley](https://nearley.js.org/):

```bash
npm install -g ts-node
npm install -g nearley
```

Use one of the following to build and test:

```
npm run build             # Build the compiler into built/local.
npm test                  # Execute local test suites
```

## Usage

```bash
node dist/index.js hello.pb
```

## Roadmap

For details on our planned features and future direction please refer to our [roadmap](https://github.com/Deimos-Applications/phobos/Roadmap).
