exports.config = function(weyland) {
    weyland.build('main')
        .workingDirectory('C:/Users/Rob/Documents/GitHub/Durandal/platforms/Microsoft.NET/Samples/Durandal.Samples/App')
        .task.jshint({
            include:'**/*.js',
            stopOnErrors:false,
            options:undefined,
            globals:undefined
        })
        .task.uglifyjs({
            include:'**/*.js'
        })
        .task.rjs({
            include:'**/*.{js,html}'
        });
}