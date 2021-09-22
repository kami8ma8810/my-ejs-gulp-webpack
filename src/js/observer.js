document.addEventListener('DOMContentLoaded', function () {
	const options = {
		root: null,
		rootMargin: '-30% 0px',
	};
	//監視する要素を指定
	const observerElements = document.querySelectorAll('.js-trigger');
	observerElements.forEach(el => {
		observerFunc.observe(el);
	});

	const observerFunc = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				// 動かす要素を指定
				const targetElement = entry.target.querySelectorAll('.js-fadein')

				if (entry.isIntersecting) {
					gsap.fromTo(targetElement, {
						y: 50
					}, {
						duration: 1,
						opacity: 1,
						// rotation: '-360deg',
						autoAlpha: 1,
						y: 0,
						stagger: .2,
					})
					observerFunc.unobserve(entry.target);
				}
			});
		},
		options
	);
}, false);