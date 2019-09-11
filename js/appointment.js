// Получение и валидация данных, сообщения об успехе или неудаче
// Отправка
// console.log(1);
// https://momentjs.com/

(function() {
  const appointmentForm = document.querySelector(`.appointment-form`);
  const appointSumitBtn = appointmentForm.querySelector(`button[type="submit"]`);

  // Обработчик отправки формы
  const appointmentFormSubmitHandler = (evt) => {
    evt.preventDefault();

  };

  appointmentForm.addEventListener(`submit`, appointmentFormSubmitHandler);
})();
