//console.log("coucou depuis la console");

//commentaire sur une ligne
//console.log("Ceci n'est pas un commentaire")
/* commentaire écrit sur 
plusieurs lignes*/

/*
let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal
*/

/*
let a = 1;
let b = 1;
a++
console.log(a);
console.log(b += 2);
*/

/*
let a = "Bonjour", b = "Monde";
console.log(a + " " + b);
*/


/*
let a = 3;
  console.log("Bonjour à tous les "+ a);
  console.log(a + "3");
*/


/*
let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement);
*/


/*
const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"
*/


/*
let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};

console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

let attributName = "successRate";
console.log(THPSessionNum2[attributName]);
*/


/*
let number = 2; //fais ensuite le test avec d'autres valeurs
if(number > 0) {
  console.log("number est positif");
} 
*/

/*
let number = 0; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
} 
*/

/*
if (true && true) {
... (168 lignes restantes)