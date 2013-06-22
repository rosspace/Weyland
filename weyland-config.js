exports.config = function(weyland) {
    weyland.build('main')
        .task.jshint({
            glob:'**/*.js',
            stopOnErrors:false,
            options:undefined,
            globals:undefined
        })
        .task.uglifyjs({
            glob:'**/*.js'
        })
        .task.rjs({
            glob:'**/*.{js,html}'
        });
}