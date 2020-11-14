var calcola = document.getElementById("calcola");

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

  var messaggio = "";
    if (eta == "minorenne") {
      messaggio = "Sconto" + "<br>" + "minorenne";
      var prezzoFinale = costoBigliettoTotale - scontoMinorenni;
      console.log("Prezzo minorenni", costoBigliettoTotale - scontoMinorenni);
    } else if (eta == "over65") {
      messaggio = "Sconto" + "<br>" + "Silver";
      var prezzoFinale = costoBigliettoTotale - scontoOver;
      console.log("Prezzo Over65", costoBigliettoTotale - scontoOver);
    } else {
      messaggio = "Prezzo pieno"
      var prezzoFinale = costoBigliettoTotale;
      console.log("Prezzo normale", costoBigliettoTotale);
    }


    document.getElementById("stampa_nome").innerHTML = nome;
    document.getElementById("offerta").innerHTML = messaggio;
    carrozza = Math.floor( Math.random() * 8) + 1;
    document.getElementById("carrozza").innerHTML = carrozza;
    codice = Math.floor( Math.random() * 10000) + 90000;
    document.getElementById("codice").innerHTML = codice;
    var prezzoFinale = prezzoFinale.toFixed(2) + "€" ;
    document.getElementById("prezzo_finale").innerHTML = prezzoFinale;

    var bigliettoDiv = document.getElementById("biglietto_passeggero");
    bigliettoDiv.className = "show";
  }


);

var annulla = document.getElementById("annulla");
annulla.addEventListener("click",
  function() {

    var bigliettoDiv = document.getElementById("biglietto_passeggero");
    bigliettoDiv.className = "hidden";
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("stampa_nome").innerHTML ="";
    document.getElementById("offerta").innerHTML ="";
    document.getElementById("carrozza").innerHTML ="";
    document.getElementById("codice").innerHTML ="";
    document.getElementById("prezzo_finale").innerHTML ="";

  }
)
