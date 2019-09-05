// (function () {
  window.upload = function (data, successHandler) {
    const URL = `https://echo.htmlacademy.ru`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener(`load`, () => {
      successHandler(xhr.response);
    });

    xhr.open(`GET`, URL);
    xhr.send(data);
  };
// })();
