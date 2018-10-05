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
test('contents are lower-case', t=> {
  t.deepEqual(friendlyWords.objects, friendlyWords.objects.join('|').toLowerCase().split('|')),
  t.deepEqual(friendlyWords.predicates, friendlyWords.predicates.join('|').toLowerCase().split('|')),
  t.deepEqual(friendlyWords.teams, friendlyWords.teams.join('|').toLowerCase().split('|'))
});
test('contents are a-z ASCII chars', t=> {
  t.deepEqual(friendlyWords.objects, friendlyWords.objects.filter((word) => /^[a-z]+$/)),
  t.deepEqual(friendlyWords.predicates, friendlyWords.predicates.filter((word) => /^[a-z]+$/)),
  t.deepEqual(friendlyWords.teams, friendlyWords.teams.filter((word) => /^[a-z]+$/))
});
test('no empty array elements', t=> {
  t.deepEqual(friendlyWords.objects, friendlyWords.objects.filter(word => word.length > 0)),
  t.deepEqual(friendlyWords.predicates, friendlyWords.predicates.filter(word => word.length > 0)),
  t.deepEqual(friendlyWords.teams, friendlyWords.teams.filter(word => word.length > 0))
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