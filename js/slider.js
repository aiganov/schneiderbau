$('.slider').slick({
  mobileFirst: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,

});




$('.projects-slider').slick({
  mobileFirst: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  
	 responsive: [{

      breakpoint: 780,
      settings: {
		  infinite: false,
		  slidesToShow: 2,
		  slidesToScroll: 1,
      },

      breakpoint: 1200,
      settings: {
		  infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  
      },      

      
    }]

});




$('.clients-slider').slick({
  mobileFirst: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  
	 responsive: [{

      breakpoint: 780,
      settings: {
		  infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
      },


      
    }]

});



$('.about-slider').slick({
  mobileFirst: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

/* СЛАЙДЕР ФОТО В ГАЛЕРЕЕ */

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true,
  infinite: true,

});