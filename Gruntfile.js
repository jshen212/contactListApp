module.exports = function(grunt) {
  // grunt.registerTask('hello', function(){
  //   console.log('hello world');
  // });

  grunt.initConfig({
    jshint: {
      files: ['src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/public/controllers/controller.js'],
        dest: 'dist/bundle.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        src:['src/public/controllers/controller.js'],
        dest: 'dist/bundle.min.js'
      }
    },

    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint'],
        options: {
          event: ['added', 'deleted'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.task.registerTask('bundle', ['jshint', 'uglify']);
  grunt.task.registerTask('default', ['jshint'] );
};
