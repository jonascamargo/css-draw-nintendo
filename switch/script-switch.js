
var btns = document.querySelectorAll('.btn');

console.log( btns[4] );

document.addEventListener('keypress', (event) => {
    const keyName = event.key;

    console.log(event);
    console.log('keypress event \ n \ n' + 'chave:' + keyName);

    if( event.charCode == 'w' ){
        
    }
});