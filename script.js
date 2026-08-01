let collection = JSON.parse(localStorage.getItem("frogCollection")) || [];

function openFrog() {
  const frog = document.querySelector(".chocolate-frog");
  const cardBox = document.getElementById("card");

  // Frog shakes
  frog.classList.remove("jump");
  frog.classList.add("shake");

  setTimeout(() => {

    // Frog jumps away
    frog.classList.remove("shake");
    frog.classList.add("jump");

    // Pick a rarity card
    const randomCard = getRandomCard();

    setTimeout(() => {

      cardBox.style.display = "block";

      cardBox.innerHTML = `
        ✨ Chocolate Frog Card ✨
        <h3>${randomCard.name}</h3>
        <p>⭐ ${randomCard.rarity}</p>
        <p>"${randomCard.quote}"</p>
      `;

      collection.push(randomCard.name);

      localStorage.setItem(
        "frogCollection",
        JSON.stringify(collection)
      );

    }, 500);

  }, 500);
}


function showCollection() {
  const collectionBox = document.getElementById("collection");

  if (collection.length === 0) {

    collectionBox.innerHTML =
      "You haven't opened any Chocolate Frogs yet! 🐸";

    return;
  }


  collectionBox.innerHTML = `
    <h2>📖 Chocolate Frog Album</h2>
    ${[...new Set(collection)]
      .map(card => `<p>✨ ${card}</p>`)
      .join("")}
  `;
}


// Rarity chances
function getRandomCard() {

  const chance = Math.random() * 100;

  let rarity;


  if (chance < 5) {
    rarity = "Legendary";
  }

  else if (chance < 20) {
    rarity = "Epic";
  }

  else if (chance < 50) {
    rarity = "Rare";
  }

  else {
    rarity = "Common";
  }


  const possibleCards = cards.filter(
    card => card.rarity === rarity
  );


  return possibleCards[
    Math.floor(Math.random() * possibleCards.length)
  ];
}
