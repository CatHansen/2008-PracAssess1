// Using Node (the runtime) - Common JS Modules
// Browser ES Modules 

const {src, dest, series} = require('gulp')

const static = function(){
    //task
    //src().pipe(plugins).pipe(compress).pipe(dest())
    return src('src/static/data/*.*')
    .pipe(dest('dist/data'))
    //*.* calls all files
}

function redirect(){
    return (src('./_redirects').pipe(dest('./dist')))
}

//exports
exports.default = series(static, redirect)