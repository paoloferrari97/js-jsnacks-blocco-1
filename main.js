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

var numero;
var somma = 0;
for (var i = 0; i < 10; i++){
    numero = Number(prompt("Inserisci un numero!"));
    somma = somma + numero;
}
console.log(somma);