module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        assetPath: '_dev',
        buildPath: 'build',
        projectURL: 'http://local.boilerplate/library.php',

        // CSS Tasks
        sass: {
            options: {
               outputStyle: 'compressed'
            },
            dist: {
                files: {
                    '<%= buildPath %>/css/production.css': '<%= assetPath %>/scss/compile.scss'
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
            all: ['Gruntfile.js', '<%= assetPath %>/js/global.js']
        },

        concat: {   
            dist: {
                src: [
                    '<%= assetPath %>/js/global.js',
                    '<%= assetPath %>/js/slick.js',
                    '<%= assetPath %>/js/picturefill.min.js'
                ],
                dest: '<%= buildPath %>/js/production.js',
            },
            extras: {
              src: ['<%= assetPath %>/js/timetravel.js'],
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
                    cwd: '<%= assetPath %>/images/',
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
                    '<%= assetPath %>/images/svg-defs.svg':
                    ['<%= assetPath %>/images/svgs/*.svg']
                }
            }
        },
        
        // SYNC & WATCH
        watch: {
            scripts: {
                files: ['<%= assetPath %>/js/*.js'],
                tasks: ['jshint','concat','uglify'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            css: {
                files: ['<%= assetPath %>/scss/**/*.scss'],
                tasks: ['sass','postcss'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            images: {
                files: ['<%= assetPath %>/images/*.{png,jpg,gif,ico,svg'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        }
        
    });

    grunt.registerTask('default', ['sass','postcss','jshint', 'concat', 'uglify', 'imagemin', 'svgstore', 'watch']);
    
};