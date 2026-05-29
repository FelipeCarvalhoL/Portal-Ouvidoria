const input = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

const resultCount = document.getElementById("resultCount");

input.addEventListener("keyup", () => {

  const value = input.value.toLowerCase();

  let visible = 0;

  cards.forEach(card => {

    const text = card.innerText.toLowerCase();

    if(text.includes(value)){

      card.style.display = "block";

      visible++;

    }else{

      card.style.display = "none";
    }

  });

  resultCount.innerText = visible;
});
