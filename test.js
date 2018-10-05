/*

assert that objects, predicates, teams, and {future stuff} are present.

when writing the tests, it'd be good to assert all of the clauses that build.js claims to enforce

contents are alphabetized, contents don't have dupes, etc.

i like to think of it as 'the code has a bunch of assumptions, including the assumption that it itself is valid;  
the job of the tests are to assert the assumptions are true.'

which means that the game of "what's being assumed here?" is one that can give guidance into what tests are needed
e.g.,  we're assuming that the 'objects' collection exists...  it has a large number of things in it..  etc.

*/

import test from 'ava';
const friendlyWords = require('./index');


test('contents are unique', t=> {
  t.deepEqual(friendlyWords.objects, Array.from(new Set(friendlyWords.objects))),
  t.deepEqual(friendlyWords.predicates, Array.from(new Set(friendlyWords.predicates))),
  t.deepEqual(friendlyWords.teams, Array.from(new Set(friendlyWords.teams)))
});
test('contents are alphabetized', t=> { 
  t.deepEqual(friendlyWords.objects, friendlyWords.objects.sort()), 
  t.deepEqual(friendlyWords.predicates, friendlyWords.predicates.sort()), 
  t.deepEqual(friendlyWords.teams, friendlyWords.teams.sort()) 
});
test('"objects" exists', t=> { 
  t.truthy(friendlyWords.objects), 
  t.is(Array.isArray(friendlyWords.objects), true), 
  t.true(friendlyWords.objects.length > 2000) 
});
test('"predicates" exists', t=> { 
  t.truthy(friendlyWords.predicates), 
  t.is(Array.isArray(friendlyWords.predicates), true),
  t.true(friendlyWords.predicates.length > 1000) 
});
test('"teams" exists', t=> { 
  t.truthy(friendlyWords.teams), 
  t.is(Array.isArray(friendlyWords.teams), true),
  t.not(friendlyWords.teams.length, 0) 
});