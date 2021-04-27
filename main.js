var parolaUno = prompt("Inserisci la prima parola!");
var parolaDue = prompt("Inserisci la seconda parola!");

if (parolaUno.length < parolaDue.length) {
    console.log(parolaUno);
    console.log(parolaDue);
} else if (parolaUno.length > parolaDue.length) {
    console.log(parolaDue);
    console.log(parolaUno);
} else {
    console.log("Le due parole sono lunghe uguali!");
}