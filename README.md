jsonp.js
========

JSONP cross-domain ajax calls written in pure Javascript.

Usage
-----

      $jsonp.send('url?callback=handleStuff', {
        callbackName: 'handleStuff',
        onSuccess: function(json){
          console.log('success!', json);
        },
        onTimeout: function(){
          console.log('timeout!');
        },
        timeout: 5
      });

Notes
-----

You need to add callback name to URL yourself if you need it, eg.

$jsonp.send('url?callback=name', { callbackName: 'name' });

