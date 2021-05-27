// Exercice n°2 : Factorielle

let nb = prompt("De quel nombre veux-tu calculer la factorille ?");
function factoriel(x){
    if ( x < 0 ) throw new Error("Factorielle n'est définie que pour les entiers positifs");
    if ( x <=1 )return 1;
    else return x * factoriel( x-1 );
}
console.log("Le résultat est : " + nb * factoriel( nb-1 ));