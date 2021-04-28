/* Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/* var parolaUno = prompt("Inserisci la prima parola!");
var parolaDue = prompt("Inserisci la seconda parola!");

if (parolaUno.length < parolaDue.length) {
    console.log(parolaUno);
    console.log(parolaDue);
} else if (parolaUno.length > parolaDue.length) {
    console.log(parolaDue);
    console.log(parolaUno);
} else {
    console.log("Le due parole sono lunghe uguali!");
} */


/* Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* var numero;
var somma = 0;
for (var i = 0; i < 10; i++){
    numero = Number(prompt("Inserisci un numero!"));
    somma = somma + numero;
}
console.log(somma); */


/* Snack 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.  */

/* var lista = ["mario", "luigi", "fabio", "gino", "vincenzo", "paolo"];
var nomeUtente = prompt("Inserisci il tuo nome!").toLowerCase();
var messaggio = "Non sei invitato!";
for (var i = 0; i < lista.length; i++){
    if (nomeUtente == lista[i]) {
        messaggio = "Benvenuto!";
    }
}
console.log(messaggio); */


/* Snack 5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.  */

/* var lista = [];
for (var i = 0; i < 6; i++){
    var numero = Number(prompt("Inserisci un numero!"));
    if (numero % 2 != 0) {
        lista.push(numero);
    }
}
//stampo la lista per vedere che numeri ha inserito
for (var i = 0; i < lista.length; i++){
    console.log(lista[i]);
} */


/* snack 6 - blocco 1:
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

var numero = Number(prompt("Inserisci un numero!"));

for (var i = 1; i <= numero; i++){
    var operazione = Math.pow(i, 3); //Math.pow(base, esponente);
    console.log(operazione);
}

//con while
/* var i = 1;
while (i <= numero) {
    var operazione = i * i * i;
    console.log(operazione);
    i++;
} */

//con do-while
/* var i = 1;
do {
    var operazione = i * i * i;
    console.log(operazione);
    i++;
} while (i <= numero); */