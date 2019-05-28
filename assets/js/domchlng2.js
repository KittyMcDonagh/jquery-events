$(document).ready(function() {
    $("#button1").on("click", function() {               // select the button
        $(this).next().slideToggle('slow');              // select the next element after button, which is the paragraph

    });

});
