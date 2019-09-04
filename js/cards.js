const SCREEN_CARDS_AMOUNT = 6;
const cardsBlock = document.querySelector(`.catalog-list`);

const cards = [
  {
    id: 1,
    group: `Средства для ухода`,
    category: `Набор для путешествий`,
    name: `Baxter of California`,
    price: 2900,
    bigPicture: `item-1-big.jpg`,
    catalogPicture: `prod-1.jpg`,
    previews: [`item-1.jpg`, `item-2.jpg`, `item-3.jpg`],
    articul: `dexter-ae`,
    inStock: true,
    text: `Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.`,
    productInfo: [
      `Средство для умывания (50 мл)`,
      `Увлажняющий крем (50 мл)`,
      `Крем для бритья (50 мл)`,
      `Крем после бритья, шампунь (50 мл)`,
      `Удобная кожаная косметичка`
    ]
  },
  {
    id: 2,
    group: `Средства для ухода`,
    category: `Увлажняющий кондиционер`,
    name: `Baxter of California`,
    price: 750,
    bigPicture: `item-1-big.jpg`,
    catalogPicture: `prod-2.jpg`,
    previews: [`item-1.jpg`, `item-2.jpg`, `item-3.jpg`],
    articul: `dexter-ae`,
    inStock: true,
    text: `Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.`,
    productInfo: [
      `Средство для умывания (50 мл)`,
      `Увлажняющий крем (50 мл)`,
      `Крем для бритья (50 мл)`,
      `Крем после бритья, шампунь (50 мл)`,
      `Удобная кожаная косметичка`
    ]
  },
  {
    id: 3,
    group: `Средства для ухода`,
    category: `Гель для волос`,
    name: `Suavecito`,
    price: 290,
    bigPicture: `item-1-big.jpg`,
    catalogPicture: `prod-3.jpg`,
    previews: [`item-1.jpg`, `item-2.jpg`, `item-3.jpg`],
    articul: `dexter-ae`,
    inStock: true,
    text: `Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.`,
    productInfo: [
      `Средство для умывания (50 мл)`,
      `Увлажняющий крем (50 мл)`,
      `Крем для бритья (50 мл)`,
      `Крем после бритья, шампунь (50 мл)`,
      `Удобная кожаная косметичка`
    ]
  },
  {
    id: 4,
    group: `Средства для ухода`,
    category: `Глина для укладки волос`,
    name: `American Crew`,
    price: 500,
    bigPicture: `item-1-big.jpg`,
    catalogPicture: `prod-4.jpg`,
    previews: [`item-1.jpg`, `item-2.jpg`, `item-3.jpg`],
    articul: `dexter-ae`,
    inStock: true,
    text: `Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.`,
    productInfo: [
      `Средство для умывания (50 мл)`,
      `Увлажняющий крем (50 мл)`,
      `Крем для бритья (50 мл)`,
      `Крем после бритья, шампунь (50 мл)`,
      `Удобная кожаная косметичка`
    ]
  },
  {
    id: 5,
    group: `Средства для ухода`,
    category: `Гель для волос`,
    name: `American Crew`,
    price: 300,
    bigPicture: `item-1-big.jpg`,
    catalogPicture: `prod-5.jpg`,
    previews: [`item-1.jpg`, `item-2.jpg`, `item-3.jpg`],
    articul: `dexter-ae`,
    inStock: true,
    text: `Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.`,
    productInfo: [
      `Средство для умывания (50 мл)`,
      `Увлажняющий крем (50 мл)`,
      `Крем для бритья (50 мл)`,
      `Крем после бритья, шампунь (50 мл)`,
      `Удобная кожаная косметичка`
    ]
  },
  {
    id: 6,
    group: `Средства для ухода`,
    category: `Набор для бритья`,
    name: `Baxter of California`,
    price: 3900,
    bigPicture: `item-1-big.jpg`,
    catalogPicture: `prod-6.jpg`,
    previews: [`item-1.jpg`, `item-2.jpg`, `item-3.jpg`],
    articul: `dexter-ae`,
    inStock: true,
    text: `Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.`,
    productInfo: [
      `Средство для умывания (50 мл)`,
      `Увлажняющий крем (50 мл)`,
      `Крем для бритья (50 мл)`,
      `Крем после бритья, шампунь (50 мл)`,
      `Удобная кожаная косметичка`
    ]
  }
];

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
