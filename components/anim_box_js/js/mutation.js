let mutationObj = document.querySelector('.mutation_object');
let mutationButton = document.querySelector('.butt_mutation');
mutationButton.onclick = function () {
	mutationObj.classList.add('trialClass');
}

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
    attributes: true,
    childList: true,
    subtree: true
}; 

// Функция обратного вызова при срабатывании мутации
const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Создаем экземпляр наблюдателя с указанной функцией обратного вызова
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(mutationObj, config);

// Позже можно остановить наблюдение
// observer.disconnect();