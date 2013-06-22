var log = require('npmlog'),
    Q = require('kew');

exports.defaultConfig = {
    moduleId:'jshint',
    config:{

    }
};

exports.build = function(config){
    var dfd = Q.defer();
    //var callback = dfd.makeNodeResolver();
    log.info('build', 'jshint');
    dfd.resolve();
    return dfd.promise;
}