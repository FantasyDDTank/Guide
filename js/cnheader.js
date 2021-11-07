const selectElement = (element) => document.querySelector(element);

selectElement('.header-menuicon-label').addEventListener('click', () => {
	selectElement('nav').classList.toggle('active');
	selectElement('body').classList.toggle('lock');
});

selectElement('#title-0').addEventListener('click', () => {
	document.getElementById('content-0').classList.toggle('show-0');
	document.getElementById('container-0').classList.toggle('rotateicon');

});

selectElement('#title-1').addEventListener('click', () => {
	document.getElementById('content-1').classList.toggle('show-1');
	document.getElementById('container-1').classList.toggle('rotateicon');

});

selectElement('#title-2').addEventListener('click', () => {
	document.getElementById('content-2').classList.toggle('show-2');
	document.getElementById('container-2').classList.toggle('rotateicon');

});

selectElement('#title-3').addEventListener('click', () => {
	document.getElementById('content-3').classList.toggle('show-3');
	document.getElementById('container-3').classList.toggle('rotateicon');

});

selectElement('#title-4').addEventListener('click', () => {
	document.getElementById('content-4').classList.toggle('show-4');
	document.getElementById('container-4').classList.toggle('rotateicon');

});