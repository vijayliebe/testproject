module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
 // Gruntfile.js

	grunt.initConfig({

	    // configure jshint to validate js files -----------------------------------
	    jshint: {
	      options: {
	        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
	      },

	      // when this task is run, lint the Gruntfile and all js files in src
	      build: ['Gruntfile.js', 'src/js/*.js']
	    }

	});

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};