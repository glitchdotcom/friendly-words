const data = require('./generated/words.json');

const OBJECTS = data.objects;
const PREDICATES = data.predicates;
const TEAMS = data.teams;

exports.objects = OBJECTS;
exports.predicates = PREDICATES;
exports.teams = TEAMS;

// maybe this should be in words, to keep package files separate from testing or example?



///the above could be written as:
// const data = require('./generated/words.json');
// exports = data;

// and then in test.js, assert that objects, predicates, teams, and {future stuff} are present.

