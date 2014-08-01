(function() {

	var underscoreModule = angular.module('underscore.module', []);
	underscoreModule.factory('_', function() {

		window._.mixin({
			compactObject: function(o) {
				var clone = _.clone(o);
				_.each(clone, function(v, k) {
					if (!v) {
						delete clone[k];
					}
				});
				return clone;
			}
		});

		return window._; // assumes underscore has already been loaded on the
		// page
	});

}());