module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        assetPath: 'assets',
        buildPath: 'build',


    concat: {   
        dist: {
            src: [
                '<%= assetPath %>/js/global.js',
                '<%= assetPath %>/js/touchswipe.js',
                '<%= assetPath %>/js/revolver.js',
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

    jshint: {
        all: ['Gruntfile.js', '<%= assetPath %>/js/global.js']
    },

    sass: {
        options: {
            outputStyle: 'compressed',
            sourceMap: true
        },
        dist: {
            files: {
                '<%= buildPath %>/css/production.css': '<%= assetPath %>/scss/compile.scss'
            }
        } 
    },

    autoprefixer: {
        dist: {
            files: {
                '<%= buildPath %>/css/production.css': '<%= buildPath %>/css/production.css'
            }
        }
    },

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

    pixrem: {
        options: {
            rootvalue: '62.5%',
            replace: false
        },
        dist: {
            src: '<%= buildPath %>/css/production.css',
            dest: '<%= buildPath %>/css/production.css'
        }
    },

    svgstore: {
        options: {
            prefix : 'shape-',
            cleanup: ['fill','stroke'],
            svg: { 
                style: "display: none;",
                viewBox : '0 0 20 20',
                xmlns: 'http://www.w3.org/2000/svg'
            },
            formatting : {
              indent_size : 4
            }

        },
        dev: {
            files: {
                '<%= assetPath %>/images/svg-defs.svg':
                ['<%= assetPath %>/images/svgs/*.svg']
            }
        }
    },

    watch: {

        scripts: {
            files: ['<%= assetPath %>/js/*.js'],
            tasks: ['concat', 'uglify', 'jshint'],
            options: {
                spawn: false,
                livereload: true,
            }
        },

        css: {
            files: ['<%= assetPath %>/images/svgs/*.svg','<%= assetPath %>/scss/**/*.scss','production.css'],
            tasks: ['svgstore','sass','autoprefixer','pixrem'],
            options: {
                spawn: false,
                livereload: false,
            }
        }
    }

    });
    
    grunt.registerTask('default', ['concat' , 'uglify' , 'sass' , 'jshint' , 'imagemin' , 'svgstore' , 'pixrem', 'autoprefixer']);
};