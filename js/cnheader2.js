const selectElement = (element) => document.querySelector(element);

selectElement('.header-menuicon-label').addEventListener('click', () => {
	selectElement('nav').classList.toggle('active');
	selectElement('body').classList.toggle('lock');
});

selectElement('#title-0').addEventListener('click', () => {
	document.getElementById('content-0').classList.toggle('show-0');
	document.getElementById('container-0').classList.toggle('rotateicon');

});
