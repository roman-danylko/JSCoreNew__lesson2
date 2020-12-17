let text = prompt();
let letspace = 0;

for(let i = 0; i < text.length; i++){
  if(text[i] === ' '){
    letspace += 1;
  }
}

console.log(`${text}: letspaces = ${letspace}`);


