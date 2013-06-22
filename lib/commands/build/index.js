var log = require('npmlog'),
    util = require('util'),
    glob = require("glob"),
    helper = require('../../utils'),
    Q =  require('kew');

function runTask(taskConfig){
    var dfd = Q.defer();
    var task = require('../../tasks/' + taskConfig.moduleId);
    var options = {
        cwd:'C:/Users/Rob/Documents/GitHub/Durandal/platforms/Microsoft.NET/Samples/Durandal.Samples/App'
    };

    glob(taskConfig.glob, options, function (er, files) {
        if(er){
            throw er;
        }

        taskConfig.files = files;

        log.info("build", "files", taskConfig.files);

        task.build(taskConfig).then(function(){
            dfd.resolve();
        });
    });

    return dfd.promise;
}

function runBuild(buildConfig){
    return helper.asyncForEach(buildConfig.tasks, runTask);
}

exports.process = function(options, builds){
    if(!Array.isArray(builds)){
        builds = [builds];
    }

    if(options.verbose){
        log.info("build", "config", util.inspect(builds, { depth: null, colors:true }));
    }

    helper.asyncForEach(builds, runBuild).then(function(){
        log.info('build', 'complete');
    });
};
