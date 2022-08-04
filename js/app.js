$(document).ready(function(){
    // console.log("i am working");



    // start header section

    // start banner section
    	// $(".carousel").carousel({
    	// 	interval: 500;
    	// })
    // End Banner Section

    // End Header Section


    // Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		// console.log(getscrollpoint);

		if(getscrollpoint >= 220){
			$('.infotexts').addClass('fromlefts');
			$('.infopics').addClass('fromrights');
		}else{
			$('.infotexts').removeClass('fromlefts');
			$('.infopics').removeClass('fromrights');
		}

	});
	// End Info Section  




     // Start Premises Secition
     $("#lightslider").lightSlider({
          // auto : true,
          item : 4,
          loop : true,
          slideMove : 1,
          speed : 600
     }).play();
     //End Premises Section

     // Start Pricing Section 
     $(window).scroll(function(){
          let getscroll = $(this).scrollTop();

          if(getscroll >= 2450){
               $(".carouselones").addClass("movelefts");
               $(".carouseltwos").addClass("movebottoms");
               $(".carouselthrees").addClass("moverights");
          }else{
               $(".carouselones").removeClass("movelefts");
               $(".carouseltwos").removeClass("movebottoms");
               $(".carouselthrees").removeClass("moverights");
          }
     })
     // End Pricing Section

})

