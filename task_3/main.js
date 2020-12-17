let text = prompt();

text = text.split(' ');
let words = 0;

for(let i = 0; i < text.length; i++){
  if(text[i] === 'html'){
    words += 1;
  }
}

console.log(`${text}: 'html' = ${words}`);

