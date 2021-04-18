/* JavaScript */

setTimeout(
	function () {
	console.log('messege 1');
	messegeTwo(messegeThree)
}, 2000);


function messegeTwo() {
	console.log('messege 2');
	messegeThree()
}
function messegeThree() {
	console.log('messege 3');
}
