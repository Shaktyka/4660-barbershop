const loginLink = document.querySelector(`.login-link`);
const loginPopup = document.querySelector(`.modal-login`);
const loginClose = loginPopup.querySelector(`.modal-close`);
const loginSubmit = loginPopup.querySelector(`.login-submit`);

const loginForm = loginPopup.querySelector(`.login-form`);

const userLoginField = loginForm.querySelector(`#user-login`);
const userPassField = loginForm.querySelector(`#user-password`);
const rememberCheck = loginForm.querySelector(`.login-checkbox input`);
const restoreLink = loginForm.querySelector(`.restore`);

// const loginSubmitClickHandler = (evt) => {
//   evt.preventDefault();
//   loginPopup.classList.remove(`modal-show`);
// };

const loginCloseClickHandler = (evt) => {
  evt.preventDefault();
  loginPopup.classList.remove(`modal-show`);
};

const loginLinkClickHandler = (evt) => {
  evt.preventDefault();
  loginPopup.classList.add(`modal-show`);
  userLoginField.focus();
};

const loginFormSubmitHandler = (evt) => {
  evt.preventDefault();
};

loginForm.addEventListener(`submit`, loginFormSubmitHandler);
// loginSubmit.addEventListener(`click`, loginSubmitClickHandler);
loginClose.addEventListener(`click`, loginCloseClickHandler);
loginLink.addEventListener(`click`, loginLinkClickHandler);

