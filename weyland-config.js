exports.config = function(weyland) {
    weyland.build('main')
        .workingDirectory('C:/Users/Rob/Documents/GitHub/Durandal/platforms/Microsoft.NET/Samples/Durandal.Samples/App')
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