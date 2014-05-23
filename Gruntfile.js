module.exports = function(grunt) {
	grunt.initConfig({
		clean: ['./dist'],
		copy: {
			release: {
				files: [ { src: './**', dest: './dist/' } ]
			}
		},
		version: {
			release: {
				options: {
					buildNumber: "1.0." + (+new Date())
				}
			},
			dev: {
				options: {
					buildNumber: function() {
						var package = JSON.parse(grunt.file.read('./package.json'));
						var chunks = package.version.split('.');
						chunks[1] = parseInt(chunks[1], 10) + 1;
						return chunks.join('.') + '-pre';
					}()
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['clean', 'copy', 'version:release']);
};