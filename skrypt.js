/********************************************************************************
 * 
 *    Javascript/JQUERY
 * 
********************************************************************************
Funkcja chowająca menu po zmniejszeniu rozmiaru okna (<900px)
*********************************************************************************/
$(window).on('resize', function() {
	if ($(window).width() > 900) {
		$("#menu").show("slide", {
			direction: 'right'
		}, "ease", 3000);
	} else {
		$("#menu").hide();
	}
});

$(function() {
	/********************************************************************************
	Funkcja sterujące menu i zmienianiem podstron
	*********************************************************************************/
	var current = 1; // nr obecnej podstrony
	$("#podstr" + 1).addClass("active"); // oznaczenie aktywnej podstrony

	/********************************************************************************
	Funkcja zmieniająca obecną stronę na "Strona główna" po kliknięciu w nawigacji
	*********************************************************************************/
	$(".podstr1").click(function() {
		/* pokazywanie wybranej sekcji */
		if ($(window).width() < 900) { // dla mobilnego menu
			$("#section1").show("slide", {
				direction: 'right'
			}, "ease", 3000);
			$("#home_slider").show("slide", {
				direction: 'right'
			}, "ease", 3000);
		} else { // dla normalnego menu
			$("#section1").show("slide", {
				direction: 'left'
			}, "ease", 3000);
			$("#home_slider").show("slide", {
				direction: 'left'
			}, "ease", 3000);
		}
		/* chowanie obecnej sekcji, jeśli nie jest tą wybraną */
		if (current != 1) {
			if ($(window).width() < 900) { // dla mobilnego menu
				$("#section" + current).hide("slide", {
					direction: 'left'
				}, "ease", 3000);
			} else { // dla normalnego menu
				$("#section" + current).hide("slide", {
					direction: 'right'
				}, "ease", 3000);
			}
		}
		$("#podstr" + current).removeClass("active"); // odznaczenie obecnej podstrony
		$("#podstr1").addClass("active"); // oznaczenie podstrony "Strona główna"

		if ($(window).width() < 900) {
			$("#menu").hide("slide", {
				direction: 'left'
			}, "ease", 3000);
		}

		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		$("#bc").hide();
		$("#home_slider").show();
		current = 1;
	});

	/********************************************************************************
	Funkcja zmieniająca obecną stronę na "O nas" po kliknięciu w nawigacji
	*********************************************************************************/
	$("#podstr2").click(function() {
		if (current < 2) {
			$("#section2").show("slide", {
				direction: 'right'
			}, "ease", 3000);
		} else {
			if ($(window).width() < 900) {
				$("#section2").show("slide", {
					direction: 'right'
				}, "ease", 3000);
			} else {
				$("#section2").show("slide", {
					direction: 'left'
				}, "ease", 3000);
			}

		}
		if (current != 2) {
			if (current < 2) {
				$("#section" + current).hide("slide", {
					direction: 'left'
				}, "ease", 3000);
			} else {
				if ($(window).width() < 900) {
					$("#section" + current).hide("slide", {
						direction: 'left'
					}, "ease", 3000);
				} else {
					$("#section" + current).hide("slide", {
						direction: 'right'
					}, "ease", 3000);
				}
			}
		}
		$("#podstr" + current).removeClass("active");
		$("#podstr2").addClass("active");

		if ($(window).width() < 900) {
			$("#menu").hide("slide", {
				direction: 'left'
			}, "ease", 3000);
		}

		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		$("#breadcrumb").html(" > O nas");
		$("#section_title").html("O nas");
		$("#bc").show();
		$("#home_slider").hide();
		current = 2;
	});

	/********************************************************************************
	  Funkcja zmieniająca obecną stronę na "Portfolio" po kliknięciu w nawigacji
	  *********************************************************************************/
	$("#podstr3").click(function() {
		if (current < 3) {
			$("#section3").show("slide", {
				direction: 'right'
			}, "ease", 3000);
		} else {
			if ($(window).width() < 900) {
				$("#section3").show("slide", {
					direction: 'right'
				}, "ease", 3000);
			} else {
				$("#section3").show("slide", {
					direction: 'left'
				}, "ease", 3000);
			}

		}
		if (current != 3) {
			if (current < 3) {
				$("#section" + current).hide("slide", {
					direction: 'left'
				}, "ease", 3000);
			} else {
				if ($(window).width() < 900) {
					$("#section" + current).hide("slide", {
						direction: 'left'
					}, "ease", 3000);
				} else {
					$("#section" + current).hide("slide", {
						direction: 'right'
					}, "ease", 3000);
				}
			}
		}

		$("#podstr" + current).removeClass("active");
		$("#podstr3").addClass("active");

		if ($(window).width() < 900) {
			$("#menu").hide("slide", {
				direction: 'left'
			}, "ease", 3000);
		}

		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		$("#breadcrumb").html(" > Portfolio");
		$("#section_title").html("Portfolio");
		$("#bc").show();
		$("#home_slider").hide();
		current = 3;
	});

	/********************************************************************************
	Funkcja zmieniająca obecną stronę na "Cennik" po kliknięciu w nawigacji
	*********************************************************************************/
	$("#podstr4").click(function() {
		if (current < 4) {
			$("#section4").show("slide", {
				direction: 'right'
			}, "ease", 3000);
		} else {
			if ($(window).width() < 900) {
				$("#section4").show("slide", {
					direction: 'right'
				}, "ease", 3000);
			} else {
				$("#section4").show("slide", {
					direction: 'left'
				}, "ease", 3000);
			}

		}
		if (current != 4) {
			if (current < 4) {
				$("#section" + current).hide("slide", {
					direction: 'left'
				}, "ease", 3000);
			} else {
				if ($(window).width() < 900) {
					$("#section" + current).hide("slide", {
						direction: 'left'
					}, "ease", 3000);
				} else {
					$("#section" + current).hide("slide", {
						direction: 'right'
					}, "ease", 3000);
				}
			}
		}

		$("#podstr" + current).removeClass("active");
		$("#podstr4").addClass("active");

		if ($(window).width() < 900) {
			$("#menu").hide("slide", {
				direction: 'left'
			}, "ease", 3000);
		}

		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		$("#breadcrumb").html(" > Cennik");
		$("#section_title").html("Cennik");
		$("#bc").show();
		$("#home_slider").hide();
		current = 4;
	});

	/********************************************************************************
	Funkcja zmieniająca obecną stronę na "Kontakt" po kliknięciu w nawigacji
	*********************************************************************************/
	$("#podstr5").click(function() {
		if (current < 5) {
			$("#section5").show("slide", {
				direction: 'right'
			}, "ease", 3000);
		} else {
			if ($(window).width() < 900) {
				$("#section5").show("slide", {
					direction: 'right'
				}, "ease", 3000);
			} else {
				$("#section5").show("slide", {
					direction: 'left'
				}, "ease", 3000);
			}

		}
		if (current != 5) {
			if (current < 5) {
				$("#section" + current).hide("slide", {
					direction: 'left'
				}, "ease", 3000);
			} else {
				if ($(window).width() < 900) {
					$("#section" + current).hide("slide", {
						direction: 'left'
					}, "ease", 3000);
				} else {
					$("#section" + current).hide("slide", {
						direction: 'right'
					}, "ease", 3000);
				}
			}
		}
		$("#podstr" + current).removeClass("active");
		$("#podstr5").addClass("active");

		if ($(window).width() < 900) {
			$("#menu").hide("slide", {
				direction: 'left'
			}, "ease", 3000);
		}

		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		$("#breadcrumb").html(" > Kontakt");
		$("#section_title").html("Kontakt");
		$("#bc").show();
		$("#home_slider").hide();
		current = 5;
	});

	/********************************************************************************
	Funkcja zmieniająca obecną stronę na "Firma" po kliknięciu w nawigacji
	*********************************************************************************/
	$("#podstr6").click(function() {
		if (current < 6) {
			$("#section6").show("slide", {
				direction: 'right'
			}, "ease", 3000);
		} else {
			if ($(window).width() < 900) {
				$("#section6").show("slide", {
					direction: 'right'
				}, "ease", 3000);
			} else {
				$("#section6").show("slide", {
					direction: 'left'
				}, "ease", 3000);
			}

		}
		if (current != 6) {
			if (current < 6) {
				$("#section" + current).hide("slide", {
					direction: 'left'
				}, "ease", 3000);
			} else {
				if ($(window).width() < 900) {
					$("#section" + current).hide("slide", {
						direction: 'left'
					}, "ease", 3000);
				} else {
					$("#section" + current).hide("slide", {
						direction: 'right'
					}, "ease", 3000);
				}
			}
		}
		$("#podstr" + current).removeClass("active");
		$("#podstr6").addClass("active");

		if ($(window).width() < 900) {
			$("#menu").hide("slide", {
				direction: 'left'
			}, "ease", 3000);
		}

		$("html, body").animate({
			scrollTop: 0
		}, "slow"); // Przewinięcie strony do góry
		$("#breadcrumb").html(" > Firma");
		$("#section_title").html("Firma");
		$("#bc").show();
		$("#home_slider").hide();
		current = 6;
	});

	/********************************************************************************
	Funkcja chowająca/pokazująca mobilne menu po kliknięciu w przycisk
	*********************************************************************************/
	$("#mobile_menu").click(function() {
		$("#menu").slideToggle();

	});

	$("#form_name").on('change', function() {
		var name = $("#form_name").val();
		if (name == ' ') {
			$("#form_name").addClass("bledne");
		} else {
			$("#form_name").removeClass("bledne");
		}
	});

	$("#form_email").on('change', function() {
		var wzor = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
		var mail = $("#form_email").val();
		if (mail == ' ') {
			$("#form_email").addClass("bledne");
		} else {
			if (!wzor.test(mail) && mail != '') {
				$("#form_email").addClass("bledne");
			} else {
				$("#form_email").removeClass("bledne");
			}
		}
	});
	$("#form_text").on('change', function() {
		var text = $("#form_text").val();
		if (text == ' ') {
			$("#form_text").addClass("bledne");
		} else {
			$("#form_text").removeClass("bledne");
		}
	});

	$("#wyslij_wiadomosc").click(function() {
		var name = $("#form_name").val();
		var mail = $("#form_email").val();
		var text = $("#form_text").val();

		var wzor = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

		if (name == '' || mail == '' || text == '') {
			if (name == '' || name == ' ') {
				$("#form_name").addClass("bledne");
			} else {
				$("#form_name").removeClass("bledne");
			}
			if (mail == '' || mail == ' ') {
				$("#form_email").addClass("bledne");
			} else {
				$("#form_email").removeClass("bledne");
			}
			if (text == '' || text == ' ') {
				$("#form_text").addClass("bledne");
			} else {
				$("#form_text").removeClass("bledne");
			}
			alert("Uzupełnij wszystkie pola!");
		} else {
			if (!wzor.test(mail)) {
				alert("Podany adres E-Mail jest niepoprawny!");
			} else {
				$.post("send.php", {
				nameV: name,
				emailV: mail,
				textV: text
				}, function(data) {
				alert(data);
				$('#kontakt')[0].reset();
				});
			}
		}
	});
});
/*****************************************************************
******************************************************************/
function slide_show(nr){
	$("#slide"+nr+"_img").show("drop", {
					direction: 'up'
				}, "ease", 500);
	setTimeout(function(){
		$("#slide"+nr+"_p1").show("slide", {
					direction: 'left'
				}, "ease", 300);
	}, 100);
	setTimeout(function(){
	$("#slide"+nr+"_p2").show("slide", {
					direction: 'left'
				}, "ease", 300);
		}, 300);
	
};
function slide_hide(nr){
	$("#slide"+nr+"_img").hide("drop", {
					direction: 'down'
				}, "ease", 500);
		$("#slide"+nr+"_p1").hide("slide", {
					direction: 'left'
				}, "ease", 300);
	$("#slide"+nr+"_p2").hide("slide", {
					direction: 'left'
				}, "ease", 500);
};
/*****************************************************************
******************************************************************/
var current = 1;

function slideShow() {
	slide_hide(current);
	$("#slide" + current).fadeOut(1000);
	$("#sl_button"+current).removeClass("slider_active");
	current = current + 1;
	if (current > 4) {
		current = 1;
	}
	$("#slide" + current).fadeIn(1000);
	$("#sl_button"+current).addClass("slider_active");
	
	setTimeout(slide_show(current), 1000);
};
var slideshowInterval = setInterval(slideShow, 10000);


/*****************************************************************
******************************************************************/

$(function() {
	$("#sl_button1").click(function(){
		if(current != 1){
			slide_hide(current);
			$("#slide" + current).fadeOut(1000);
			$("#sl_button"+current).removeClass("slider_active");
		}
		current = 1;
		
		$("#slide" + current).fadeIn(1000);
			$("#sl_button"+current).addClass("slider_active");
		
		setTimeout(slide_show(1), 700);
		clearInterval(slideshowInterval);
		slideshowInterval = setInterval(slideShow, 10000);
	});

	$("#sl_button2").click(function(){
		if(current != 2){
			slide_hide(current);
			$("#slide" + current).fadeOut(1000);
			$("#sl_button"+current).removeClass("slider_active");
		}
		current = 2;
		$("#slide" + current).fadeIn(1000);
		$("#sl_button"+current).addClass("slider_active");
		
		setTimeout(slide_show(2), 700);
		clearInterval(slideshowInterval);
		slideshowInterval = setInterval(slideShow, 10000);
	});

	$("#sl_button3").click(function(){
		if(current != 3){
			slide_hide(current);
			$("#slide" + current).fadeOut(1000);
			$("#sl_button"+current).removeClass("slider_active");
		}
		current = 3;
		$("#slide" + current).fadeIn(1000);
		$("#sl_button"+current).addClass("slider_active");
		
		setTimeout(slide_show(3), 700);
		clearInterval(slideshowInterval);
		slideshowInterval = setInterval(slideShow, 10000);
	});

	$("#sl_button4").click(function(){
		if(current != 4){
			slide_hide(current);
			$("#slide" + current).fadeOut(1000);
			$("#sl_button"+current).removeClass("slider_active");
		}
		current = 4;
		$("#slide" + current).fadeIn(1000);
		$("#sl_button"+current).addClass("slider_active");
		
		setTimeout(slide_show(4), 700);
		clearInterval(slideshowInterval);	
		slideshowInterval = setInterval(slideShow, 10000);
	});
});