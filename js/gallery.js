(function() {
  const gallery = document.querySelector(`.gallery-container`);
  const backBtn = gallery.querySelector(`.gallery-button-back`);
  const nextBtn = gallery.querySelector(`.gallery-button-next`);
  const contentBlock = gallery.querySelector(`.gallery-content`);

  // Полноразмерное изображение
  const fullPhoto = document.querySelector(`.modal-photo`);
  const fullImage = fullPhoto.querySelector(`img`);
  const photoClose = fullPhoto.querySelector(`.modal-close`);

  // Текущий слайд
  let currentSlide = null;
  let currentSlideIndex = 0;

  const PHOTOS = [{
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

  const getSlide = ({ id, title, img, href }) => {
    return `<a class="gallery-photo-link" id="${id}" href="${href}">
    <img class="gallery-foto" src="img/${img}" width="285" height="165" alt="${title}">
  </a>`.trim();
  };

  // Отрисовка слайда
  const renderSlide = (block, el) => {
    block.innerHTML = ``;
    block.appendChild(el);
  };

  // Обработчик нажатия на кнопку-крестик full-photo
  const photoCloseClickHandler = (evt) => {
    evt.preventDefault();
    fullPhoto.classList.remove(`modal-show`);
    photoClose.removeEventListener(`click`, photoCloseClickHandler);
  };

  // Обработчик нажатий на клавиши
  const documentKeyDownHandler = (evt) => {
    if (evt.keyCode === 27) {
      fullPhoto.classList.remove(`modal-show`);
      photoClose.removeEventListener(`click`, photoCloseClickHandler);
      document.removeEventListener(`keydown`, documentKeyDownHandler);
    }
  };

  // Обработчик клика по слайду
  const slideElClickHandler = (evt) => {
    evt.preventDefault();
    fullImage.src = currentSlide.querySelector(`img`).src;
    fullPhoto.classList.add(`modal-show`);
    photoClose.addEventListener(`click`, photoCloseClickHandler);
    document.addEventListener(`keydown`, documentKeyDownHandler);
  };

  // Рендерим слайд
  const showSlide = (slideData) => {
    const slideEl = createElement(getSlide(slideData));
    currentSlide = slideEl;
    slideEl.addEventListener(`click`, slideElClickHandler);
    renderSlide(contentBlock, slideEl);
  };

  // Перключение слайдов
  const changeSlide = (button) => {
    if (button === backBtn) {
      currentSlideIndex--;
      if (currentSlideIndex === 0) {
        backBtn.disabled = `disabled`;
      }
    } else {
      currentSlideIndex++;
      if (currentSlideIndex === PHOTOS.length - 1) {
        nextBtn.disabled = `disabled`;
      }
    }
    const nextSlideData = PHOTOS[currentSlideIndex];
    showSlide(nextSlideData);
  };

  // Обработчик нажатия на кнопку "Вперёд"
  const nextBtnClickHandler = (evt) => {
    evt.preventDefault();

    // Разлочиваем кнопку "Назад"
    if (backBtn.disabled) {
      backBtn.disabled = ``;
    }
    changeSlide(evt.target);
  };

  // Обработчик нажатия на кнопку "Назад"
  const backBtnClickHandler = (evt) => {
    evt.preventDefault();
    if (nextBtn.disabled) {
      nextBtn.disabled = ``;
    }
    changeSlide(evt.target);
  };

  backBtn.addEventListener(`click`, backBtnClickHandler);
  nextBtn.addEventListener(`click`, nextBtnClickHandler);

  // Стартовая отрисовка слайдера
  const initSlider = () => {
    showSlide(PHOTOS[currentSlideIndex]);
    backBtn.disabled = `disabled`;
    nextBtn.disabled = ``;
  };

  initSlider();
})();
