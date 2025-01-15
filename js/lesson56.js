// LESSON 60 AJAX и общение с сервером
'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

request.addEventListener('readystatechange', () => {
    if (request.status === 200) {
        console.log(request.response);
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
        inputUsd.value = 'Что-то пошло не так';
    }
});

    // status - статус запроса (404 - Not found, 200 - OK, 500 - Server error)
    // statusText - текстовое описание статуса (Not found, OK, Server error)
    // response - ответ от сервера
    // readyState - текущее состояние запроса (0 - новый, 1 - открыт, 2 - отправлен, 3 - загружается, 4 - запрос завершен)
});