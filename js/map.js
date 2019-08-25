const mapLink = document.querySelector(`.contacts-button-map`);
const footerContactsLink = document.querySelector(`.footer-contacts-link`);

const mapPopup = document.querySelector(`.modal-map`);
const mapClose = mapPopup.querySelector(`.modal-close`);

const mapLinkClickHandler = (evt) => {
  evt.preventDefault();
  mapPopup.classList.add(`modal-show`);
};

const mapCloseClickHandler = (evt) => {
  evt.preventDefault();
  mapPopup.classList.remove(`modal-show`);
};

const windowKeydownHandler = (evt) => {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains(`modal-show`)) {
      mapPopup.classList.remove(`modal-show`);
    }
  }
};

window.addEventListener(`keydown`, windowKeydownHandler);
mapClose.addEventListener(`click`, mapCloseClickHandler);
mapLink.addEventListener(`click`, mapLinkClickHandler);

footerContactsLink.addEventListener(`click`, loginLinkClickHandler);
