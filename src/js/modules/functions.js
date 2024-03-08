import Swiper from 'swiper/bundle'
import WOW from 'wow.js'

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebP() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp'
		document.documentElement.classList.add(className)
	})
}

//preloader

document.body.onload = () => {
	setTimeout(() => {
		let preloader = document.querySelector('.preloader')

		if (!preloader?.classList.contains('done')) {
			preloader?.classList.add('done')
		}
	}, 1000)
}

// Плавный скрол якоря к блокам
export function scrollAnchor() {
	const anchors = document.querySelectorAll('a[href*="#"]')
	let currentPage = window.location.pathname
	let headerOffset = 0

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			if (
				currentPage !== '/ivn-invest-test/' &&
				anchor.classList.contains('link-anchor')
			) {
				return false
			} else {
				e.preventDefault()
				if (window.innerWidth < 768) {
					headerOffset = 0
				} else {
					headerOffset = 0
				}
				const blockID = anchor.getAttribute('href').substr(1)
				let elementPosition = document
					.getElementById(blockID)
					?.getBoundingClientRect().top
				let offsetPosition = elementPosition + window.pageYOffset - headerOffset
				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				})
			}
		})
	}
}

//Добавление фона для header при скроле страницы
export function addShadowHeader() {
	const header = document.querySelector('#header')
	window.addEventListener('scroll', function () {
		const scrollPosition = window.pageYOffset
		if (scrollPosition > 0) {
			header.classList.add('shadow')
		} else {
			header.classList.remove('shadow')
		}
	})
}

//скролл наверх

export function scrollTop() {
	const buttonScrollTop = document.querySelector('.link-arrow-top')
	window.addEventListener('scroll', e => {
		const scrollY = window.scrollY || document.documentElement.scrollTop
		scrollY > 300
			? buttonScrollTop?.classList?.remove('hidden')
			: buttonScrollTop?.classList?.add('hidden')
		buttonScrollTop?.addEventListener('click', e => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		})
	})
}

//Инициализация слайдера
export function initializedSlider() {
	const portfolioSlider = new Swiper('.slider-main-block', {
		// Optional parameters
		loop: true,
		// speed: 1000,
		// autoplay: {
		// 	delay: 3000,
		// },
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 2.2,
		coverflowEffect: {
			rotate: 0,
			stretch: 80,
			depth: 1500,
			modifier: 0.4,
			slideShadows: false,
		},
	})
}

//mob-menu

export function showMobMenu() {
	const burgerButton = document.querySelector('.button-burger')
	const mobMenu = document.querySelector('.mob-menu')
	burgerButton?.addEventListener('click', e => {
		e.currentTarget.classList.toggle('active')
		mobMenu?.classList.toggle('active')
	})
}

//dynamic anchorHeader

export function dynamicAnchorHeader() {
	let currentPage = window.location.pathname
	const anchors = [
		'#section-about-us',
		'#section-services',
		'#section-available-premises',
	]
	const links = document.querySelectorAll('.navigation .menu li .link-anchor')
	links?.forEach((link, ind) => {
		if (currentPage !== '/ivn-invest-test/') {
			let anchorLink =
				'https://genkogroup.github.io/ivn-invest-test/' + anchors[ind]
			link.setAttribute('href', anchorLink)
		}
	})
}

//wow animation

export function wowAnimationInit() {
	setTimeout(function () {
		const wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true,
		})
		wow.init()
	}, 400)
}
