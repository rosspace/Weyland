exports.config = function(weyland) {
    weyland.build('main')
        .task.jshint({
            glob:'**/*.js'
        })
        .task.uglifyjs({
            glob:'**/*.js'
        })
        .task.rjs({
            glob:'**/*.{js,html}'
        });
}