const loginBtn = document.querySelector(`.login-link`);
const loginWindow = document.querySelector(`.modal-login`);

const loginBtnClickHandler = (evt) => {
  evt.preventDefault();
  console.log(1);
};

loginBtn.addEventListener(`click`, loginBtnClickHandler);

