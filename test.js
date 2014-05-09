var editorIn = require('./');

editorIn({
  editor: 'vim'
, tmpFilePrefix: 'poop'
, tmpFilePostfix: '.markdown'
}, function( error, result ){
  console.log( result.toString() );
});
