Random Words
=================

This app generates random word pairings from the curated set of Glitch words.

API
---

It provides 3 GET endpoints:

`/word-pairs/`

Sends a collection of word pairings in the form of `["{predicate}-{object}", ...]`

[todo: paste curl example here]


You can also GET from these endpoints:
`/objects/`
`/predicates/`

To get a sample of just objects or predicates.

The Words
---------

The words are pulled from curated files. We want the words and their pairings to be friendly, positive, inspiring, whimsical, memorable, etc.  They should also be words that most people can easily remember and spell.

We don't permit words that are reminisence of hate speech, insults, derogatory terms, etc. -- all of the words and their generated pairings should be safe for children of all cultures.

It's easy for a pair of benign words to be combined into something inappropriate, so whenever we notice a generated pair that is problematic, we'll remove at least one of the words from that pair so that it won't reoccur.  

The word lists are split between two files:

`words/objects.txt`

> The direct object receives the action of the sentence. The direct object is usually a noun or pronoun.

`words/predicates.txt`

> The predicate expresses action or being within the sentence. The simple predicate contains the verb and can also contain modifying words, phrases, or clauses.

For our purposes, the predicates are mostly verbs and adjectives.

It's OK for a word to be duplicated between the objects and predicates lists so long as that word is valid in both contexts,  e.g. "buffalo buffalo" or "blue-blue"







Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).


Your Project
------------

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)


Made by [Fog Creek](https://fogcreek.com/)
-------------------

\ ゜o゜)ノ
