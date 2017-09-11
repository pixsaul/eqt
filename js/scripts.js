$(window).on('load', function () {
//Global scripts


//Mobile scripts
if ($(window).width() < 600) {

	//Show nav
	var nav = $("nav");

	$( ".showNav" ).click(function(e) {
		e.preventDefault();
	 	nav.animate({"top":"0px"}, "slow"); 
	});

	$( ".hideNav" ).click(function() {
	  nav.animate({"top":"-100%"}, "slow"); 
	});

	//Anchor scrolling
	$(document).on('click', 'nav ul a', function(event){

    	nav.animate({"top":"-100%"}, "slow"); 

	});
	
}


//Tablet/Desktop scripts
else {

	//on window resize, refresh to get new values
	//window.onresize = function(){ location.reload(); }

	//Anchor scrolling
	$(document).on('click', 'nav ul a', function(e){

		e.preventDefault();
		$("#content").fadeOut().fadeIn();   

    	$('html, body').delay(400).animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
   		}, 1);

	});

	//Creative scrolling
	$(document).on('click', '.creatives__block__inner a', function(e){

		e.preventDefault();
		$("#content").fadeOut().fadeIn();   

    	$('html, body').delay(400).animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 1);

	});

	//Tooltips
	var tooltip = document.querySelectorAll('.creative__tooltip');

	document.addEventListener('mousemove', fn, false);

	function fn(e) {
	    for (var i=tooltip.length; i--;) {
	        tooltip[i].style.left = (e.clientX + 10) + 'px';
	        tooltip[i].style.top = (e.clientY + 10) + 'px';
	    }
	}

	//Collection Tooltips
	var tooltipCol = document.querySelectorAll('.collection__tooltip');

	document.addEventListener('mousemove', fnCol, false);

	function fnCol(e) {
	    for (var i=tooltipCol.length; i--;) {
	        tooltipCol[i].style.left = (e.clientX + 10) + 'px';
	        tooltipCol[i].style.top = (e.clientY + 10) + 'px';
	    }
	}

	//Nav slide
	var nav = $("nav");

	nav.hover(
    function(e){
        nav.stop(true).animate({"left":"0"}, "slow");
        $("body").addClass("nav--open");
    },
    function(e){
        nav.stop(true).animate({"left":"-275px"}, "slow", function(){ $("body").removeClass("nav--open"); });  
    }
	);

	$(document).on({
	    mouseenter: function () {
        	nav.stop(true).animate({"left":"0"}, "slow");
	    },
	    mouseleave: function () {
	    }
	}, "body.nav--open .logo--complex"); //pass the element as an argument to .on

	//Tilt
	$('.tilt').tilt();

	// Scroll Magic
	var controller = new ScrollMagic.Controller,
		
		splashShrink = TweenMax.fromTo("section.splash h1", 1, {
			opacity: 1
		},
		{
			opacity: 0
		}),
		splashShrinkScene = new ScrollMagic.Scene({
			triggerElement: "section.splash",
	        duration: "40%",
	        triggerHook: 'onLeave'	        
	    })
		.setTween(splashShrink)
	    .addTo(controller),

	    /*videoSlide = (new TimelineMax).to("section.intro .intro__content--video", 1, {
			 css: {
                left: "1px"
            }
		}).to("section.intro .intro__content--text", 0.1, {
			 css: {
                opacity: 1
            }
		}).to("section.intro .intro__content--text", 1, {
			 css: {
                top: "-60%"
            }
		}),
		videoSlideScene = new ScrollMagic.Scene({
			triggerElement: "section.intro",
	        duration: "300%",
	        triggerHook: 'onLeave'	        
	    })
		.setTween(videoSlide)
	    .setPin("section.intro")
	    .addTo(controller),*/

	    /*timelineSlide = (new TimelineMax({delay: 0.03})).to("section.history .history__timeline__inner", 1, {
			 css: {
                left: "-320%"
            }
		}),
		timelineSlideScene = new ScrollMagic.Scene({
			triggerElement: "section.history",
	        duration: "700%",
	        triggerHook: 'onLeave'	        
	    })
		.setTween(timelineSlide)
	    .addTo(controller)
	    .setPin("section.history"),*/

	    creativesFade = (new TimelineMax).to("section.creatives .creatives__block:nth-child(1)", 0.2, {
			 css: {opacity:1
            }
		}).to("section.creatives .creatives__block:nth-child(1)", 1, {
			 css: {opacity:0
            }
		}).to("section.creatives .creatives__block:nth-child(1)", 0.1, {
			 css: {display:"none"
            }
		}).to("section.creatives .creatives__block:nth-child(2)", 0.1, {
			 css: {display:"flex"
            }
		}).to("section.creatives .creatives__block:nth-child(2)", 1, {
			 css: {opacity:1
            }
		}).to("section.creatives .creatives__block:nth-child(2)", 0.2, {
			 css: {opacity:1
            }
		}).to("section.creatives .creatives__block:nth-child(2)", 1, {
			 css: {opacity:0
            }
		}),
		creativesFadeScene = new ScrollMagic.Scene({
			triggerElement: ".creatives",
	        duration: "500%",
	        triggerHook: 'onLeave'	        
	    })
		.setTween(creativesFade)
	    .addTo(controller)
	    .setPin("section.creatives"),

	    kojeyscroll = $(".creative--1 .section__content").height() - ($(window).height() - 112);

		kojeySlide = new TimelineMax()
		.to(".creative--1 .slide6", 0.5, {width:0})
		.to(".creative--1 .slide5", 0.5, {width:0})
		.to(".creative--1 .slide4", 0.5, {width:0})
		.to(".creative--1 .slide3", 0.5, {width:0})
		.to(".creative--1 .slide2", 0.5, {width:0})
			
		var kojeySlideScene = new ScrollMagic.Scene({triggerElement: ".creative--1 .section__gallery", triggerHook: 'onLeave', duration: kojeyscroll})
						.setTween(kojeySlide)		
						.setPin(".creative--1 .section__gallery__wrapper")
						.addTo(controller),

	    ashleyscroll = $(".creative--2 .section__content").height() - ($(window).height() - 126);

		ashleySlide = new TimelineMax()
		.to(".creative--2 .slide6", 0.5, {width:0})
		.to(".creative--2 .slide5", 0.5, {width:0})
		.to(".creative--2 .slide4", 0.5, {width:0})
		.to(".creative--2 .slide3", 0.5, {width:0})
		.to(".creative--2 .slide2", 0.5, {width:0})

		var ashleySlideScene = new ScrollMagic.Scene({triggerElement: ".creative--2 .section__gallery", triggerHook: 'onLeave', duration: ashleyscroll})
						.setTween(ashleySlide)		
						.setPin(".creative--2 .section__gallery__wrapper")
						.addTo(controller),

	    kingscroll = $(".creative--3 .section__content").height() - ($(window).height() - 112);

		kingSlide = new TimelineMax()
		.to(".creative--3 .slide6", 0.5, {width:0})
		.to(".creative--3 .slide5", 0.5, {width:0})
		.to(".creative--3 .slide4", 0.5, {width:0})
		.to(".creative--3 .slide3", 0.5, {width:0})
		.to(".creative--3 .slide2", 0.5, {width:0})

		var kingSlideScene = new ScrollMagic.Scene({triggerElement: ".creative--3 .section__gallery", triggerHook: 'onLeave', duration: kingscroll})
						.setTween(kingSlide)		
						.setPin(".creative--3 .section__gallery__wrapper")
						.addTo(controller),

	    amyscroll = $(".creative--4 .section__content").height() - ($(window).height() - 126);

		amySlide = new TimelineMax()
		.to(".creative--4 .slide6", 0.5, {width:0})
		.to(".creative--4 .slide5", 0.5, {width:0})
		.to(".creative--4 .slide4", 0.5, {width:0})
		.to(".creative--4 .slide3", 0.5, {width:0})
		.to(".creative--4 .slide2", 0.5, {width:0})

		var amySlideScene = new ScrollMagic.Scene({triggerElement: ".creative--4 .section__gallery", triggerHook: 'onLeave', duration: amyscroll})
						.setTween(amySlide)		
						.setPin(".creative--4 .section__gallery__wrapper")
						.addTo(controller),

		productSlide = new TimelineMax()
		.to(".products__slide.slide1", 0.5, {width:0})
		.to(".products__slide.slide3", 0.5, {width:0})
		.to(".products__slide.slide5", 0.5, {width:0})


		var productSlideScene = new ScrollMagic.Scene({triggerElement: "#products", triggerHook: 'onLeave', duration: "400%"})
						.setTween(productSlide)		
						.setPin("#products")
						.addTo(controller),

		quoteFade = new TimelineMax()
		.to(".conclusion span.line--1", 0.5, {opacity:1})
		.to(".conclusion span.line--2", 0.5, {opacity:1})
		.to(".conclusion span.line--3", 0.5, {opacity:1})
		.to(".conclusion span.line--4", 0.5, {opacity:1})
		.to(".conclusion span.line--5", 0.5, {opacity:1})

		var quoteFadeScene = new ScrollMagic.Scene({triggerElement: "#conclusion", triggerHook: 'onLeave', duration: "100%"})
						.setTween(quoteFade)		
						.setPin("#conclusion")
						.addTo(controller)

}	    

});