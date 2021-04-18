/* JavaScript */
let divka = document.querySelector('.output');
let but_gener = document.querySelector('.genegate');

let arrKey = [
	['A', 'B', 'C', 'D'],
	['jd3', 'id2', 'o17', '0v3']
];

but_gener.onclick = function () {
	//divka.innerHTML = document.querySelector('.input_pass').value;
	let shifrKey = '';
	let str = document.querySelector('.input_pass').value;
	let arrStr = str.split(''); // Преобразуем строку в массив.
	
	let counter = 0;
	for (let i = 0; i <= arrStr.length - 1; i++) {

		let y = 0;
		while (y <= arrKey.length+1) {
			if (arrKey [0][counter] === arrStr[y]) {
				console.log(arrKey [0][counter] + ' равно ' + arrStr[y]);
				shifrKey += arrKey [1][y];
				y++;
				counter++;
				/* сдесь нужно присвоить новой переменной шифрованное значение массива */
				
				break;
			}
			else  {
				console.log(arrKey [0][counter] + ' не равно ' + arrStr[y]);
				y++;
				continue;
			}
		}
		





		// for (let y = 0; y <= arrKey.length - 1; y++) {
			
			
		// }
	}



	//console.log(arrStr[0]);
	console.log(shifrKey);
};

console.log(arrKey[1][3]);


/*
1. Получить строку
2. Преобразовать строку в массив
3. Сравнить каждый символ массива с ключем
4. Если найдено совпадение заполнить переменную.
*/