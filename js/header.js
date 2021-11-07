const selectElement = (element) => document.querySelector(element);

selectElement('.header-menuicon-label').addEventListener('click', () => {
	selectElement('nav').classList.toggle('active');
	selectElement('body').classList.toggle('lock');
});
