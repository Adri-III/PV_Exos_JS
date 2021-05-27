const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
let rent = true
for(let index in books){
  if (books[index].rented < 1){
    rent = false;
    break;  
  }
}
if (rent){
  console.log("Tous les livres ont été empruntés au moins une fois !")
}
else{
  console.log("Tout les livres n'ont pas été empruntés au moins une fois !")
}

console.log("Quel est le livre le plus emprunté ?")
let mostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log(mostRented)

console.log("Quel est le livre le moins emprunté ?")
let lessRented = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log(lessRented)

console.log("Trouves le livre avec l'ID: 873495 :")
idBook = books.find(book => book.id === 873495)
console.log(idBook)

console.log("Supprimes le livre avec l'ID: 133712 :")
for(let index in books){
  if (books[index].id === 133712){
    books.splice(index,1)
  }
}
console.log(books)

console.log("Tries les livres par ordre alphabétique (sauf le livre avec l'ID : 133712 car il est supprimé) !")
console.log (books.sort(function compare(a,b){
  if (a.title < b.title)
  return -1;
if (a.title > b.title)
  return 1;   
}));