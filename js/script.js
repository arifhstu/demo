 
$(document).ready(function() {

	 
 

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});


	


	/*var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());
                 
				element.countup(endVal);
			})

			countUpFinished = true;	
		}
	});
             

	 
 



	/*const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

	}*/


      /*  $(window).scroll(function(){
            if($(this).scrollTop() <600 ){
                $('nav').removeClass('nav-opacity-bg')
                $('#backtotop').fadeOut();
            }else{
                $('nav').addClass('nav-opacity-bg')
                $('#backtotop').fadeIn();
            }
        });

        $('#backtotop').click(function(){
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });  */
     

     $('.counter').counterUp({
    delay: 10,
    time: 1000
    }); 
});
















