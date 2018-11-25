Friendly Words
=================

This package returns the curated lists of Glitch words, as used in project names and elsewhere.

Usage
---

```
const friendlyWords = require('friendly-words');

friendlyWords.predicates;
> ["warp","windy","paper","shrouded","iridescent","sage",...

friendlyWords.objects;
> ["millennium","report","guardian","match","wallaby","turnip",...

friendlyWords.teams;
> ["troupe","group","posse","coven","team","alliance",...

friendlyWords.collections;
> ["album","assortment","bricolage","collection","compilation","melange",...
```


The Words
---------

The words are pulled from curated files. We want the words and their pairings to be friendly, positive, inspiring, whimsical, memorable, etc.  They should also be words that most people can easily remember and spell.

All of the words and their generated pairings should be safe for children of all cultures. This means that we permit absolutely no word pairings that invoke to hate speech, hostility, derogatory terms, etc. 

Despite our best efforts, it's easy for a pair of benign words to be combined into something inappropriate. Whenever we notice a generated pair that is problematic, we'll remove at least one of the words from that pair so that it won't reoccur. We'll err on the side of trusting reports and removing potentially inappropriate words rather than defending the appropriate uses of a word.

When adding words to the list, an abundance of common sense is required. If the word can be used as a slang term for an ethnicity or nationality, there's probably a context where it'll pair up with a verb or adjective that can make it feel unwelcome... so be mindful and avoid those.

The Word Files
--------------

Our word lists are highly-opinionated lists of *predicates* and *direct objects*.  This structure allows us to put together word pairs that are more likely to make grammatical sense, and therefore tend to be easier to say, type, and remember.

`words/objects.txt`

> The direct object receives the action of the sentence. The direct object is usually a noun or pronoun.

`words/predicates.txt`

> The predicate expresses action or being within the sentence. The simple predicate contains the verb and can also contain modifying words, phrases, or clauses.

`words/teams.txt`

> This is a list of synonyms for "team".  They're a special subset of objects.

`words/collections.txt`

> This is a list of synonyms for "collection".

For our purposes, the predicates are mostly verbs and adjectives.

It's OK for a word to be duplicated between the objects and predicates lists so long as that word is valid in both contexts,  e.g. "buffalo-buffalo" or "lavender-lavender".

Within a given file, the words should be alphabetized, distinct, and contain only lower-case alphabetic ASCII characters.  These constraints are checked at build time.

Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ
