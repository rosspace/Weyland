var log = require('npmlog'),
    util = require('util'),
    helper = require('../../helpers');

exports.invoke = function(context){
    var builds = context.config.build;

    if(!Array.isArray(builds)){
        builds = [builds];
    }

    if(context.options.verbose){
        log.info("build", "config", util.inspect(builds, { depth: null, colors:true }));
    }

    return helper.asyncForEach(builds, function (buildConfig){
        if(buildConfig.workingDirectory){
            process.chdir(buildConfig.workingDirectory);
        }

        return helper.asyncForEach(buildConfig.tasks, function(taskConfig){
            var task = require('../../tasks/' + taskConfig.moduleId);

            return helper.glob(taskConfig.glob, {}).then(function(files) {
                taskConfig.files = files;
                return task.build(context, taskConfig);
            });
        });
    }).end();
};
