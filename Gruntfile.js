/*
 * pagination-example
 * https://github.com/assemble/pagination-example
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, Contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var pretty = require('pretty');

  // Project configuration.
  grunt.initConfig({

    site  : grunt.file.readYAML('_config.yml'),
    pkg   : grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,

    bootstrap: '<%= vendor %>/bootstrap',

    // // Generate components
    // components: {
    //   bootstrap: {
    //     src: ['<%= vendor %>/bootstrap/less/*.less'],
    //     dest: 'components/'
    //   }
    // },

    // get: {
    //   options: {
    //     pretty: true,
    //     host: 'getbootstrap.com'
    //   },
    //   pages: {
    //     options: {append: '/index'},
    //     files: [
    //       {dest: '<%= vendor %>/', ext: '.html', src: ['components', 'css', 'javascript']}
    //     ]
    //   }
    // },

    // reverse: {
    //   options: {
    //     ext: 'hbs',
    //     parent: 'bs-example',
    //     flatten: true
    //   },
    //   bootstrap: {
    //     files: {
    //       'components/': ['<%= vendor %>/*.html']
    //     }
    //   }
    // },

    // matter: {
    //   components: {
    //     files: [
    //       {expand: true, cwd: 'components', src: ['**/*.hbs'], dest: 'components/', ext: '.hbs'}
    //     ]
    //   }
    // },

    assemble: {
      options: {
        site: '<%= site %>',
        flatten: true,
        data: ['components/**/*.json', 'data/**/*.json'],
        assets: '<%= site.dest %>/assets',
        helpers: ['handlebars-helper-lorem', 'templates/helpers/*.js'],
        partials: ['templates/includes/*.hbs'],
        layoutdir: 'templates/layouts',
        layout: 'component.hbs',
        postprocess: function(src) {
          return pretty(src);
        }
      },
      components: {
        files: [
          {expand: true, cwd: 'templates', src: ['*.hbs'], dest: '<%= site.dest %>/', ext: '.html'},
          {expand: true, cwd: 'components', src: ['**/*.hbs'], dest: '<%= site.dest %>/components/', ext: '.html'}
        ]
      }
    },

    less: {
      options: {
        paths: ['<%= bootstrap %>/less'],
        imports: {
          // Each referenced file has something required by other .less files.
          reference: ['variables', 'mixins', 'utilities', 'scaffolding', 'buttons', 'forms']
        }
      },
      base: {
        src: '<%= vendor %>/base.less',
        dest: '<%= assemble.options.assets %>/css/base.css'
      },
      bootstrap: {
        src: '<%= bootstrap %>/less/bootstrap.less',
        dest: '<%= assemble.options.assets %>/css/bootstrap.css'
      },
      components: {
        files: [
          {
            expand: true,
            cwd: 'components',
            src: ['**/*.less', '!{bootstrap,variables,mixins}.less'],
            dest: '<%= site.dest %>/components/',
            ext: '.css'
          }
        ]
      }
    },

    // Before creating new files, remove files from previous build.
    clean: ['<%= site.dest %>/**/*.html']
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-components');
  grunt.loadNpmTasks('grunt-reverse');
  grunt.loadNpmTasks('grunt-matter');
  grunt.loadNpmTasks('grunt-get');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('assemble');


  // Default task to be run.
  // grunt.registerTask('default', ['clean', 'components', 'get', 'reverse', 'matter', 'assemble']);
  grunt.registerTask('default', ['clean', 'less', 'assemble']);
};
