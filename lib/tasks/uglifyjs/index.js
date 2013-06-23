var log = require('npmlog'),
    Q = require('kew');

exports.defaultConfig = {
    moduleId:'uglifyjs',
    config:{

    }
};

exports.build = function(context, taskConfig){
    log.info('uglifyjs', 'Uglifying ' + taskConfig.files.length.toString() + ' files.');

    var dfd = Q.defer();
    dfd.resolve();
    return dfd.promise;
}