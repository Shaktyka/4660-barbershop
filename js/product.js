(function() {
  // Реализуем отрисовку нажатого товара по id, полученному из параметров ссылки
  const main = document.querySelector(`main`);
  const pageTitle = main.querySelector(`.page-title`);
  const productBlock = main.querySelector(`.catalog-columns`);
  // const bcCatElem = document.querySelector(`.product-category`);
  // const breadcrumbsBlock = document.querySelector(`.breadcrumbs`);
  // const currBc = document.querySelector(`.breadcrumbs-current`);

  // Получаем id товара из параметров запроса
  const get = (name) => {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) {
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

  // Разметка контейнера для описания товара
  const prodBlockTemplate = `<div class="catalog-columns"></div>`;

  // Возвращает сообщение, когда не удалось получить товар
  const getNoProductMessage = (catObj) => {
    return `<div>
    <p class="no-products-message">Этот продукт не найден, но у нас есть много других.</p>
    <p>Выберите категорию:</p>
    <ul class="product-info">
      ${Object.values(catObj).map((item) => `<li><a href="catalog.html?cat=${getObjectKey(Categories, item)}">${item}</a></li>`).join(``)}
    </ul>
  </div>`.trim();
  };

  // Возвращает разметку блока с фото продукта
  const getProductPhoto = ({ id, category, name, bigPicture, previews }) => {
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

  // Возвращает разметку описания продукта
  const getProductInfo = ({ id, inStock, articul, text, productInfo, price }) => {
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

  // Разметка хлебных крошек
  const breadcrumbsTemplate = (category, product) => {
    return `<ul class="breadcrumbs">
    <li>
      <a href="index.html">Главная</a>
    </li>
    <li>
      <a href="catalog.html">Магазин</a>
    </li>
    <li>
      <a href="catalog.html?cat=${getObjectKey(Categories, category)}">${category}</a>
    </li>
    <li class="breadcrumbs-current">
      ${product}
    </li>
  </ul>`.trim();
  };

  // Начало
  const renderProductContent = () => {
    const prodCategory = Categories[get(`cat`)]; // получаем категорию
    const prodId = get(`item`); // получаем id товара
    const prodData = cards[prodId - 1]; // получаем данные товара

    if (prodCategory && prodData) {
      // Название страницы
      const prodName = `${prodData.category} «${prodData.name}»`;
      pageTitle.innerHTML = prodName;

      // Хлебные крошки
      main.appendChild(createElement(breadcrumbsTemplate(prodCategory, prodName)));

      // Контейнер для контента
      const prodBlock = createElement(prodBlockTemplate);
      // Описание продукта: 2 блока
      const photoSection = createElement(getProductPhoto(prodData));
      const infoSection = createElement(getProductInfo(prodData));
      prodBlock.appendChild(photoSection);
      prodBlock.appendChild(infoSection);
      main.appendChild(prodBlock);
    } else {
      // Контейнер для контента
      const prodBlock = createElement(prodBlockTemplate);
      // Предложение посмотреть другие продукты
      prodBlock.appendChild(createElement(getNoProductMessage(Categories)));
      main.appendChild(prodBlock);
    }
  };

  // Рендерит контент страницы
  renderProductContent();
})();
