
// Il programma dovrà chiedere all'utente il numero di 
// chilometri
//  che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare
//  il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in 
// forma umana (con massimo due decimali, per indicare 
// centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// numero km utente
let NumeroKm = parseInt(prompt('inserire numero km percorsi:'));

console.log(NumeroKm);

// eta' utente
let anni = parseInt(prompt('inserire anni:'));

console.log(anni);


let prezzoBiglietto = NumeroKm * "0.21"


console.log(prezzoBiglietto);

let prezzoFinale;

console.log(prezzoFinale);


if (anni <= 18) {

    prezzoFinale = (prezzoBiglietto * 0.21);
}










