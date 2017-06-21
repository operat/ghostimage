module.exports = function(grunt) {
   // general config
   var config = {
      vhost: 'ghostimage.local/docs',
      browser: 'firefox-dev',
   };

   // tell Grunt we plan to use this plug-in
   require('load-grunt-tasks')(grunt);

   // tell Grunt what to do when we type "grunt" into terminal
   grunt.registerTask('build',
      ['uglify', 'cssmin', 'copy']
   );
   grunt.registerTask('dev',
      ['uglify', 'cssmin', 'copy', 'browserSync', 'watch']
   );

   // all configuration goes here
   grunt.initConfig({
      config: config,
      pkg: grunt.file.readJSON('package.json'),

      browserSync: {
         default_options: {
            bsFiles: {
               src: ['*.html', 'dist/*', 'docs/**']
            },
            options: {
               watchTask: true,
               proxy: '<%= config.vhost %>',
               browser: '<%= config.browser %>',
            }
         }
      },

      copy: {
         build: {
            expand: true,
            cwd: 'dist',
            src: '**',
            dest: 'docs/inc/',
         },
      },

      cssmin: {
         build: {
            src: 'src/ghostimage.css',
            dest: 'dist/ghostimage.min.css'
         }
      },

      devUpdate: {
         main: {
            options: {
               updateType: 'prompt',
               semver: false
            }
         }
      },

      uglify: {
         options: {
            // sourceMap: true,
            preserveComments: 'some',
         },
         build: {
            src: 'src/ghostimage.js',
            dest: 'dist/ghostimage.min.js'
         }
      },

      watch: {
         options: {
            spawn: false,
            livereload: true,
         },
         build: {
            files: ['src/*', 'Gruntfile.js'],
            tasks: ['uglify', 'cssmin']
         },
         reload: {
            files: ['docs/**', '*.html']
         }
      },
   });
};
