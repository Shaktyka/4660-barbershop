(function() {
  const SCREEN_CARDS_AMOUNT = 6;
  const cardsBlock = document.querySelector(`.catalog-list`);
  const paginationBlock = document.querySelector(`.pagination-list`);
  const currentBC = document.querySelector(`.breadcrumbs-current`);
  // cards = [];

  // Сообщение, что товаров нет
  const noCardsMessage = `<li class="no-products-message">К сожалению, ничего не нашлось. Попробуйте посмотреть другие наши предложения.</li>`;

  // Получем значение свойства из параметров запроса
  const get = (name) => {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) {
      return decodeURIComponent(name[1]);
    }
  };

  // Рендерим текущий Breadcrumb
  const setCurrentBreadcrumb = () => {
    currentBC.innerHTML = Categories[get(`cat`)];
  };

  setCurrentBreadcrumb();

  // Рендеринг элемента из разметки
  const createElement = (string) => {
    const div = document.createElement(`div`);
    div.innerHTML = string;
    return div.firstChild;
  };

  // Рендерим строку карточки с данными
  const getCardTemplate = ({ id, category, name, price, catalogPicture }) => {
    return `<li class="catalog-item" data-id="${id}">
    <a href="catalog-item.html?cat=${get(`cat`)}&item=${id}">
      <h3>
        <span class="catalog-category">${category}</span>
        <span class="catalog-item-title">«${name}»</span>
      </h3>
      <p class="catalog-item-image">
        <img src="img/${catalogPicture}" width="220" height="165" alt="${category} «${name}»">
      </p>
    </a>
    <p class="catalog-item-price">
      <b>${price} ₽</b>
      <a class="button" href="#">Купить</a>
    </p>
  </li>`.trim();
  };

  // Рендерим карточки на страницу
  const renderCards = (block, cardsArr) => {
    if (cardsArr.length > 0) {
      const fragment = document.createDocumentFragment();
      cardsArr.forEach((dataObj) => {
        const card = createElement(getCardTemplate(dataObj));
        fragment.appendChild(card);
      });
      block.appendChild(fragment);
    } else {
      block.appendChild(createElement(noCardsMessage));
    }
  };

  renderCards(cardsBlock, cards.slice(0, SCREEN_CARDS_AMOUNT));

  // Возвращает шаблон элемента пагинации
  const getPaginationTemplate = (index, isCurrent = false) => {
    return `<li class="pag-item ${isCurrent ? `pagination-item-current` : ``}">
    <a ${isCurrent ? `` : `href="?pag=${index}"`}>${index}</a>
  </li>`.trim();
  };

  // Рендерим список пагинации
  const renderPagination = () => {
    //Ссчитаем, сколько элементов в пагинации отрисовать
    const paginationElemsAmount = (cards.length === 0 || cards.length === SCREEN_CARDS_AMOUNT) ? `false` : Math.ceil(cards.length / SCREEN_CARDS_AMOUNT);
    // Рендерим пагинацию
    if (paginationElemsAmount !== false) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < paginationElemsAmount; i++) {
        const isCurrent = i === 0;
        const paginationElement = createElement(getPaginationTemplate(i + 1, isCurrent));
        fragment.appendChild(paginationElement);
      }
      paginationBlock.appendChild(fragment);
    }
  };

  renderPagination();
})();
