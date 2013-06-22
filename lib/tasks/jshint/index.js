var log = require('npmlog'),
    Q = require('kew');

exports.defaultConfig = {
    moduleId:'jshint',
    config:{

    }
};

exports.build = function(context, taskConfig){
    var dfd = Q.defer();
    //var callback = dfd.makeNodeResolver();
    log.info('build', 'jshint');
    dfd.resolve();
    return dfd.promise;
}