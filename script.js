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

// Form label animation
document.querySelectorAll('.field').forEach((field) => {
	field.addEventListener('focus', () => {
		field.nextElementSibling.style.cssText =
			'transform: translateY(-3rem); font-size: 1.2rem;';
		field.style.borderBottomStyle = 'solid';
	});

	field.addEventListener('focusout', () => {
		if (!field.value) {
			field.nextElementSibling.style.cssText =
				'transform: translateY(0); font-size: 1.6rem;';
			field.style.borderBottomStyle = 'dashed';
		} else {
			field.nextElementSibling.style.cssText =
				'transform: translateY(-3rem); font-size: 1.2rem;';
			field.style.borderBottomStyle = 'solid';
		}
	});
});
