const Categories = {
  care: `Средства для ухода`,
  shavings: `Бритвенные принадлежности`,
  accessories: `Аксессуары`
};

// Группы
const groups = [
  care,
  shavings,
  accessories
];

// Категории
const categories = [
  `Набор для путешествий`,
  `Увлажняющий кондиционер`,
  `Гель для волос`,
  `Глина для укладки волос`,
  `Гель для волос`,
  `Набор для бритья`,
  `Крем для бритья`,
  `Воск для бороды и усов`,
  `Масло для бороды и усов`,
  `Бальзам для лица`,
  `Подарочный набор`,
  `Pre-shave крем`
];

// Названия
const names = [
  `Mr Natty`,
  `Topaxen`,
  `Baxter of California`,
  `Suavecito`,
  `American Crew`,
  `BARBER`,
  `Proraso`,
  `The Bluebeards`
];

// Описания (от 1 до 3)
const phrases = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

// Названия продуктов для productInfo
const products = () => [
  `Средство для умывания (50 мл)`,
  `Увлажняющий крем (50 мл)`,
  `Крем для бритья (50 мл)`,
  `Крем после бритья, шампунь (50 мл)`,
  `Удобная кожаная косметичка`
];

// Генерирует случайное число от min до max вкл.
const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

// Возвращает true или false
const getBoolean = () => Math.random() >= 0.5;

// Генерация артикула
const getArticul = (name) => {
  return name;
};

// Генерирует объект с данными для карточек
const getCardData = () => {
  return {
    id: Date.now(),
    group: Categories[groups[getRandomNumber(0, 2)]],
    category: ``,
    name: ``,
    price: getRandomNumber(300, 10000),
    bigPicture: ``,
    catalogPicture: ``,
    previews: [],
    articul: ``,
    inStock: getBoolean(),
    text: `Массив из 1-3 предложений`,
    productInfo: `Массив из 1-6 элементов`
  }
};
