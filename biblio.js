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

//Est-ce que tous les livres ont été au moins empruntés une fois ?
{
    console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
    let bool = "oui";
    books.forEach(livre => {
        if (livre.rented === 0){bool = "non";}}
        )
    console.log(bool);
}

//Quel est livre le plus emprunté ?
console.log("Quel est livre le plus emprunté ?")
let max = 0;
let max_title = " ";
let max_id = 0;
books.forEach(book =>
    {
        if(book.rented > max)
        {
        max = book.rented;
        max_title = book.title;
        max_id = book.id;
        }
    });
console.log(`Le livre le plus emprunté avec ${max} emprunts est ${max_title} et son id est ${max_id}.`)

//Quel est le livre le moins emprunté ?
let min = max;
let min_title = " ";
let min_id = 0;
books.forEach(book =>
    {
        if(book.rented < min)
        {
        min = book.rented;
        min_title = book.title;
        min_id = book.id;
        }
    });
    console.log(`Le livre le moins emprunté avec ${min} emprunts est ${min_title} et son id est ${min_id}.`)

    //Trouve le livre avec l'ID: 873495 ;
{
    const found = books.find(element => element.ID = 873495);
console.log(found)
}

//Supprime le livre avec l'ID: 133712 ;
{
//const found = books.find(element => element.ID = 133712);
const index = books.findIndex((element) => element.id === 133712);
books.splice(index,1);
console.log(index);
console.log(books);
}

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
{
    function tri(a,b)
    {
    return (a.title > b.title)?1:-1;
    }

    books.sort(tri);
    console.log(books)
}