module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    concat: {   
        dist: {
            src: [
                'assets/scripts/global.js',
                'assets/scripts/touchswipe.js',
                'assets/scripts/revolver.js'
            ],
            dest: 'build/scripts/production.js',
        }
    },

    uglify: {
        build: {
            src: 'build/scripts/production.js',
            dest: 'build/scripts/production.min.js'
        }
    },

    jshint: {
        all: ['Gruntfile.js', 'assets/scripts/global.js']
    },

    sass: {
        options: {
            outputStyle: 'compressed',
            sourceMap: true
        },
        dist: {
            files: {
                'build/styles/production.css': 'assets/scss/screen.scss'
            }
        } 
    },

    autoprefixer: {
        dist: {
            files: {
                'build/styles/production.css': 'build/styles/production.css'
            }
        }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'assets/images/',
                src: ['**/*.{png,jpg,gif,ico,svg}'],
                dest: 'build/images/'
            }]
        }
    },

    pixrem: {
        options: {
            rootvalue: '62.5%',
            replace: false
        },
        dist: {
            src: 'build/styles/production.css',
            dest: 'build/styles/production.css'
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
                'assets/images/svg-defs.svg':
                ['assets/images/svgs/*.svg']
            }
        }
    },

    watch: {

        scripts: {
            files: ['assets/scripts/*.js'],
            tasks: ['concat', 'uglify', 'jshint'],
            options: {
                spawn: false,
                livereload: true,
            }
        },

        css: {
            files: ['assets/images/svgs/*.svg','assets/scss/**/*.scss','production.css'],
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