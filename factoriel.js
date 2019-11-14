let numFact = prompt("donne un chiffre");
let resultat = 1;
for (i = 0; i < numFact; i++) {
    resultat = resultat *(numFact - i);
}
console.log(resultat);
