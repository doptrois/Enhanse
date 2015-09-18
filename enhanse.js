var Enhanse = (function () {
    
    return {

        /**
         * Saves body tag in a global variable
         * for further usage.
         * @return {object} body tag selector
         */
        init: function () {
            body = document.querySelector("body");
        },

        /**
         * Precompiles regular expression patterns (tbd)
         * @param  {String} regularExpressionName Variable to save the regular
         *                                        expression in
         * @param  {Array} regularExpressions    An array with regular
         *                                       expressions
         */
        precompile: function (regularExpressionName, regularExpressions) {
            if( Object.prototype.toString.call( regularExpressions ) === '[object Array]' ) {
                var i, s, regularExpressions = [ "Hello", "World" ], len = regularExpressions.length;
                for (i=0; i<len; ++i) {
                    if (i in regularExpressions) {
                        s = regularExpressions[i];
                        // console.log(s);
                    }
                }
            } else {
                
            }
        },

        /**
         * Replaces HTML comment with data
         * @param  {String} comment Text inside the HTML comment
         * @param  {function} data    Will replace the whole HTML comment
         */
        enhance: function (comment, data) {
            var nodestr = body.innerHTML,
                regex = new RegExp("<!-- " + comment + " -->", "g"),
                noderevealHTML =  nodestr.replace(regex, data);
            body.innerHTML = noderevealHTML;
        }
    
    };
    
})();
