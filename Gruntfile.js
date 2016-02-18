module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        devPath: '_dev',
        buildPath: 'build',

        // CSS Tasks
        sass: {
            options: {
               outputStyle: 'compressed'
            },
            dist: {
                files: {
                    '<%= buildPath %>/css/production.css': '<%= devPath %>/scss/compile.scss'
                }
            }
        },

        postcss: {
            options: {
                map: false,

                processors: [
                    require('pixrem')({ rootValue: '62.5%' }),
                    require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] }),
                ]
            },
            dist: {
                src: '<%= buildPath %>/css/production.css'
            }
        },

        // JS Tasks
        jshint: {
            all: ['Gruntfile.js', '<%= devPath %>/js/global.js']
        },

        concat: {   
            dist: {
                src: [
                    '<%= devPath %>/js/global.js',
                    '<%= devPath %>/js/slick.js',
                    '<%= devPath %>/js/picturefill.min.js'
                ],
                dest: '<%= buildPath %>/js/production.js',
            },
            extras: {
              src: ['<%= devPath %>/js/timetravel.js'],
              dest: '<%= buildPath %>/js/timetravel.js',
            }
        },

        uglify: {
            build: {
                src: '<%= buildPath %>/js/production.js',
                dest: '<%= buildPath %>/js/production.min.js'
            }
        },


        // Images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= devPath %>/images/',
                    src: ['**/*.{png,jpg,gif,ico,svg}'],
                    dest: '<%= buildPath %>/images/'
                }]
            }
        },

        svgstore: {
            options: {
                prefix : 'shape-',
                cleanup: ['fill','stroke'],
                svg: { 
                    style: "display: none;",
                    xmlns: 'http://www.w3.org/2000/svg'
                },
                formatting : {
                    indent_size : 4,
                    inheritviewbox: true,
                }

            },
            dev: {
                files: {
                    '<%= devPath %>/images/svg-defs.svg':
                    ['<%= devPath %>/images/svgs/*.svg']
                }
            }
        },
        
        // SYNC & WATCH
        watch: {
            scripts: {
                files: ['<%= devPath %>/js/*.js'],
                tasks: ['jshint','concat','uglify'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            css: {
                files: ['<%= devPath %>/scss/**/*.scss'],
                tasks: ['sass','postcss'],
                options: {
                    spawn: false,
                    livereload: true
                },
            }
        }
        
    });

    grunt.registerTask('default', ['sass','postcss','jshint', 'concat', 'uglify', 'imagemin', 'svgstore', 'watch']);
    
};