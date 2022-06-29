# NodeGoogleTranslate
NodeGoogleTranslate is a Node.js module which makes it easier to communicate with the Google Translate API. It is simple and easy to use.

## Starting off
To start off with NodeGoogleTranslate, you will first need to import it, it only has a single function of `translate` which can be imported on it's own if you would like to do so.

To use the translate function, you will only need to specify your text and it will automatically translate to English.

```js
/** Example **/
translate("Bonjour le monde").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

To customize apon this, you can also set what the language you are translating from (the default is auto) as well as the target language. 

```js
/** Example **/
translate("Hello world", "en", "fr").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```