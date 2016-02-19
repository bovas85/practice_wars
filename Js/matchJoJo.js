/*you can either create a valid regex to find if a character
is a JoJo or create a function for it.
bonus points if you do both ;)*/

/*Oh, and think about beginners: try to be informative and
comment with some explanation for the sake of their learning!*/

var regex=/jo.*\s.*jo.*|gio.*\s.*gio.*/i; //your regex here or...

function isJojo(name){
  return regex.test(name);
}

//

var regex = /^(\w{2})\w*\s(\1\w*|\w*\1)$/i;

function isJojo(name){
  return regex.test(name);
}

//

function isJojo(name){
  return !!name.match(/^(jo|gio).* .*(jo|gio)[a-zA-Z]*$/i);
}