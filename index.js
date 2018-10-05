const data = require('./generated/words.json');

const OBJECTS = data.objects;
const PREDICATES = data.predicates;
const TEAMS = data.teams;

exports.objects = data.objects;
exports.predicates = PREDICATES;
exports.teams = TEAMS;
