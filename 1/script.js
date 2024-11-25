const plusBtns = document.getElementsByClassName("plus-btn");
const minusBtns = document.getElementsByClassName("minus-btn");
const heartBtns = document.getElementsByClassName("fa-heart");
const trashBtns = document.getElementsByClassName("fa-trash-alt");
const quantities = document.getElementsByClassName("qte");
const prices = document.getElementsByClassName("unit-price");
const total = document.getElementById("total-price");

const plusBtnsArr = Array.from(plusBtns);
const minusBtnsArr = Array.from(minusBtns);
const heartBtnsArr = Array.from(heartBtns);
const trashBtnsArr = Array.from(trashBtns);
const quantitiesArr = Array.from(quantities);
const pricesArr = Array.from(prices);

function totalfinal() {
  const quantitiesArr = Array.from(quantities);
  const pricesArr = Array.from(prices);
  let sum = 0;
  for (let i = 0; i < pricesArr.length; i++) {
    sum = sum + pricesArr[i].textContent * quantitiesArr[i].textContent;
  }
  return (total.textContent = sum);
}

for (const plusBtn of plusBtnsArr) {
  plusBtn.addEventListener("click", function () {
    plusBtn.nextElementSibling.textContent++;
    totalfinal();
  });
}

for (const minusBtn of minusBtnsArr) {
  minusBtn.addEventListener("click", function () {
    if (minusBtn.previousElementSibling.textContent > 0) {
      minusBtn.previousElementSibling.textContent--;
      totalfinal();
    }
  });
}
for (const heartBtn of heartBtnsArr) {
  heartBtn.addEventListener("click", function () {
    heartBtn.classList.toggle("toggleHeart");
  });
}
for (const i in trashBtnsArr) {
  trashBtnsArr[i].addEventListener("click", function () {
    trashBtnsArr[i].parentElement.parentElement.parentElement.remove();
    totalfinal();
  });
}
