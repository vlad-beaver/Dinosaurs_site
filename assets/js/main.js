$(function() {

	var header = $("#header"),
		 introH = $("#intro").innerHeight(),
		 scrollOffset = $(window).scrollTop();

	/* Fixed Header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {

		if (scrollOffset > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			 blockId = $this.data('scroll'),
			 blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);

	});


	/* Menu nav toggle */
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	/* Skelet */
	$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(20);
	})

	/* Slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});

/* Sort */
function app() {
	const buttons = document.querySelectorAll('.button')
	const cards = document.querySelectorAll('.card')

	function filter (category, items) {
		items.forEach((item) => {
			const isItemFiltered = !item.classList.contains(category)
			const isShowAll = category.toLowerCase() === 'all'
			if (isItemFiltered && !isShowAll) {
				item.classList.add('anime')
			} else {
				item.classList.remove('hide')
				item.classList.remove('anime')
			}
		})
	}

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const currentCategory = button.dataset.filter
			filter(currentCategory, cards)
		})
	})

	cards.forEach((card) => {
		card.ontransitionend = function() {
			if (card.classList.contains('anime')) {
				card.classList.add('hide')
			}
		}
	})
}

app()