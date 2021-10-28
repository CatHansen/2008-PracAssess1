// Using Node (the runtime) - Common JS Modules
// Browser ES Modules 

const {src, dest} = require('gulp')

const static = function(cb){
    //task
    //src().pipe(plugins).pipe(compress).pipe(dest())
    return src('src/static/data/*.*')
    .pipe(dest('dist/data'))

    //*.* calls all files
    // call the callback
    cb()

}

//exports
exports.default = static