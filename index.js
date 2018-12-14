registerPatcher({
	info: info,
	gameModes: [xelib.gmTES5, xelib.gmSSE],
	settings: {
		label: 'Keys Have Weight',
		templateUrl: `${patcherUrl}/partials/settings.html`,
		defaultSettings: {
			weight: 0.1
		}
	},
	requiredFiles: [],
	getFilesToPatch: function(filenames) {
		return filenames;
	},
	execute: {
		process: [{
			load: function(plugin, helpers, settings, locals) {
				return {
					signature: 'KEYM'
				}
			},
			patch: function(record, helpers, settings, locals) {
				xelib.SetFloatValue(record, 'DATA\\Weight', settings.weight);
			}
		}]
	}
});
