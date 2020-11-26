/* JavaScript */

let clickCounter = 0;

// Получаем кнопку, блоки

let buttonMagic = document.querySelector('.anim_box_button');
buttonMagic.onclick = animBox;
let massiveBoxes = document.querySelectorAll ('.anim_box');   // Получаем массив блоков


function animBox() {
	if (clickCounter < massiveBoxes.length) {
		massiveBoxes[clickCounter].classList.add('animBlock');
		massiveBoxes[clickCounter].addEventListener('animationend', () => {
			massiveBoxes[clickCounter].classList.remove('animBlock');
			buttonMagic.innerHTML = "Active Box: " + clickCounter;
		});
		clickCounter++;
		console.log(clickCounter);
	}
	else {
		clickCounter = 0;
	}
}

// function f() {
// 	massiveBoxes.forEach() => {

// 	}
// }
