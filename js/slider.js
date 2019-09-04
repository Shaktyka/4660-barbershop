const gallery = document.querySelector(`.gallery-container`);
const backBtn = gallery.querySelector(`.gallery-button-back`);
const nextBtn = gallery.querySelector(`.gallery-button-next`);
const contentBlock = gallery.querySelector(`.gallery-content`);

let currentSlide = null;

const PHOTOS = [
  {
  	id: 101,
  	title: `Интерьер первого зала`,
  	img: `salon-1.jpg`,
  	href: `#`
  },
  {
  	id: 102,
  	title: `Интерьер второго зала`,
  	img: `salon-2.jpg`,
  	href: `#`
  },
  {
  	id: 103,
  	title: `Клиент с фирменным пивом`,
  	img: `salon-3.jpg`,
  	href: `#`
  },
  {
  	id: 104,
  	title: `Мастер за работой`,
  	img: `salon-4.jpg`,
  	href: `#`
  },
  {
  	id: 105,
  	title: `Инструменты`,
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

// Отрисовка слайда
const renderSlide = (block, el) => {
  block.innerHTML = ``;
  block.appendChild(el);
};

const showSlide = (slideData) => {
  const slideEl = createElement(getSlide(slideData));
  currentSlide = slideEl;
  renderSlide(contentBlock, slideEl);
};

// Обработчик нажатия на кнопку "Вперёд"
const nextBtnClickHandler = (evt) => {
  evt.preventDefault();
  backBtn.disabled = ``;
  // Повесить обработчик на кнопку "Вперёд"

  const currSlideIndex = PHOTOS.findIndex((element) => {
    return element.id === +currentSlide.id;
  });

  if (currSlideIndex === PHOTOS.length - 1) {
    nextBtn.disabled = `disabled`;
  } else {
    const nextSlideData = PHOTOS[currSlideIndex + 1];
    showSlide(nextSlideData);
  }
};

// Обработчик нажатия на кнопку "Назад"
const backBtnClickHandler = (evt) => {
  evt.preventDefault();

};

backBtn.addEventListener(`click`, backBtnClickHandler);
nextBtn.addEventListener(`click`, nextBtnClickHandler);

// Стартовая отрисовка слайдера
const initSlider = () => {
  const slideEl = createElement(getSlide(PHOTOS[0]));
  currentSlide = slideEl;
  renderSlide(contentBlock, slideEl);
  backBtn.disabled = `disabled`;
  nextBtn.disabled = ``;
};

initSlider();
