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
        }else{
            buildConfig.workingDirectory = process.cwd();
        }

        return helper.asyncForEach(buildConfig.tasks, function(taskConfig){
            var task = require('../../tasks/' + taskConfig.moduleId);
            var includes = taskConfig.include || [];
            var excludes = taskConfig.exclude || [];

            if(!Array.isArray(includes)){
                includes = [includes];
            }

            if(!Array.isArray(excludes)){
                excludes = [excludes];
            }

            var allFiles = [];
            var excludedFiles = [];

            return helper.asyncForEach(includes, function(glob){
                return helper.glob(glob, {}).then(function(files) {
                    files.forEach(function(file){ allFiles.push(file); });
                });
            }).then(function(){
                return helper.asyncForEach(excludes, function(glob){
                    return helper.glob(glob, {}).then(function(files) {
                        files.forEach(function(file){ excludedFiles.push(file); });
                    });
                });
            }).then(function(){
                allFiles = allFiles.filter(function(item){ return excludedFiles.indexOf(item) == -1; });

                if(taskConfig.files){
                    taskConfig.files.forEach(function(item){ allFiles.push(item); });
                }

                taskConfig.files = helper.distinct(allFiles);

                return task.build(context, taskConfig);
            });
        });
    }).end();
};
