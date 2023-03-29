

$(document).ready(function(){
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();
    $('#bar6').barfiller();

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
});

$('.slide_bar').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
	centerMode: true,
    slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 300,
		  settings: {
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]


  });
$('.partner_slider').slick({
    infinite: true,
    speed: 300,
    // autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 300,
		  settings: {
			autoplay: true,
			slidesToShow: 4,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]

  });

  VanillaTilt.init(document.querySelector(".hero"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".big_image_3d"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".small_image_3d"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".card1"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".card2"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".card3"), {
		max: 10,
		speed: 1000
	});
  
  // service card

  VanillaTilt.init(document.querySelector(".service_card1"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".service_card2"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".service_card3"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".service_card4"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".service_card5"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".service_card6"), {
		max: 10,
		speed: 1000
	});
  // portfolio

  VanillaTilt.init(document.querySelector(".portfolio_card1"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".portfolio_card2"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".portfolio_card3"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".portfolio_card4"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".portfolio_card5"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".portfolio_card6"), {
		max: 10,
		speed: 1000
	});
  // partner
  VanillaTilt.init(document.querySelector(".partner_slider"), {
		max: 10,
		speed: 1000
	});
  // blog section
  VanillaTilt.init(document.querySelector(".blog_card1"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".blog_card2"), {
		max: 10,
		speed: 1000
	});
  VanillaTilt.init(document.querySelector(".blog_card3"), {
		max: 10,
		speed: 1000
	});
  // subscribe_card
  VanillaTilt.init(document.querySelector(".subscribe_card"), {
		max: 0,
		speed: 100,
	});
  window.addEventListener("scroll", function(){
    var header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
    });

	// -------------------bar dropdown button-------------------
	const toggleBtn = document.querySelector('.icon_bar')
	const toggleIcon = document.querySelector('.icon_bar i')
	const dropDown = document.querySelector ('.dropdown_manu')

	toggleBtn.onclick = function(){
		dropDown.classList.toggle('open')
		const isopen = dropDown.classList.contains('open')
		toggleIcon.classList =isopen ?
		'fa-solid fa-xmark'
		:
		'fa-solid fa-bars-staggered'
	}

