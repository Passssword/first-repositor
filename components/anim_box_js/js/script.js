/* JavaScript */

let clickCounter = 0;

// Получаем кнопку, блоки

let buttonMagic = document.querySelector('.anim_box_button');
buttonMagic.onclick = animBox;
let massiveBoxes = document.querySelectorAll ('.anim_box');   // Получаем массив блоков


function animBox() {
	massiveBoxes[0].classList.add('animBlock');
	massiveBoxes[0].addEventListener('animationend', () => {
		massiveBoxes[0].classList.remove('animBlock');
		buttonMagic.innerHTML = "Active Box: " + clickCounter;
	});
	clickCounter++;
	if (clickCounter>=massiveBoxes.leight) {
		clickCounter=0;
	}
}

/*--------*/
function clickCounterPlus() {
	return clickCounter++;
}