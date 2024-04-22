const dome = {
  carousList: document.querySelector(".carousel-list"),
  arrowLeft: document.querySelector(".carousel-left"),
  arrowRight: document.querySelector(".carousel-right"),
  indicators: document.querySelectorAll(".indicator"),
};
let curIndex = 0;
const count = dome.carousList.getElementsByTagName("div").length;
console.log(count);

function moveTo(index) {
  let translateX = -index * 100;

  const styles = {
    transform: `translateX(${translateX}%)`,
    transition: "transform 0.5s",
  };
  Object.assign(dome.carousList.style, styles);
  dome.indicators.forEach((indicator, i) => {
    indicator.className = i == index ? "indicator active" : "indicator";
  });
  curIndex = index;
}
dome.indicators.forEach((indicator, i) => {
  indicator.onclick = () => {
    moveTo(i);
  };
});

function init() {
  const firstEle = dome.carousList.firstElementChild.cloneNode(true);
  const lastEle = dome.carousList.lastElementChild.cloneNode(true);
  dome.carousList.appendChild(firstEle);
  dome.carousList.insertBefore(lastEle, dome.carousList.firstElementChild);
  lastEle.style.marginLeft = "-100%";
}
init();
function moveLft() {
  if (curIndex === 0) {
    dome.carousList.style.transition = "none";
    dome.carousList.style.transform = `translateX(${-count * 100}%)`;
    dome.carousList.clientWidth;
    moveTo(count - 1);
  } else {
    moveTo(curIndex - 1);
  }
}
function moveRight() {
  if (curIndex === count - 1) {
    dome.carousList.style.transition = "none";
    dome.carousList.style.transform = `translateX(100%)`;
    dome.carousList.clientWidth;
    moveTo(0);
  } else {
    moveTo(curIndex + 1);
  }
}
dome.arrowLeft.onclick = moveLft;
dome.arrowRight.onclick = moveRight;
