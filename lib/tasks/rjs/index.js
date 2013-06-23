var log = require('npmlog'),
    Q = require('kew');

exports.defaultConfig = {
    moduleId:'rjs',
    config:{

    }
};

exports.build = function(context, taskConfig){
    log.info('rjs', 'Packaging ' + taskConfig.files.length.toString() + ' files.');

    var dfd = Q.defer();
    dfd.resolve();
    return dfd.promise;
}