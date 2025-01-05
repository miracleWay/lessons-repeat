// Строгий режим
"use strict"

document.addEventListener("click", documentActions);


function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open');
	}
	if (targetElement.closest('[data-spoller]')) {
		const currentElement = targetElement.closest('[data-spoller]');
		if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
			currentElement.classList.toggle('active');
		}
		slideToggle(currentElement.nextElementSibling);
	}
	if (targetElement.closest('.rating__input')) {
		const currentElement = targetElement.closest('.rating__input')
		const rating = currentElement.closest('.rating')
		if (rating.classList.contains('rating--set')) {
			starRatingGet(rating, currentElement)
		}
	}
}


// RATING
const ratings = document.querySelectorAll('[data-rating]')
if (ratings) {
	ratings.forEach(rating => {
		const currentValue = +rating.dataset.rating
		currentValue ? starRatingSet(rating, currentValue) : null
	})
}

function starRatingGet(rating, currentElement) {
	const ratingValue = +currentElement.value
	// Тут відправка оцінки (ratingValue) на бекенд...
	// Уявімо, що ми отримали середню оцінку 3.2
	const resultRating = 3.2
	starRatingSet(rating, resultRating)
}

function starRatingSet(rating, value) {
	const ratingItems = rating.querySelectorAll('.rating__item')
	const resultFullItems = parseInt(value)
	const resultPartItem = value - resultFullItems

	ratingItems.forEach((ratingItem, index) => {
		ratingItem.classList.remove('active')
		ratingItem.querySelector('span') ? ratingItems[index].querySelector('span').remove() : null

		if (index <= (resultFullItems -1)) {
			ratingItem.classList.add('active')
		}
		if (index === resultFullItems && resultPartItem) {
			ratingItem.insertAdjacentHTML("beforeend", `<span style="width:${resultPartItem * 100}%"></span>`)
		}
	})
}




// SPOLLERS
const spollers = document.querySelectorAll('[data-spoller]');

if (spollers.length) {
	spollers.forEach(spoller => {
		spoller.dataset.spoller !== 'open' ? spoller.nextElementSibling.hidden = true : null

		// FILTER
		const filterTitle = document.querySelector('.filter__title') 
		if (filterTitle) {
			const breakPoint = `(max-width: 998px)`
			const matchMedia = window.matchMedia(breakPoint)
			matchMedia.addEventListener('change', (e) => {
				const isTrue = e.matches
				if (isTrue) {
					slideUp(filterTitle.nextElementSibling)
					filterTitle.classList.remove('active')
				} else {
					slideDown(filterTitle.nextElementSibling)
					filterTitle.classList.add('active')
				}
			})
		}
	});
}
let slideDown = (target, duration = 500) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');
		target.hidden = false;
		let height = target.offsetHeight;

		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		target.style.overflow = 'hidden';
		target.style.height = 0;

		target.offsetHeight;

		target.style.transitionProperty = `height, margin, padding`;
		target.style.transitionDuration = `${duration}ms`;

		target.style.height = `${height}px`;

		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('margin-top')

		setTimeout(() => {
			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('--sliding');
		}, duration);
	}
}
let slideUp = (target, duration = 500) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');
		let height = target.offsetHeight;

		target.style.transitionProperty = `height, margin, padding`;
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${height}px`;

		target.offsetHeight;

		target.style.overflow = 'hidden';
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		target.style.height = 0;

		setTimeout(() => {
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-bottom')
			target.style.removeProperty('margin-top')

			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('--sliding');

			target.hidden = true;
		}, duration);
	}
}
let slideToggle = (target, duration = 500) => {
	target.hidden ? slideDown(target, duration) : slideUp(target, duration)
}




// SLIDERS
const heroSlider = document.querySelector(`.hero`)

if (heroSlider) {
	new Swiper('.hero', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		speed: 800,
		parallax: true,
		// If we need pagination
		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.hero__arrow--next',
		  prevEl: '.hero__arrow--prev',
		},
	});
}

const newSlider = document.querySelector(`.new`)

if (newSlider) {
	new Swiper('.new__slider', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		speed: 800,
		slidesPerView: 4,
		spaceBetween: 38,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.5,
				spaceBetween: 15
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			// when window width is >= 480px
			650: {
				slidesPerView: 3,
				spaceBetween: 25
			},
			// when window width is >= 640px
			991: {
				slidesPerView: 4,
				spaceBetween: 38
			}
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.new__arrow--next',
		  prevEl: '.new__arrow--prev',
		},
	});
}

const feedbackSlider = document.querySelector(`.feedback`)

if (newSlider) {
	new Swiper('.feedback__slider', {
		// Optional parameters
		autoHeight: true,
		speed: 800,
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 23
			},
			420: {
				slidesPerView: 1.5,
				spaceBetween: 23
			},
			628: {
				slidesPerView: 2,
				spaceBetween: 23
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 23
			}
		},
		pagination: {
			el: '.feedback__pagination',
			clickable: true,
		}
	});
}


const productsSlider = document.querySelector(`.product`)

if (productsSlider) {
	const thumbSwiper = new Swiper(".thumb-slider", {
		loop: true,
		spaceBetween: 22,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		direction: 'vertical',
	});

	const mainSwiper = new Swiper(".main-slider", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".thumb-slider-arrows__arrow--down",
			prevEl: ".thumb-slider-arrows__arrow--up",
		},
		thumbs: {
			swiper: thumbSwiper
		},
	});
	
}



// noUiSlider 

const filterRange = document.querySelector(`.price-section__range`)

if (filterRange) {
const filterRangeFrom = document.querySelector(`.price-section__input--from`)
const filterRangeTo = document.querySelector(`.price-section__input--to`)
	
	noUiSlider.create(filterRange, {
		start: [0, 100],
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}, format: wNumb({
			decimals: 0,
			thousand: '',
			prefix: '$'
		})
	});

	filterRange.noUiSlider.on('update', function (values, handle) {
		filterRangeFrom.value = values[0]
		filterRangeTo.value = values[1]
	});

	filterRangeFrom.addEventListener('change', function () {
        filterRange.noUiSlider.setHandle(0, filterRangeFrom.value);
    });

	filterRangeTo.addEventListener('change', function () {
        filterRange.noUiSlider.setHandle(1, filterRangeTo.value);
    });
}

// Load Products from "backend"

const productItems = document.querySelector('.products__carts')

if (productItems) {
	loadProducts()
}

async function loadProducts () {
	const response = await fetch("json/products.json", {
		method: "GET"
	})
	if (response.ok) {
		const responseData = await response.json()
		initProducts(responseData)
	} else {
		alert('Error!')
	}
}

function initProducts(data) {
	const productsItems = data.products 
	if (productsItems.length) {
		let productTemplate = ``
		productsItems.forEach(productItem => {
			productTemplate += `<article class="item-product">`
			productTemplate += `<a href="#" class="item-product__favourite ${productItem.favourite ? 'item-product__favourite--active' : null} _icon-favourite"></a>`
			if (productItem.image) {
				productTemplate += `<a href="${productItem.url}" class="item-product__picture-link">`
				productTemplate += `<img src="${productItem.image}" alt="image-01" class="item-product__image">`
				productTemplate += `</a>`
			}
			productTemplate += `<div class="item-product__body">`
			productTemplate += `<h4 class="item-product__title">`
			productTemplate += `<a href="${productItem.url}" class="item-product__link-title">${productItem.title}</a>`
			productTemplate += `</h4>`
			productTemplate += `<div class="item-product__label">${productItem.label}</div>`
			productTemplate += `<div class="item-product__price">${productItem.price}</div>`
			productTemplate += `</div>`
			productTemplate += `</article>`
		})
		productItems.innerHTML = productTemplate
	}
}




