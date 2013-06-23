var Q = require('kew'),
    fs = require('fs'),
    glob = require("glob");

exports.merge = function() {
    var final = {};

    for(var i = 0, len = arguments.length; i < len; i++){
        var current = arguments[i];
        if(current){
            for(var key in current){
                var value = current[key];
                try{
                    if (value.constructor == Object) {
                        final[key] = merge(final[key], value);
                    } else {
                        final[key] = value;
                    }
                }
                catch(e){
                    final[key] = value;
                }
            }
        }
    }

    return final;
};

exports.asyncForEach = function(items, asyncAction){
    var dfd = Q.defer(),
        i = -1,
        len = items.length,
        current;

    function next(){
        i++;

        if(i < len){
            current = items[i];
            asyncAction(current).then(next);
        }else{
            dfd.resolve();
        }
    }

    next();

    return dfd.promise;
};

exports.readFile = function(path, encoding){
    var dfd = Q.defer();
    fs.readFile(path, encoding, dfd.makeNodeResolver());
    return dfd.promise;
}

exports.glob = function(pattern, options){
    var dfd = Q.defer();
    glob(pattern, options, dfd.makeNodeResolver());
    return dfd.promise;
}

exports.distinct = function(items) {
    var derivedArray = [];

    for (var i = 0, len = items.length; i < len; i++) {
        var current = items[i];

        if (derivedArray.indexOf(current) == -1) {
            derivedArray.push(current)
        }
    }

    return derivedArray;
};