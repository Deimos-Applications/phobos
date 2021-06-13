# Instructions for Logging Issues

## 1. Read the FAQ

Please [read the FAQ](https://github.com/Deimos-Applications/phobos/wiki/FAQ) before logging new issues, even if you think you have found a bug.

Issues that ask questions answered in the FAQ will be closed without elaboration.

## 2. Search for Duplicates

[Search the existing issues](https://github.com/Deimos-Applications/phobos/search?type=Issues) before logging a new one.

Some search tips:

- _Don't_ restrict your search to only open issues. An issue with a title similar to yours may have been closed as a duplicate of one with a less-findable title.
- Check for synonyms. For example, if your bug involves an interface, it likely also occurs with type aliases or classes.
- Search for the title of the issue you're about to log. This sounds obvious but 80% of the time this is sufficient to find a duplicate when one exists.
- Read more than the first page of results. Many bugs here use the same words so relevancy sorting is not particularly strong.
- If you have a crash, search for the first few topmost function names shown in the call stack.

## 3. Do you have a question?

The issue tracker is for **issues**, in other words, bugs and suggestions.
If you have a _question_, please use [Stack Overflow](http://stackoverflow.com/questions/tagged/typescript), your favorite search engine, or other resources.

## 4. Did you find a bug?

When logging a bug, please be sure to include the following:

- What version of Phobos you're using (run `phobos --v`)
- If at all possible, an _isolated_ way to reproduce the behavior
- The behavior you expect to see, and the actual behavior

You can try out the nightly build of Phobos (`npm install phobos@next`) to see if the bug has already been fixed.

## 5. Do you have a suggestion?

We also accept suggestions in the issue tracker.
Be sure to [check the FAQ](https://github.com/Deimos-Applications/phobos/wiki/FAQ) and [search](https://github.com/Deimos-Applications/phobos/issues?utf8=%E2%9C%93&q=is%3Aissue) first.

In general, things we find useful when reviewing suggestions are:

- A description of the problem you're trying to solve
- An overview of the suggested solution
- Examples of how the suggestion would work in various places
  - Code examples showing e.g. "this would be an error, this wouldn't"
  - Code examples showing the generated code (if applicable)
- If relevant, precedent in other languages can be useful for establishing context and expected behavior

# Instructions for Contributing Code

## What You'll Need

0. [A bug or feature you want to work on](https://github.com/Deimos-Applications/phobos/labels/help%20wanted)!
1. [A GitHub account](https://github.com/join).
2. A copy of the Phobos code. See the next steps for instructions.
3. [Node](https://nodejs.org), which runs JavaScript locally. Current or LTS will both work.
4. An editor. [VS Code](https://code.visualstudio.com) is the best place to start for Phobos.
5. The ts-node command line tool, for building and testing changes. See the next steps for how to install it.

## Get Started

1. Install node using the version you downloaded from [nodejs.org](https://nodejs.org).
2. Open a terminal.
3. Make a fork&mdash;your own copy&mdash;of Phobos on your GitHub account, then make a clone&mdash;a local copy&mdash;on your computer. ([Here are some step-by-step instructions](https://github.com/anitab-org/mentorship-android/wiki/Fork%2C-Clone-%26-Remote)). Add `--depth=1` to the end of the `git clone` command to save time.
4. Install the ts-node command line tool: `npm install -g ts-node`
5. Change to the Phobos folder you made: `cd phobos`
6. Install dependencies: `npm i`
7. Make sure everything builds and tests pass: `npm test`
8. Open the Phobos folder in your editor.
9. Follow the directions below to add and debug a test.

## Tips

### Faster clones

The TypeScript repository is relatively large. To save some time, you might want to clone it without the repo's full history using `git clone --depth=1`.

## Contributing bug fixes

Phobos is currently accepting contributions in the form of bug fixes. A bug must have an issue tracking it in the issue tracker that has been approved (labelled ["help wanted"](https://github.com/Deimos-Applications/phobos/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) or in the "Backlog milestone") by the Deimos team. Your pull request should include a link to the bug that you are fixing. If you've submitted a PR for a bug, please post a comment in the bug to avoid duplication of effort.

## Contributing features

Features (things that add new or improved functionality to Phobos) may be accepted, but will need to first be approved (labelled ["help wanted"](https://github.com/Deimos-Applications/phobos/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) or in the "Backlog" milestone) by a Deimos-Phobos project maintainer in the suggestion issue. Features with language design impact, or that are adequately satisfied with external tools, will not be accepted.

## Legal

You will need to complete a Contributor License Agreement (CLA). Briefly, this agreement testifies that you are granting us permission to use the submitted change according to the terms of the project's license, and that the work being submitted is under appropriate copyright. Upon submitting a pull request, you will automatically be given instructions on how to sign the CLA.

## Housekeeping

Your pull request should:

- Include a description of what your change intends to do
- Be based on reasonably recent commit in the **main** branch
- Include adequate tests
  - At least one test should fail in the absence of your non-test code changes. If your PR does not match this criteria, please specify why
  - Tests should include reasonable permutations of the target fix/change
  - Include baseline changes with your change
- Follow the code conventions described in [Coding guidelines](https://github.com/Deimos-Applications/phobos/wiki/Coding-guidelines)

## Running the Tests

To run all tests, invoke the `test` using npm:

```Shell
npm test
```
