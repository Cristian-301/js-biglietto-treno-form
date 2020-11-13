
calcola.addEventListener("click",
function() {
  var nome = document.getElementById("nome").value;
  console.log(nome);
  var km = document.getElementById("km").value;
  console.log(km);
  var eta = document.getElementById("eta").value;
  console.log(eta);
  // il prezzo del biglietto è definito in base ai km (0.21 € al km);
  var costoBigliettoAlKm = 0.21;
  console.log(costoBigliettoAlKm)

  // prezzo totale del biglietto
  var costoBigliettoTotale = km * costoBigliettoAlKm;
  console.log("Costo Biglietto", costoBigliettoTotale)

  // va applicato uno sconto del 20% per i minorenni;
  var scontoMinorenni = ((costoBigliettoTotale * 20) / 100);
  var prezzoScontatoMinorenni = (costoBigliettoTotale - scontoMinorenni);
  console.log("Sconto Minorenni", scontoMinorenni)

  // va applicato uno sconto del 40% per gli over 65.
  var scontoOver = ((costoBigliettoTotale * 40) / 100);
  var prezzoScontatoOver = (costoBigliettoTotale - scontoOver);
  console.log("ScontoOver", scontoOver)


  if (eta == "minorenne") {

    console.log("Prezzo minorenni", costoBigliettoTotale - scontoMinorenni);
  } else if (eta == "over65") {

    console.log("Prezzo Over65", costoBigliettoTotale - scontoOver);
  } else {

    console.log("Prezzo normale", costoBigliettoTotale);
  }
  }
);
