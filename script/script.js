//EX 2: PROFILS CARD
const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25,
        avatar : './img/john.png',
        icon : './img/john_icon.png',
        latitude : 43.604429,
        longitude : 1.443812
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5,
        avatar : './img/jane.png',
        icon : './img/jane_icon.png',
        latitude : 43.60792, 
        longitude : 1.44133
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500,
        avatar : './img/venerable.png',
        icon : './img/venerable_icon.png',
        latitude : 43.60053,
        longitude : 1.44590
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe",
        avatar : './img/chien.png',
        icon : './img/chien_icon.png',
        latitude : 43.60377,
        longitude : 1.43583
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable",
        avatar : './img/renard.jpg',
        icon : './img/renard_icon.png',
        latitude : 43.59602,
        longitude : 1.43692
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45,
        avatar : './img/wrex.png',
        icon : './img/wrex_icon.png',
        latitude : 43.59555,
        longitude : 1.45257
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35,
        avatar : './img/garrus.png',
        icon : './img/garrus_icon.png',
        latitude : 43.61108,
        longitude : 1.45539
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25,
        avatar : './img/liara.png',
        icon : './img/liara_icon.png',
        latitude : 43.61183,
        longitude :  1.43222
    }
];

const tabData = [];
tabData.push(usersHuman, usersPet, usersXeno);

function cardHuman(objet) {
    const article = document.createElement("article");
    const titre = document.createElement("h2");
    titre.textContent = `${objet.name}`;
    const img = document.createElement("img");
    img.setAttribute("src", `${objet.avatar}`);
    img.setAttribute("alt", `Portrait de :${objet.avatar}`);
    const p = document.createElement("p");
    p.textContent = (`${objet.age}`, `${objet.mail}`);
    article.insertBefore(titre, img, p);
    article.classList.add("card");
    return article;
}
function cardPet(objet) {
    const article = document.createElement("article");
    const titre = document.createElement("h2");
    titre.textContent = objet.name;
    const img = document.createElement("img");
    img.setAttribute("src", objet.avatar);
    img.setAttribute("alt", `Portrait de :${objet.avatar}`);
    const p = document.createElement("p");
    p.textContent = (objet.age, objet.email);
    article.insertBefore(titre, img, p);
    article.classList.add("card");
    return article;
}
function cardXeno(objet) {
    const article = document.createElement("article");
    const titre = document.createElement("h2");
    titre.textContent = objet.name;
    const img = document.createElement("img");
    img.setAttribute("src", objet.avatar);
    img.setAttribute("alt", `Portrait de :${objet.avatar}`);
    const p = document.createElement("p");
    p.textContent = (objet.age, objet.email);
    article.insertBefore(titre, img, p);
    article.classList.add("card");
    return article;
}

function profil(objet){
    let cardList = [];
    for (const index of objet) {
        if (index.type == "humain"){
            cardList.push(cardHuman(objet));
        }
        else if (index.type == "animal de compagnie"){
            cardList.push(cardPet(objet));
        }else if (index.type == "Xeno") {
            cardList.push(cardXeno(objet));
        }else{
            console.log("Type de profil non existant");
        }
    } return cardList;

};
console.log(profil(usersHuman));


//EX 3: LEAFLET

var map = L.map('map').setView([43.604429, 1.443812], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function markerProfil(objet){
const icon = L.icon({
    iconUrl: objet.icon,
    iconSize: [50, 83],
    iconAnchor: [25, 83],
});
const marker = L.marker([objet.latitude, objet.longitude]).addTo(map);
};

markerProfil(usersHuman);