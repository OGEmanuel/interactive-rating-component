const button = document.querySelector('.btn');
const ratingsPage = document.querySelector('.ratings-page');
const rating = document.querySelector('.rating');
const ratingsBox = document.querySelector('.ratings-box');
const ratings = ratingsBox.querySelectorAll('.ratings');

let ratingSelected = rating.querySelector('.rating__selected');

document.addEventListener('click', function (e) {
  const clicked = e.target.closest('.ratings');
  if (!clicked) return;
  ratingSelected.textContent = clicked.textContent;
  ratings.forEach(ratings => ratings.classList.remove('selected'));
  clicked.classList.add('selected');
});

button.addEventListener('click', function () {
  button.closest('.ratings-page').classList.add('hidden');
  ratingsPage.nextElementSibling.classList.remove('hidden');
});
