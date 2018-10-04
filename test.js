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

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});

test('contents are unique', t=> { });
test('contents are alphabetized', t=> { });
test('"objects" exists', t=> { });
test('"predicates" exists', t=> { });
test('contents are unique', t=> { });