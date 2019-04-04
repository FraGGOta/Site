/*Изменение изображения при наведении*/

/*Картинка на главной странице*/
function changeImg(src){  
	document.picture.src = src + '.jpg';
 	};
/*Картинки в меню*/
function changeImg1(src){  
	document.picture1.src = src + '.png';
};
function changeImg2(src){  
	document.picture2.src = src + '.png';
};
function changeImg3(src){  
	document.picture3.src = src + '.png';
};
function changeImg4(src){  
	document.picture4.src = src + '.png';
};
function changeImg5(src){  
	document.picture5.src = src + '.png';
};

/*Открытие картинки в новом окне*/
 function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
};