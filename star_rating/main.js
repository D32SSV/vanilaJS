const stars = document.querySelectorAll(".fa-star-o");
const starValue = document.querySelector(".value");

let selectedStars = -1;

stars.forEach((item, id) => {
  item.dataset.rating = id + 1;
  item.addEventListener("mouseover", handleMouseOver);
  item.addEventListener("click", handleOnClick);
  item.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpdateRatingState(currentRatingValue);
}

function handleUpdateRatingState(getCurrentRatingValue) {
  for (let i = 0; i < 6; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleOnClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  selectedStars = currentRatingValue;
  handleUpdateRatingState(selectedStars);
  starValue.textContent = `Selected Stars : ${selectedStars}`;
}

function handleMouseLeave() {
  handleUpdateRatingState(selectedStars);
}
