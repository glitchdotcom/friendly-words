import test from 'ava';
const friendlyWords = require('./index');
const lists = ["predicates","objects","teams","collections"];


test('contents are unique', t=> {
  lists.forEach((category) => {
    t.deepEqual(friendlyWords[category], Array.from(new Set(friendlyWords[category])))
  });
});
test('contents are alphabetized', t=> { 
  lists.forEach((category) => {
    t.deepEqual(friendlyWords[category], friendlyWords[category].sort())
  });
});
test('contents are lower-case', t=> {
  lists.forEach((category) => {
    t.deepEqual(friendlyWords[category], friendlyWords[category].join('|').toLowerCase().split('|'))
  });
});
test('contents are a-z ASCII chars', t=> {
  lists.forEach((category) => {
    t.deepEqual(friendlyWords[category], friendlyWords[category].filter((word) => /^[a-z]+$/))
  });
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