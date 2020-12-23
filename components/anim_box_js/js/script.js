/* JavaScript */

let clickCounter = 0;

// Получаем кнопку, блоки

let buttonMagic = document.querySelector('.anim_box_button'); // Получаем кнопку
let massiveBoxes = document.querySelectorAll ('.anim_box');   // Получаем массив блоков

// buttonMagic.onclick = animBox;


buttonMagic.onclick = function animBox() {
	if (clickCounter < massiveBoxes.length) {
		moveBox(addEventAnimationend);
		buttonMagic.disabled = true;
	}
	else {
		clickCounter = 0;
		moveBox(addEventAnimationend);
		buttonMagic.disabled = true;
	}


// function f() {
// 	massiveBoxes.forEach() => {

// 	}
// }

function removeAnimation () {
	massiveBoxes[clickCounter].classList.remove("animBlock");
	console.log(massiveBoxes[clickCounter].classList);
	buttonMagic.innerHTML = "Active Box: " + clickCounter;
	removeEventAnimationend();
}
function addEventAnimationend () {
	massiveBoxes[clickCounter].addEventListener('animationend', removeAnimation);
}
function removeEventAnimationend() {
	massiveBoxes[clickCounter].removeEventListener('animationend', removeAnimation)
<<<<<<< HEAD
	console.log(clickCounter);
	clickCounter++;
=======
	console.log("let clickCounter = "+clickCounter);
	console.log(massiveBoxes.length);
	clickCounter++;
	buttonMagic.disabled = false;
>>>>>>> 241b5131e1b012f62485c65b5842080846c3f5f8
}

function moveBox(param_addEventAnimationend) {
	massiveBoxes[clickCounter].classList.add('animBlock');
	param_addEventAnimationend();
}