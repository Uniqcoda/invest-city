// LOADING SPINNER
window.onload = () => {
	setTimeout(() => {
		document.querySelector('body').classList.add('display');
	}, 4000);
};

// MENU
document.querySelector('.hamburger-menu').addEventListener('click', () => {
	document.querySelector('.container').classList.toggle('change');
});

// SCROLL TO TOP
document.querySelector('.scroll-btn').addEventListener('click', () => {
	document.querySelector('html').style.scrollBehavior = 'smooth';
	setTimeout(() => {
		document.querySelector('html').style.scrollBehavior = 'unset';
	}, 1000);
});

const checkScrollTop = () => {
	if (window.scrollY > 500) {
		document.querySelector('.scroll-btn').classList.add('show-scroll-btn');
	} else if (window.scrollY <= 500) {
		document.querySelector('.scroll-btn').classList.remove('show-scroll-btn');
	}
};

window.addEventListener('scroll', checkScrollTop);
