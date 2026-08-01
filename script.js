let collection = JSON.parse(localStorage.getItem("frogCollection")) || [];

function openFrog() {
  const cardBox = document.getElementById("card");
  
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  cardBox.style.display = "block";

  cardBox.innerHTML = `
    <h3>${randomCard.name}</h3>
    <p>⭐ ${randomCard.rarity}</p>
    <p>"${randomCard.quote}"</p>
  `;

  collection.push(randomCard.name);

  localStorage.setItem(
    "frogCollection",
    JSON.stringify(collection)
  );
}

function showCollection() {
  const collectionBox = document.getElementById("collection");

  if (collection.length === 0) {
    collectionBox.innerHTML = "You haven't opened any Chocolate Frogs yet! 🐸";
    return;
  }

  collectionBox.innerHTML = `
    <h2>📖 Your Collection</h2>
    ${[...new Set(collection)].map(card => 
      `<p>✨ ${card}</p>`
    ).join("")}
  `;
}
