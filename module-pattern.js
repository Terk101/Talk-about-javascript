let counter = (function() { //return an object
    //private stuff
    let count = 0;
    function print(message) {
        console.log(message +'-----'+ count);
    }

    return {
        get :function() {
            return count;
        },

        set : function(value) {
           count = value;
        }

    }

})();

let func = function() {
    console.log('Hello');
}

func();