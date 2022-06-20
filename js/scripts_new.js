$(() => {
    if($(".slider").length>0){
        $('.slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }


    $('.help-search .vacancy.accordion .block_head button').click(function(){
		$('.help-search .vacancy.accordion .data').slideToggle(300); 
	});


    

    $("#js_number_student").ionRangeSlider({        
        min: 10,
        max: 5000,
        from: 1000,
        step: 10,
        skin: "round",
        onChange: function (data) {
            calculate()
        },
    });

    $("#js_our_courses").ionRangeSlider({        
        min: 1,
        max: 10,
        from: 3,
        step: 1,
        skin: "round",
        onChange: function (data) {
            calculate()
        },
    });

     $("#js_trainer").ionRangeSlider({        
        min: 1,
        max: 100,
        from: 15,
        step: 1,
        skin: "round",
        onChange: function (data) {
            calculate()
        },
    });

    $(".js_our_courses").on('change', function (e) {
        $(".our_courser_hide").slideToggle();
        calculate()
    })

    $(".js_trainer").on('change', function (e) {
        $(".trainer_hide").slideToggle();
        calculate()
    })

    $(".js_check").on('change', function (e) {        
        calculate()
    })

    $(".js_admin").on('change', function (e) {        
        calculate()
    })
    
})

function calculate(){
    let number_student = $("#js_number_student").val();
    let total = 0
    // базовая стоимость
    $(".js-base").text(number_student*500+" рублей в месяц");
    $(".js-count-student").text(number_student);

    total += number_student*500;

    // если курсы выбраны
    if($(".js_our_courses").prop("checked")){
        let out_courses = $("#js_our_courses").val();
        $(".js-count-courses").text(out_courses);

        total += number_student*500*out_courses;

        // если установлена проверка ДЗ
        if($(".js_check").prop("checked")){
            $(".js-check").text("Да");
            total += number_student*500*out_courses;
        }
        else
        {
            $(".js-check").text("Нет");
        }

    }
    else
    {
        $(".js-count-courses").text(0);
        $(".js-check").text("Нет");
    }

    // если тренажеры выбраны
    if($(".js_trainer").prop("checked")){
        let trainer = $("#js_trainer").val();
        $(".js-trainer").text(trainer);      
        total += number_student*50*trainer; 
    }
    else
    {
        $(".js-trainer").text(0);     
    }

    if($(".js_admin").prop("checked")){       
        $(".js-admin").text("Да");       
        total += 2500; 
    }
    else
    {
        $(".js-admin").text("Нет");     
    }    

    $(".js-sum").text(total)


}