var Q = require('kew');

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

exports.asyncForEach = function(items, itemCallback){
    var dfd = Q.defer(),
        i = -1,
        len = items.length,
        current;

    function next(){
        i++;

        if(i < len){
            current = items[i];
            itemCallback(current).then(next);
        }else{
            dfd.resolve();
        }
    }

    next();

    return dfd.promise;
};