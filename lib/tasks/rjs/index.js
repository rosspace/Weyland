var log = require('npmlog'),
    Q = require('kew');

exports.defaultConfig = {
    moduleId:'rjs',
    rjs:{

    }
};

exports.build = function(context, taskConfig){
    log.info('rjs', 'Packaging ' + taskConfig.files.length.toString() + ' files.');

    var dfd = Q.defer();
    dfd.resolve();
    return dfd.promise;
}