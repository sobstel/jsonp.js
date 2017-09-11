# jsonp.js

JSONP cross-domain ajax calls written in pure Javascript.

## Usage

If using an AMD loader, you need to set up the path config in e.g. require.js so that 'jsonp' resolves to the module's path

```javascript
require('jsonp', function(jsonp) {

  jsonp.send('url?callback=handleStuff', {
    callbackName: 'handleStuff',
    onSuccess: function(json){
      console.log('success!', json);
    },
    onTimeout: function(){
      console.log('timeout!');
    },
    timeout: 5
  });

});
```

## Notes

You need to add callback name to URL yourself if you need it, eg.

```javascript
jsonp.send('url?callback=name', {
  callbackName: 'name'
});
```
