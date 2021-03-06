module.exports = function(grunt){

  grunt.initConfig({
    jshint : {
      files : ['lib/**/*js', 'models/**/*.js', '*.js', 'routes/**/*.js']
    },
    watch : {
        files : ['lib/**/*js', 'models/**/*.js', '*.js', 'routes/**/*.js'],
        tasks : ['jshint']
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

};
