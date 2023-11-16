
// chiedere inserimento del nome 
const nome = prompt('inserisci il tuo nome');
// chiedere inserimento del cognome
const cognome = prompt('inserisci il tuo cognome');
// chiedere l'inserimento del colore preferito
const colore = prompt('inserisci il tuo colore preferito') + '23';
// sommare i vari elementi 
const risultato =  nome + cognome + colore;
// restituire risultato 
document.getElementById("risultato").innerHTML =  risultato;