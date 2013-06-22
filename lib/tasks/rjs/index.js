var log = require('npmlog'),
    Q = require('kew');

exports.defaultConfig = {
    moduleId:'rjs',
    config:{

    }
};

exports.build = function(config){
    var dfd = Q.defer();
    //var callback = dfd.makeNodeResolver();
    log.info('build', 'rjs');
    dfd.resolve();
    return dfd.promise;
}