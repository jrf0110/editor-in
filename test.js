var editorIn = require('./');

editorIn({
  editor: process.argv[2] || 'vim'
, tmpFilePrefix: 'poop'
, tmpFilePostfix: '.markdown'
}, function( error, result ){
  console.log( result.toString() );
});
