$(document).ready(function() {

    // DOM Traversing Methods Challenges

    // Using button.html - When a colored panel is clicked, all panels vanish

    //    $(".theButton").click(function() {
    //        $("#panel").hide(); // hide from the highest level
    //    });

    // When a colored panel is clicked, just that panel disappears

    //    $(".theButton").click(function() {
    //        $(this).hide();                             // hide the button that was clicked
    //    });

    // When a panel is clicked, all siblings fade to 10% opacity

    $(".theButton").click(function() {
        $(".container").siblings().fadeTo("slow", .1);       // fade to 10% opacity
    });

    // When reset is clicked, all panels revert to full opacity

    $(".superButton").click(function() {
        $(".container").siblings().fadeTo("slow", 1);   // return to full opacity
    });
    
    // When the mouse hovers over a panel, that panel turns black
    
    $(".theButton").mouseenter(function() {
        $(this).addClass("black-bg");       // on mouse hover turn to black
    });
    
    //When the mouse moves away, the panel reverts back to its previous colour
    
    $(".theButton").mouseleave(function() {
        $(this).removeClass("black-bg");       // on mouse hover turn to black
    });
    
    
    

});
