var fs      = require('fs');
var child   = require('child_process');
var tmp     = require('tmp');

module.exports = function( options, callback ){
  var defaults = {
    tmpFilePrefix:   ''
  , tmpFilePostfix:  ''
  , editor:   'vi'
  };

  if ( typeof options === 'function' ){
    callback = options;
    options = null;
  }

  options = options || {};

  for ( var key in defaults ){
    if ( !(key in options) ) options[ key ] = defaults[ key ];
  }

  if ( !options.editor && !process.env.EDITOR ){
    throw new Error('Missing required option: `editor`');
  }

  var toptions = {
    prefix: options.tmpFilePrefix
  , postfix: options.tmpFilePostfix
  };

  tmp.file( toptions, function( error, fpath ){
    if ( error ) return callback( error );

    var editor = child.spawn(
      options.editor || process.env.EDITOR
    , [ fpath ]
    , { stdio: 'inherit' }
    );

    editor.on( 'exit', function( code ){
      fs.readFile( fpath, callback );
    });
  });
};