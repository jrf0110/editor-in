var editorIn = require('./');

editorIn({
  editor: 'vim'
, tmpFilePrefix: 'poop'
, tmpFilePostfix: '.md'
}, function( error, result ){
  console.log( result.toString() );
});