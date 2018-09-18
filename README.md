Random Words
=================

This app generates random word pairings from the curated set of Glitch words.

API
---

It provides 3 GET endpoints:

`/word-pairs/`
> Returns a JSON array of word pairings in the form of `["{predicate}-{object}", ...]`
> Example: 
> `$ curl https://friendly-words.glitch.me/word-pairs/`
>
> ["green-grasshopper","bramble-hockey","dour-cereal","oceanic-alibi","resonant-editorial","tin-clock","panoramic-match","honorable-ski","carnation-partridge","nettle-preface"]

`/objects/`
> Returns a JSON array of words which are grammatical objects.

`/predicates/`
> Returns a JSON array of words which are grammatical predicates.


You can also GET from these endpoints:


To get a sample of just objects or predicates.

Examples:
```
$ curl https://friendly-words.glitch.me/word-pairs/
["green-grasshopper","bramble-hockey","dour-cereal","oceanic-alibi","resonant-editorial","tin-clock","panoramic-match","honorable-ski","carnation-partridge","nettle-preface"]

$ curl https://friendly-words.glitch.me/predicates/
["warp","windy","paper","shrouded","iridescent","sage","organic","modern","quark","incandescent"]

$ curl https://friendly-words.glitch.me/objects/
["millennium","report","guardian","match","wallaby","turnip","range","jump","behavior","platinum"]
```

Landing Page
------------
We'll pull a sample from the API to populate the landing page of this site.


The Words
---------

The words are pulled from curated files. We want the words and their pairings to be friendly, positive, inspiring, whimsical, memorable, etc.  They should also be words that most people can easily remember and spell.

We don't permit words that are reminisence of hate speech, insults, derogatory terms, etc. -- all of the words and their generated pairings should be safe for children of all cultures.

It's easy for a pair of benign words to be combined into something inappropriate, so whenever we notice a generated pair that is problematic, we'll remove at least one of the words from that pair so that it won't reoccur. We'll err on the side of trusting reports and removing words.

To add words to the list, use common sense.  If the word can be used as a slang term for an ethniticty or nationality, there's probably a context where it'll pair up with a verb or adjective that can make it feel unwelcome.

The Word Files
--------------

To construct the word pairs, we pull from a list of *predicates* and a list of *direct objects*.  This allows us to put together word pairs that are more likely to to make grammatical sense, and therefore tend to be easier to say and remember.

`words/objects.txt`

> The direct object receives the action of the sentence. The direct object is usually a noun or pronoun.

`words/predicates.txt`

> The predicate expresses action or being within the sentence. The simple predicate contains the verb and can also contain modifying words, phrases, or clauses.

For our purposes, the predicates are mostly verbs and adjectives.

It's OK for a word to be duplicated between the objects and predicates lists so long as that word is valid in both contexts,  e.g. "buffalo buffalo" or "blue-blue".

Within either file, however, the words should be distinct, lower case, and contain only alphabetic characters.  These constraints are checked at build time.


Made by [Fog Creek](https://fogcreek.com/)
-------------------

\ ゜o゜)ノ
