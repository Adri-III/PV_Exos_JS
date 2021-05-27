/* let nb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let hashtag = "#";
console.log("Voici la pyramide :");

  console.log(hashtag += nb);
*/

let nb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for( count = 1; count <= nb; count++ )
{
  console.log(" ".repeat(nb - count) + "#".repeat(count))
}