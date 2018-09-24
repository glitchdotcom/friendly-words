Random Words
=================

This package generates random word pairings from the curated set of Glitch words.

Usage
-----

It provides 3 endpoints:

__wordPairs__
```
# Returns a JSON array of word pairings in the form of `["{predicate}-{object}", ...]`

# For example:
const friendlyWords = require('friendly-words');
console.log(friendlyWords.wordPairs);
> ["green-grasshopper","bramble-hockey","dour-cereal","oceanic-alibi","resonant-editorial","tin-clock","panoramic-match","honorable-ski","carnation-partridge","nettle-preface"]
```

__predicates__
```
# Returns a JSON array of words which are grammatical predicates.

# For example:
const friendlyWords = require('friendly-words');
console.log(friendlyWords.predicates);
> ["warp","windy","paper","shrouded","iridescent","sage","organic","modern","quark","incandescent"]
```

__objects__
```
# Returns a JSON array of words which are grammatical objects.

# For example:
const friendlyWords = require('friendly-words');
console.log(friendlyWords.objects);
> ["millennium","report","guardian","match","wallaby","turnip","range","jump","behavior","platinum"]
```


The Words
---------

The words are pulled from curated files. We want the words and their pairings to be friendly, positive, inspiring, whimsical, memorable, etc.  They should also be words that most people can easily remember and spell.

All of the words and their generated pairings should be safe for children of all cultures. This means that we permit absolutely no word pairings that invoke to hate speech, hostility, derogatory terms, etc. 

Despite our best efforts, it's easy for a pair of benign words to be combined into something inappropriate. Whenever we notice a generated pair that is problematic, we'll remove at least one of the words from that pair so that it won't reoccur. We'll err on the side of trusting reports and removing potentially inappropriate words rather than defending the appropriate uses of a word.

When adding words to the list, an abundance of common sense is required. If the word can be used as a slang term for an ethniticty or nationality, there's probably a context where it'll pair up with a verb or adjective that can make it feel unwelcome... so be mindful and avoid those.

The Word Files
--------------

To construct the word pairs, we pull from a list of *predicates* and a list of *direct objects*.  This allows us to put together word pairs that are more likely to make grammatical sense, and therefore tend to be easier to say, type, and remember.

`words/objects.txt`

> The direct object receives the action of the sentence. The direct object is usually a noun or pronoun.

`words/predicates.txt`

> The predicate expresses action or being within the sentence. The simple predicate contains the verb and can also contain modifying words, phrases, or clauses.

For our purposes, the predicates are mostly verbs and adjectives.

It's OK for a word to be duplicated between the objects and predicates lists so long as that word is valid in both contexts,  e.g. "buffalo-buffalo" or "blue-blue".

Within a given file, the words should be alphabetized, distinct, and contain only lower-case alphabetic ASCII characters.  These constraints are checked at build time.

Updating the NPM module
-----------------------

First you'll need to get an invite to help maintain the module. Ask anyone currently listed as a collaborator on [friendly-words](https://www.npmjs.com/package/friendly-words), they should be able to invite you. If you don't already have an NPM account, make one!

Next, clone [the repo](https://github.com/FogCreek/friendly-words) and make your changes locally. You'll want to make sure you bump the version number in `package.json`. Commit, push, all that good stuff.

Finally, log into NPM in the terminal with `npm login` and your NPM username/password. Navigate to the repo you've just updated, and `npm publish`. Check [friendly-words](https://www.npmjs.com/package/friendly-words), your updates (and the new version number) should be there!

Made by [Fog Creek](https://fogcreek.com/)
-------------------

\ ゜o゜)ノ
