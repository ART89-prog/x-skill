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


    if ('function' === typeof MediaPlayer) {
		[].forEach.call(document.querySelectorAll('audio[controls]'), function (media) {
			player = media.player = new MediaPlayer(media, {
				svgs: {
				    play: 'images/sprite.svg#ic_play',
					pause: 'images/sprite.svg#ic_pause'
				},
			})
		})		
	}


    

    $("#js_number_student").ionRangeSlider({  
        from: 22,
        values: [1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,60,70,80,90,100,110,120,130,140,150,200,250,350,450,550,600,650,750,850,900,950,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2500,3000,4000,5000,6000,7000,8000,9000,10000
],
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

    $("#js_simulator").ionRangeSlider({        
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

    $(".js_simulator").on('change', function (e) {
        $(".simulator_hide").slideToggle();
        calculate()
    })

    $(".js_check").on('change', function (e) {        
        calculate()
    })

    $(".js_admin").on('change', function (e) {        
        calculate()
    })
    
    calculate()
})

function calculate(){
    let number_student = $("#js_number_student").val();
    let total = 0
    // ?????????????? ??????????????????
    $(".js-base").html(number_student*125+" ??????. <br><i>125 ??????. * "+number_student+" ??????.</i>"); 
    $(".js-count-student").text(number_student);

    total += number_student*125;

    // ???????? ?????????? ??????????????
    if($(".js_our_courses").prop("checked")){
        let out_courses = $("#js_our_courses").val();
        $(".js-count-courses").html(out_courses * number_student*100 +" ??????.<br><i>"+out_courses+" ????. ???? 100 ??????. * "+number_student+"  ??????.</i>");

        total += number_student*100*out_courses;

        // ???????? ?????????????????????? ???????????????? ????
        /*if($(".js_check").prop("checked")){
            $(".js-check").text("????");
            total += number_student*500*out_courses;
        }
        else
        {
            $(".js-check").text("??????");
        }*/

    }
    else
    {
        $(".js-count-courses").text(0);
        //$(".js-check").text("??????");
    }

    // ???????? ?????????????????? ??????????????
    if($(".js_trainer").prop("checked")){
        let trainer = $("#js_trainer").val();
        $(".js-trainer").html(number_student*50*trainer+" ??????.<br><i>"+trainer+" ????. ???? 50 ??????. * "+number_student+" ??????.</i>");      
        total += number_student*50*trainer; 
    }
    else
    {
        $(".js-trainer").text(0);     
    }

     // ???????? ???????????????????? ??????????????
    if($(".js_simulator").prop("checked")){
        let simulator = $("#js_simulator").val();
        $(".js-simulator").html(number_student*50*simulator+" ??????.<br><i>"+simulator+" ????. ???? 50 ??????. * "+number_student+" ??????.</i>");      
        total += number_student*50*simulator; 
    }
    else
    {
        $(".js-simulator").text(0);     
    }


    /*if($(".js_admin").prop("checked")){  */     
        $(".js-admin").html(number_student * 30 + " ??????.<br><i>30 ??????. * "+number_student+" ??????.</i>");       
        total += number_student * 30; 
    /*}
    else
    {
        $(".js-admin").text("??????");     
    }  */  

    if($(".js_admin").prop("checked")){      
        $(".js-admin2").html("&nbsp;0 ??????.<br><i>??????????????????</i>");      
    }
    else
    {
        $(".js-admin2").text("??????");     
    } 

    $(".js-sum").text(total)


}