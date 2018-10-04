How to Contribute to friendly-words
================
Welcome! We'd love to have you help contribute great, friendly words (and bugfixes) for our generator. This should have all the information you need to do so. 

We want contributing to be a collaborative process! Some great ways to get in touch with us while you're making changes are creating a GitHub issue, tweeting [@Glitch](https://twitter.com/glitch) or posting to [our forum](https://support.glitch.com/).

Please note we have a [code of conduct](https://github.com/FogCreek/friendly-words/blob/master/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project and other contributors.

Workflow
----------------
We prefer changes to come through GitHub at this point (we're still working on branch/merge features in Glitch!). 

*If you're submitting a bugfix:*
- Open a GitHub issue with a descriptive title, clear description and steps to reproduce.

*If you're suggesting improvements/new words:*
- Read and understand __The Words__ section in [readme.md](https://github.com/FogCreek/friendly-words/blob/master/README.md)

*For all changes:*
- Open a new GitHub pull request with the patch.

- Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

If you aren't comfortable with GitHub, don't have an account, etc, you can also send us a remix of this project with your changes.

Updating the NPM module
-----------------------

First you'll need to get an invite to help maintain the module. Ask anyone currently listed as a collaborator on [friendly-words](https://www.npmjs.com/package/friendly-words), they should be able to invite you. If you don't already have an NPM account, make one!

Next, clone [the repo](https://github.com/FogCreek/friendly-words) and make your changes locally. You'll want to make sure you bump the version number in `package.json`. Commit, push, all that good stuff.

Finally, log into NPM in the terminal with `npm login` and your NPM username/password. Navigate to the repo you've just updated, and `npm publish`. Check [friendly-words](https://www.npmjs.com/package/friendly-words), your updates (and the new version number) should be there!