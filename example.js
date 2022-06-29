const { translate } = require('./index');

/** Example
 * 
 * Translates "Hello world" into French. 
 **/
translate("Hello World", "en", "fr").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});