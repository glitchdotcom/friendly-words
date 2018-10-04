const data = require('./words/normalize.js');

const OBJECTS = data.objects();
const PREDICATES = data.predicates();
const TEAMS = data.teams();

exports.objects = OBJECTS;
exports.predicates = PREDICATES;
exports.teams = TEAMS;

// maybe this should be in words, to keep package files separate from testing or example?