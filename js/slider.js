const gallery = document.querySelector(`.gallery-container`);
const backBtn = gallery.querySelector(`.gallery-button-back`);
const nextBtn = gallery.querySelector(`.gallery-button-next`);
const contentBlock = gallery.querySelector(`.gallery-content`);

const PHOTOS = [
  {
  	id: 101,
  	title: `Салон`,
  	img: `salon-1.jpg`,
  	href: `#`
  },
  {
  	id: 102,
  	title: `Салон`,
  	img: `salon-2.jpg`,
  	href: `#`
  },
  {
  	id: 103,
  	title: `Салон`,
  	img: `salon-3.jpg`,
  	href: `#`
  },
  {
  	id: 104,
  	title: `Салон`,
  	img: `salon-4.jpg`,
  	href: `#`
  },
  {
  	id: 105,
  	title: `Салон`,
  	img: `salon-5.jpg`,
  	href: `#`
  }
];

// Рендеринг элемента из разметки
const createElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};

const getSlide = ({id, title, img, href}) => {
  return `<a class="gallery-photo-link" id="${id}" href="${href}">
    <img class="gallery-foto" src="img/${img}" width="286" height="164" alt="${title}">
  </a>`.trim();
};

const nextBtnClickHandler = (evt) => {
  evt.preventDefault();

};

const backBtnClickHandler = (evt) => {
  evt.preventDefault();

};

backBtn.addEventListener(`click`, backBtnClickHandler);
nextBtn.addEventListener(`click`, nextBtnClickHandler);

// Отрисовка слайда
const renderSlide = (block, el) => {
  block.innerHtml = ``;
  block.appendChild(el);
};

// Стартовая отрисовка слайдера
const initSlider = () => {
  const slideEl = createElement(getSlide(PHOTOS[0]));
  renderSlide(contentBlock, slideEl);
  backBtn.disabled = `disabled`;
  nextBtn.disabled = ``;
};

initSlider();
