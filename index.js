const data = require('./words/normalize.js');

const OBJECTS = data.objects();
const PREDICATES = data.predicates();
const TEAMS = data.teams();

exports.objects = () => {return OBJECTS};
exports.predicates = () => {return PREDICATES};
exports.teams = () => {return TEAMS};
