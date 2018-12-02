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

	// jQuery Validate JS
	$("#contact-form").validate({
		rules: {
			name: { required: true },
			email: { required: true, email:true },
//			skype: { required: true },
//			phone: { required: true },
			massage: { required: true }
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввелиemail с ошибкой."
			},
			massage: "Пожалуйста, введите текст сообщения",
			
		}
		
	})
	
}); 