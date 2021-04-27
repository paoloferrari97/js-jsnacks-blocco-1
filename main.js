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

var lista = ["mario", "luigi", "fabio", "gino", "vincenzo", "paolo"];
var nomeUtente = prompt("Inserisci il tuo nome!").toLowerCase();
var messaggio = "Non sei invitato!";
for (var i = 0; i < lista.length; i++){
    if (nomeUtente == lista[i]) {
        messaggio = "Benvenuto!";
    }
}
console.log(messaggio);