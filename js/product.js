// Реализуем отрисовку нажатого товара по id, полученному из параметров ссылки
const productBlock = document.querySelector(`.catalog-columns`);

// Рендеринг элемента из разметки
const createElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};

const getProductPhoto = ({id}) => {
  console.log(id);
  return `<section class="product-photos">
        <h2 class="visually-hidden">Изображения товара</h2>
        <p class="product-photo-full">
          <img src="img/item-1-big.jpg" width="460" height="498" alt="Набор для путешествий «Baxter of California»">
        </p>
        <ul class="product-photo-preview">
          <li>
            <img src="img/item-1.jpg" width="140" height="149" alt="Набор для путешествий «Baxter of California»">
          </li>
          <li>
            <img src="img/item-2.jpg" width="140" height="149" alt="Набор для путешествий «Baxter of California»">
          </li>
          <li>
            <img src="img/item-3.jpg" width="140" height="149" alt="Набор для путешествий «Baxter of California»">
          </li>
        </ul>
      </section>`.trim();
};

const getProductInfo = ({id}) => {
  return `<section class="product-info">
        <h2 class="visually-hidden">Описание товара</h2>
        <div class="product-description">
          <p class="product-availability">Есть в наличии</p>
          <p class="product-articul">Articul: dexter-ae</p>
        </div>
        <p class="product-text">Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.</p>
        <p class="product-price">
          <b>2900 ₽</b>
          <a class="button" href="#">Купить</a>
        </p>
        <h3>В набор входят:</h3>
        <ul class="product-info">
          <li>Средство для умывания (50 мл)</li>
          <li>Увлажняющий крем (50 мл)</li>
          <li>Крем для бритья (50 мл)</li>
          <li>Крем после бритья, шампунь (50 мл)</li>
          <li>Удобная кожаная косметичка</li>
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
const renderProduct = (block, id) => {
  const photoSection = createElement(getProductPhoto(cards[id - 1]));
  const infoSection = createElement(getProductInfo(cards[id - 1]));
  block.appendChild(photoSection);
  block.appendChild(infoSection);
};

renderProduct(productBlock, get(`item`));
