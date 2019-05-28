$(document).ready(function() {
    
    // When a table header is clicked, the corresponding row should highlight. When another table header (on the row) is clicked, 
    // the corresponding row should highlight, and all others should turn white. Add extra rows if you need to. Traverse the DOM to find a 
    // solution.

    $("th").click(function() {                          // will react to heading at top and on side of table
        $("tr").children().removeClass("selection")     // return all rows to original color
        $(this).siblings().addClass("selection");       // apply new color to selected row
    });

});
