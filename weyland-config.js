exports.config = function(weyland) {
    weyland.build('main')
        .workingDirectory('C:/Users/Rob/Documents/GitHub/Durandal/platforms/Microsoft.NET/Samples/Durandal.Samples')
        .task.jshint({
            include:'App/**/*.js',
            stopOnErrors:false,
            options:undefined,
            globals:undefined
        })
        .task.uglifyjs({
            include:'App/**/*.js'
        })
        .task.rjs({
            include:'App/**/*.{js,html}'
        });
}