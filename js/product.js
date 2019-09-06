// Реализуем отрисовку нажатого товара по id, полученному из параметров ссылки
const productBlock = document.querySelector(`.catalog-columns`);
const pageTitle = document.querySelector(`.page-title`);
const bcCatElem = document.querySelector(`.product-category`);
const currBc = document.querySelector(`.breadcrumbs-current`);

// Получаем id товара из параметров запроса
const get = (name) => {
  if(name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) {
    return decodeURIComponent(name[1]);
  }
};

// Рендеринг элемента из разметки
const createElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};

// Получаем ключ объекта по его значению
const getObjectKey = (obj, value) => {
  let key = null;
  for (let val in obj) {
    if (obj[val] === value) {
      key = val;
      break;
    }
  }
  return key;
};

const getNoProductMessage = (catObj) => {
  return `<div>
    <p class="no-products-message">Этот продукт не найден, но у нас есть много других.</p>
    <p>Выберите категорию:</p>
    <ul class="product-info">
      ${Object.values(catObj).map((item) => `<li><a href="catalog.html?cat=${getObjectKey(Categories, item)}">${item}</a></li>`).join(``)}
    </ul>
  </div>`.trim();
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

// Рендерим описание продукта
const renderProductDescription = (block, category, id) => {
  const productData = cards[id - 1];
  if (category && productData) {
    const productName = `${productData.category} «${productData.name}»`;
    pageTitle.innerHTML = productName;

    // Хлебные крошки (категория и название)
    bcCatElem.innerHTML = category;
    currBc.innerHTML = productName;

    // Рендеринг контента описания товара
    const photoSection = createElement(getProductPhoto(productData));
    const infoSection = createElement(getProductInfo(productData));
    block.appendChild(photoSection);
    block.appendChild(infoSection);
  } else {
    // Добавляем строку, что продукт не найден
    block.appendChild(createElement(getNoProductMessage(Categories)));
  }
};

// Рендерим контент страницы
renderProductDescription(productBlock, Categories[get(`cat`)], get(`item`));
