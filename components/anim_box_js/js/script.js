/* JavaScript */
// Получаем кнопку, блоки

document.querySelector('.animboxbutton').onclick=animBox;
// buttonMagic.onclick = animBox;
let massiveBoxes = document.querySelectorAll ('.anim_box');   // Получаем массив блоков

function animBox() {
	massiveBoxes[0].classList.add('animBlock');
	massiveBoxes[0].addEventListener('animationend', () => {
		massiveBoxes[0].classList.remove('animBlock')
	});
}