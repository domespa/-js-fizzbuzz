/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/


// 1- Scrivi un programma che stampi i numeri da 1 a 100
//    SE è divisibile sia per 3 che per 5 stampa FizzBuzz
//      ALTRIMENTI SE è divisibile per 3 stampa Fizz
//      ALTRIMENTI SE è divisibile per 5 stampa Buzz

// 1- Scrivi un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //  SE è divisibile sia per 3 che per 5 stampa FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
    //  ALTRIMENTI SE è divisibile per 5 stampa Fizz
            console.log("Buzz");
        } else if (i % 3 === 0) {
    //  ALTRIMENTI SE è divisibile per 3 stampa Buzz
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
