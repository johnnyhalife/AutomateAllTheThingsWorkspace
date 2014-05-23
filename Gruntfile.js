module.exports = function(grunt) {
	grunt.initConfig({
		clean: ['./dist'],
		copy: {
			release: {
				files: [ { src: './**', dest: './dist/' } ]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'copy']);
};