// Prendo i dati dal browser
fetch("https://striveschool-api.herokuapp.com/books")
.then((response) => response.json())
.then((data) => {
  data.forEach((book) => {
    createCard(book);
  });
})
.catch((error) => {
  console.error(
    "Si è verificato un errore",error);
});



  // Creo una funzione per creare una nuova card
  function createCard(book) {
    let cardId = "card-" + book.id;

    let cardContainer = document.getElementById("cardContainer");
    let cardElement = document.createElement("div");
    cardElement.setAttribute("id", cardId);
    cardElement.classList.add("col-lg-4", "col-md-6", "mb-4");

    let cardContent = `
    <div class="card">
      <img src="${book.img}" class="card-img-top" alt="${book.title}">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price}</p>
        <button class="btn btn-danger" onclick="deleteCard('${cardId}')">SCARTA</button>
        <button class="btn btn-info" onclick="addToCart('${cardId}')">COMPRA ORA</button>
      </div>
    </div> `;

    cardElement.innerHTML = cardContent;
    cardContainer.appendChild(cardElement);
  }

  // Creo una funzione per eliminare la card
 function deleteCard(cardId) {
    let cardElement = document.getElementById(cardId);
    cardElement.remove();
  }

  // Creo una funzione per inserire la card nel carrello
  function addToCart(cardId) {
    let cardElement = document.getElementById(cardId);
    let cartElement = document.getElementById("cartContainer");
    cartElement.appendChild(cardElement.cloneNode(true));
  }



