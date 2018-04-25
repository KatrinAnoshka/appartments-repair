$(document).ready(function() {
	
	// Акция Календарь Flipclock
	var clock;
	clock = $(".clock").FlipClock({
		clockFace : "DailyCounter",
		autoStart : false,
		callbacks : {
			stop : function() {
				$(".message").html("Время прошло");
			}
		}
	});

	var dt = "June 01 2018 09:17:48";
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /=1000;

	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();
	
	// Плавное перемещение по меню
	;(function($){
   		$(document).on('click', 'a[href^=#]', function () {
        	$('html, body').animate({ scrollTop:  $('a[id="'+this.hash.slice(1)+'"]').offset().top }, 1000 ); 
        	return false;
   		});
	})(jQuery);

	// Кнопка разворачивать меню
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	// Стрелка наверх
	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	// Стрелка вниз с Хэдера
	$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});

	// Создание колонок одинаковой высоты
	$(".section_1 .section-content .info-item").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".cards .card").equalHeights();

	// Контакты
	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});

	// Как мы работаем
	$(".section_5").waypoint(function() {

			$(".section_5 .tc-item").each(function(index) {
				var ths = $(this);
				setTimeout(function() {
					var myAnimation = new DrawFillSVG({
						elementId: "tc-svg-" + index 
					});
					ths.removeClass("").addClass("");
				}, 500*index);
			});

			this.destroy();

		}, {
			offset : "35%"
		});

	// Контакты
	$(".section_6").waypoint(function() {

		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});

	// Слайдер Карусель
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 800,
		autoplaySpeed : 1000,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	// Анимация секций
	$(".section-head h2, .section-head p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	$(".slider .slide").animated("zoomIn");
	$(".homesect.section_8 .forms").animated("zoomIn");

	// Наши услуги
	$(".section_2").waypoint(function() {
		$(".s2-item-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	// О нас
	$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 150*index);
		});
	}, {
		offset : "30%"
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback (SVG заменяются на PNG-изображения)
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// Всплывающая форма
	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function() {
				
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

