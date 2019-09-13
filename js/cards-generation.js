// const Categories = {
//   care: `Средства для ухода`,
//   shavings: `Бритвенные принадлежности`,
//   accessories: `Аксессуары`
// };

let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Группы
const groups = [
  `care`,
  `shavings`,
  `accessories`
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
  `Pre-shave крем`,
  `Набор для усов и бороды`
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
  `The Bluebeards`,
  `Truefit&Hill`
];

// Описания (от 2 до 4)
const phrases = [
  `Профессиональное масло для ухода за бородой с ароматом табака и ветивера.`,
  `Масло сделает бороду более мягкой и послушной, увлажнит и придаст здоровый блеск.`,
  `Смесь эфирных масел виноградных косточек, оливы и подсолнечника оставляет ощущение приятной, легкой свежести.`,
  `Целебные свойства растительных масел укрепляют волосяные луковицы, стимулируют их рост.`,
  `Масло благотворно влияет на кожу под бородой, защищают от акне, перхоти и раздражения.`,
  `Матовая паста для укладки волос создает требуемый объем и форму прически.`,
  `Средняя фиксация. Не утяжеляет волосы. Идеально подходит для всех типов волос.`,
  `Бальзам после бритья The Bluebeards Revenge BBRPOST100 дополняет комфортное бритье.`, 
  `Действует на клетки волосяного фолликула и смягчает жестко растущие волосы.`,
  `Содержит экстракты гамамелиса виргинского и алоэ вера, известных своими противовоспалительными свойствами.`,
  `Бальзам отлично питает и увлажняет кожу.`,
  `Классическая подборка продуктов, знакомая многим поколениям мужчин.`
];

// Названия продуктов для productInfo
const products = [
  `Средство для умывания (50 мл)`,
  `Увлажняющий крем (50 мл)`,
  `Крем для бритья (50 мл)`,
  `Крем после бритья, шампунь (50 мл)`,
  `Удобная кожаная косметичка`,
  `Опасная бритва со сменным лезвием`,
  `Помазок для бритья`,
  `Крем для бритья (100 мл)`,
  `Бальзам после бритья (100 мл)`,
  `Шампунь для ухода за бородой (100 мл)`,
  `Маска для ухода за бородой (100 мл)`,
  `Воск для усов`,
  `Помада для укладки волос`,
  `Масло для бороды`
];

// Генерирует случайное число от min до max вкл.
const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Возвращает true или false
const getBoolean = () => Math.random() >= 0.5;

// Генерация артикула
const getArticul = () => {
  const letters = `${arr_EN[getRandomNumber(0, arr_EN.length - 1)]}${arr_EN[getRandomNumber(0, arr_EN.length - 1)]}${arr_EN[getRandomNumber(0, arr_EN.length - 1)]}`;
  const numCode = `${getRandomNumber(0, 9)}${getRandomNumber(0, 9)}${getRandomNumber(0, 9)}`;
  return `${letters}-${numCode}`;
};

// Перемешивает массив
const shuffleArray = (array) => {
  const copiedArray = array.slice();
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
  }
  return copiedArray;
};

// Возвращает х элементов из массива
const getElementsFromArray = (array, num) => shuffleArray(array).slice(0, num);

// Возвращает productInfo
const getProductInfo = () => {
// getElementsFromArray(products, getRandomNumber(1, 6))
  console.log('bingo');
};

// Генерирует объект с данными для карточек
const getCardData = () => {
  const category = categories[getRandomNumber(0, categories.length - 1)];
  const name = names[getRandomNumber(0, names.length - 1)];
  return {
    id: Date.now(),
    group: Categories[groups[getRandomNumber(0, 2)]],
    category: category,
    name: name,
    price: Math.ceil((getRandomNumber(300, 10000) + 1) / 100) * 100,
    bigPicture: ``,
    catalogPicture: ``,
    previews: [],
    articul: getArticul(),
    inStock: getBoolean(),
    text: getElementsFromArray(phrases, getRandomNumber(2, 5)),
    productInfo: category.match(/набор/i) ? getElementsFromArray(products, getRandomNumber(2, 6)) : `${category} «${name}»`
  }
};

console.log(getCardData());
