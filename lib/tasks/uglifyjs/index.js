var log = require('npmlog'),
    Q = require('kew');

exports.defaultConfig = {
    moduleId:'uglifyjs',
    config:{

    }
};

exports.build = function(config, callback){
    var dfd = Q.defer();
    //var callback = dfd.makeNodeResolver();
    log.info('build', 'uglifyjs');
    dfd.resolve();
    return dfd.promise;
}