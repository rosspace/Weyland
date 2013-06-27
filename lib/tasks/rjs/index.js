var log = require('npmlog'),
    Q = require('kew'),
    util = require('util'),
    rjs = require('requirejs'),
    path = require('path');

exports.defaultConfig = {
    moduleId:'rjs',
    rjs:{
        exclude : [],
        include :[]
    }
};

exports.build = function(context, taskConfig){
    var dfd = Q.defer(),
        config = taskConfig.rjs,
        files = taskConfig.files;

    log.info('rjs', 'Packaging ' + taskConfig.files.length.toString() + ' files.');

    for(var i = 0, len = files.length; i < len; i++){
        var current = files[i];

        current = path.relative(config.baseUrl, current).replace(/\\/g, '/');

        //fix up based on path config

        if(current.indexOf(taskConfig.viewExtension, current.length - taskConfig.viewExtension.length) !== -1){
            current = taskConfig.viewPlugin + '!' + current;
        }else{
            current = current.replace('.js', '');
        }

        config.include.push(current);
    }

    rjs.optimize(config, function(){
        dfd.resolve();
    });

    return dfd.promise;
}