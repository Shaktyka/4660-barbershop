// Реализуем отрисовку нажатого товара по id, полученному из параметров ссылки
const productBlock = document.querySelector(`.catalog-columns`);
const pageTitle = document.querySelector(`.page-title`);

// Рендеринг элемента из разметки
const createElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};

const getProductPhoto = ({id, category, name, bigPicture, previews}) => {
  return `<section class="product-photos" data-id="${id}">
    <h2 class="visually-hidden">Изображения товара</h2>
    <p class="product-photo-full">
      <img src="img/${bigPicture}" width="460" height="498" alt="${category} «${name}»">
    </p>
    <ul class="product-photo-preview">
      ${Array.from(previews).map((preview) => `<li>
        <img src="img/${preview}" width="140" height="149" alt="${category} «${name}»">
      </li>`).join(``)}
    </ul>
  </section>`.trim();
};

const getProductInfo = ({id, inStock, articul, text, productInfo, price}) => {
  return `<section class="product-info" data-id="${id}">
    <h2 class="visually-hidden">Описание товара</h2>
    <div class="product-description">
      <p class="product-availability">${inStock ? `Есть в наличии` : `Нет в наличии`}</p>
      <p class="product-articul">Articul: ${articul}</p>
    </div>
    <p class="product-text">${text}</p>
    <p class="product-price">
      <b>${price} ₽</b>
      <a class="button" href="#">Купить</a>
    </p>
    <h3>В набор входят:</h3>
    <ul class="product-info">
      ${Array.from(productInfo).map((item) => `<li>${item}</li>`).join(``)}
    </ul>
  </section>`.trim();
};

// Получаем id товара из параметров запроса
const get = (name) => {
   if(name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) {
      return decodeURIComponent(name[1]);
   }
};

// Рендерим описание продукта
const renderProductDescription = (block, id) => {
  // Отрендерить заголовок страницы
  // Хлебные крошки (категория и название)
  // Рендеринг контента описания товара
  const photoSection = createElement(getProductPhoto(cards[id - 1]));
  const infoSection = createElement(getProductInfo(cards[id - 1]));
  block.appendChild(photoSection);
  block.appendChild(infoSection);
};

// pageTitle.innerHTML = ``;
renderProductDescription(productBlock, get(`item`));
