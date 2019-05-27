//waits until page is loaded first
$(document).ready(function() {

    //applies colour red to paragraphs when clicked on 
    $("p").click(function() {
        $("p").addClass("highlight_text");
    });

    //will add lightblue to h2 elements
    $("h2").hover(function() {
        $("h2").addClass("h2_color");
    });

    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    $("#hr_html").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function() {
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });



    //applies colour black to body background when mouse enters over buttons
    //    $(".bottom_button").mouseenter(function() {
    //       $("body").css("background-color", "black");
    //    });

    //applies colour grey to body background when mouse leaves buttons
    //    $(".bottom_button").mouseleave(function() {
    //        $("body").css("background-color", "#eee");
    //   });

    // jQuery effects - Challenge 1. Make the first button hide when clicked

    //  $("#button-1").mouseenter(function() {
    //       $("#button-1").fadeTo(1000, 0.5);
});

// additional code - make button re-appear
//   $("#button-1").mouseleave(function() {
//     $("#button-1").fadeTo(1000, 1);
//    });

// $("#button-1").removeClass("bottom_button");
// $("#button-1").removeClass("bottom_button").addClass("makeRed");
// $("#button-1").slideUp(2000).slideDown(2000);
// $("img").attr("src", "assets/images/kitty.png");                  // select attribute of an element and replace it

// Method Chaining - Challenge 1

// Create class to turn button red and add to html. Create border class, dont add to html. 
// Remove red class, add border on mouseenter, vice versa on mouseleave.

$("#button-1").mouseenter(function() {
    $(this).removeClass("makeRed").addClass("makeBorder");     // 'this' instead of repeating "button-1"
});

$("#button-1").mouseleave(function() {
    $(this).removeClass("makeBorder").addClass("makeRed");      // 'this' instead of repeating "button-1"
});

// Method Chaining - Challenge 2

// Slide paragraph up / down
// $("#button-1").click(function() {
//    $("#par-1").slideToggle(2000);
// });

// $("#button-1").click(function() {
//    $("#par-1").slideDown(2000);
// });

// hide / show paragraph 
	$("#button-1").click(function() {
		$("#par-1").hide(2000).show(2000);
	});

// Method Chaining - Challenge 3

// Mouseover: fade in / out on specific button. This affects only the paragraph selected

//	$("#button-2").mouseover(function() {
//		$("#par-2").fadeOut(2000).fadeIn(2000);
//	});
	
// Mouseover: show / hide on specific button. This affects only the paragraph selected

//	$("#button-3").mouseover(function() {
//		$("#par-3").hide(2000).show(2000);
//	});
	
// Mouseover: fade in / out on all buttons. All buttons will react when you mouseover one.

	$("button").mouseover(function() {
		$("p").fadeOut(2000).fadeIn(2000);
	});
	
// Mouseover: show / hide on all buttons. All buttons will react when you mouseover one.

	$("button").mouseover(function() {
		$("p").hide(2000).show(2000);
	});

// Method Chaining - Challenge 4

//Go to eir.ie and using developer tools, change all the links so that they point to codeinsitute.net

$("a").attr("href","https://codeinstitute.net/"); // Note that if the "https://" is not included, it will tag "codeinstitute.net" onto eir.ie.
    







