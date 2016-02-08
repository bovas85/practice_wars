function validateHello(greetings) {
  return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
}

validateHello(hallo);
/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple regex to check if the string contains the world hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
By the way, how cool is the czech repubblic hallo!!

PS. you can assume the input is a string. PPS. to keep this a beginner exercise you don't need to check if the greeting is a subset of word ('Hallowen' can pass the test)
*/