/*global axe */
function reset() {
	'use strict';
	var audit = axe._audit;

	if (!audit) {
		throw new Error('No audit configured');
	}
	audit.resetRulesAndChecks();
}

export default reset;
