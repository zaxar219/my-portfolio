$(document).ready(function() {

	
	//Плавная прокрутка
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	// MixItUp - Фильтрация работ в портфолио
	$('#portfolio-projects').mixItUp();
	
	// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery
	
	

//	(function() {
//
//	  "use strict";
//
//	  var toggles = document.querySelectorAll(".cmn-toggle-switch");
//
//	  for (var i = toggles.length - 1; i >= 0; i--) {
//		var toggle = toggles[i];
//		toggleHandler(toggle);
//	  };
//
//	  function toggleHandler(toggle) {
//		toggle.addEventListener( "click", function(e) {
//		  e.preventDefault();
//		  (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
//		});
//	  }
//
//	})();

}); 