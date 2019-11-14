let askUser = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let etages = "#";
let espace = " ";

for (let i = 1; i <= askUser; i++) {
   resultat = espace.repeat(askUser - i) + etages.repeat(i)

    console.log(resultat);
}

