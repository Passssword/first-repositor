
let clickcounter = 0;
let buttonNext = document.querySelector('.butt_next');
let massiveCardPerson = document.querySelectorAll('.card_penson');

buttonNext.onclick = function nextSlide() {
	massiveCardPerson[clickcounter].classList.add('animTextIn');
	massiveCardPerson[clickcounter].addEventListener('animationend', stopAnimation);
}
function stopAnimation() {
	massiveCardPerson[clickcounter].style.transform = 'translate(10px, 20px)';
}