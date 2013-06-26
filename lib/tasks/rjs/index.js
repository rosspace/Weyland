var log = require('npmlog'),
    Q = require('kew'),
    util = require('util');

exports.defaultConfig = {
    moduleId:'rjs',
    rjs:{
        exclude : [],
        include :[]
    }
};

exports.build = function(context, taskConfig){
    log.info('rjs', 'Packaging ' + taskConfig.files.length.toString() + ' files.');

    log.info("build", "config", util.inspect(taskConfig, { depth: null, colors:true }));

    var dfd = Q.defer();
    dfd.resolve();
    return dfd.promise;
}