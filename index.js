const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.page__container');

left.addEventListener('mouseover', () => {
	console.log('iii');
	left.classList.add('left-hover');
});

left.addEventListener('mouseleave', () => {
	console.log('iii');
	left.classList.remove('left-hover');
});

right.addEventListener('mouseover', () => {
	right.classList.add('right-hover');
});

right.addEventListener('mouseleave', () => {
	right.classList.remove('right-hover');
});
