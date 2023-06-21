$(() => {

	// Основной слайдер на главной
	if ($('.first_section .swiper-container').length) {
		new Swiper('.first_section .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}

	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
	BODY = document.getElementsByTagName('body')[0]
	OVERLAY = document.querySelector('.overlay')


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header .menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .close_btn, header .menu .item a, .overlay').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header .menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})



	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<img src=images/close2.svg>',
		// spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		// main: null
	}


	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(400)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(400)

			$item.addClass('active').find('.data').slideDown(400)
		}
	})

	

	// Скрол к пунктам меню
	$(".scroll").on("click", function (e) {
		e.preventDefault();
		let id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(id).offset().top
		}, {
			duration: 400,
			easing: "swing"
		});
	});



	const repairSliders = [],
		repair = document.querySelectorAll('.repair .swiper-container')

	repair.forEach(function (el, i) {
		el.classList.add('repair_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				580: {
					spaceBetween: 15,
					slidesPerView: 2
				},
				1023: {
					spaceBetween: 15,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 19,
					slidesPerView: 3
				}
			}
		}

		repairSliders.push(new Swiper('.repair_s' + i, options))
	})


	const projectSliders = [],
		project = document.querySelectorAll('.project .swiper-container')

	project.forEach(function (el, i) {
		el.classList.add('project_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				580: {
					spaceBetween: 15,
					slidesPerView: 2
				},
				1023: {
					spaceBetween: 15,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 19,
					slidesPerView: 3
				}
			}
		}

		projectSliders.push(new Swiper('.project_s' + i, options))
	})



	
	const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { 
		direction: 'vertical', 
		slidesPerView: 3, 
		spaceBetween: 8, 
		navigation: { 
			nextEl: '.slider__next', 
			prevEl: '.slider__prev'
		},
		freeMode: true, 
		breakpoints: { 
			0: { 
				direction: 'horizontal', 
			},
			768: { 
				direction: 'vertical', 
			}
		}
	});
	const sliderImages = new Swiper('.slider__images .swiper-container', {
		direction: 'vertical', 
		slidesPerView: 1,
		spaceBetween: 8,
		mousewheel: true, 
		navigation: { 
			nextEl: '.slider__next',
			prevEl: '.slider__prev' 
		},
		grabCursor: true, 
		thumbs: {
			swiper: sliderThumbs
		},
		breakpoints: { 
			0: {
				direction: 'horizontal', 
			},
			768: { 
				direction: 'vertical', 
			}
		}
	});





	window.addEventListener('resize', function () {
		WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

		let windowW = window.outerWidth

		if (typeof WW !== 'undefined' && WW != windowW) {


			// Перезапись ширины окна
			WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


			// Моб. версия
			if (!fakeResize) {
				fakeResize = true
				fakeResize2 = false

				document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
			}

			if (!fakeResize2) {
				fakeResize2 = true

				if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
			} else {
				fakeResize = false
				fakeResize2 = true
			}
		}
	})



})