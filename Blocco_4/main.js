//1a:
//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

var Palla = {
    nome: "Palla",
    peso: 10
};



//Snack 1B
//Attraverso un prompt dare la possibilità all’utente di 
//modificare il peso della palla.

Palla.peso = Number(prompt("Inserisci il peso della palla!"));



//Sanck 2
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.
//(ripassiamo il Teorema di Pitagora ;D )

var triangolo = {
    base: 20,
    altezza: 15
}

var ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));
var perimetro = ipotenusa + triangolo.base + triangolo.altezza;

var area = (triangolo.base * triangolo.altezza) / 2;