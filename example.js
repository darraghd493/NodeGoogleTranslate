const { translate } = require('./index');

/** Example
 * 
 * Translates "Bonjour le monde" from French to English "Hello world"
 **/
translate("Bonjour le monde").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});

/** Example
 * 
 * Translates "Hello world" into French "Bonjour le monde"
 **/
translate("Hello world", "en", "fr").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
