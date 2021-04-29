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

/* var numero = Number(prompt("Inserisci un numero!"));

for (var i = 1; i <= numero; i++){
    var operazione = Math.pow(i, 3); //Math.pow(base, esponente);
    console.log(operazione);
} */

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


//snack 7
//stampa le potenze di 2 fino a 1000 (2^n)
var counter = 0;
while (Math.pow(2, counter) < 1000) {
    
    console.log(Math.pow(2, counter));
    counter++;
}


/* snack 8 - blocco 1
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.  */
/* var numero = Number(prompt("Inserisci un numero di 4 cifre!"));
var somma = 0;
while (numero > 0) {
    somma = somma + (numero % 10);
    numero = numero / 10;
    numero = parseInt(numero);
}
console.log(somma); */

//altro modo senza parseInt
/* var numero = Number(prompt("Inserisci un numero!"));
somma = 0;
while (numero > 0) {
    somma = somma + (numero % 10) | 0;
    numero = numero / 10;
}
console.log(somma); */

//con stringa numerica inserita, divide le cifre della stringa in singolarmente in un array
/* var numero = "1234";
var numeri_array = numero.split(""); //inserisce le cifre singole dentro un array
var somma = 0;

for (var i = 0; i < numeri_array.length; i++){
    var elemento = numeri_array[i];
    somma += Number(elemento); //con Number trasformo la stringa in numero in modo da fare la somma e non la concatenazione
}

console.log(somma); */

//versione 2 - stringa
/* var somma = 0;
var numero = "1234";

for (var i = 0; i < numero.length; i++){
    var elemento = numero[i]; //funziona sulle stringhe come fosse un array
    somma += Number(elemento); //con Number trasformo la stringa in numero in modo da fare la somma e non la concatenazione
}

console.log(somma); */