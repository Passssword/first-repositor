
let clickCounter = 0;
let buttonNext = document.querySelector('.butt_next');
let massiveCardPerson = document.querySelectorAll('.card_penson');

// Задаем начальное расположение первого слайда
massiveCardPerson[0].style.transform = 'translate(10px, 20px)';

buttonNext.onclick = function () {
	if (clickCounter < massiveCardPerson.length){
		// showNextSlide();
		removeCurrentSlide();
	}
	else {
		clickCounter = 0;
	}
}
function showNextSlide() {
	buttonNext.disabled = true;
	massiveCardPerson[clickCounter+1].classList.add('animImgIn');
	massiveCardPerson[clickCounter+1].addEventListener('animationend', stopAnimation);
}
function removeCurrentSlide() {
	buttonNext.disabled = true;
	massiveCardPerson[clickCounter].classList.add('animImgOut');
	massiveCardPerson[clickCounter].addEventListener('animationend', setLocationImgOut);
	setTimeout(showNextSlide, 700);
}

function setLocationImgOut() {
	massiveCardPerson[clickCounter].style.transform = 'translate(600px, 20px)';
	massiveCardPerson[clickCounter].classList.remove('animImgOut');
	massiveCardPerson[clickCounter].removeEventListener('animationend', setLocationImgOut);
}
function stopAnimation() {
	massiveCardPerson[clickCounter+1].style.transform = 'translate(10px, 20px)';
	massiveCardPerson[clickCounter+1].classList.remove('animImgIn');
	massiveCardPerson[clickCounter+1].removeEventListener('animationend', stopAnimation);
	clickCounter++;
	buttonNext.disabled = false;
}