/* JavaScript */
let iconObject = document.getElementById("’object’"); //получаем элемент object
let svgDocument = iconObject.contentDocument; //получаем svg элемент внутри object
let svgElement1 = svgDocument.getElementById("path1"); //получаем любой элемент внутри svg по ID
let svgElement2 = svgDocument.getElementById("path2");
//let svgElement = svgDocument.querySelector("some_id_in_svg");


svgElement1.setAttribute("fill", "black"); //меняем атрибуты выбранного элемента