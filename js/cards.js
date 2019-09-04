const SCREEN_CARDS_AMOUNT = 6;
const cardsBlock = document.querySelector(`.catalog-list`);

// Рендеринг элемента из разметки
const createElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};

// Рендерим строку карточки с данными
const getCardTemplate = ({id, category, name, price, catalogPicture}) => {
  return `<li class="catalog-item" data-id="${id}">
    <a href="catalog-item.html?item=${id}">
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
    // рендерим сообщение, что товаров нет
  }
};

renderCards(cardsBlock, cards.slice(0, SCREEN_CARDS_AMOUNT));
