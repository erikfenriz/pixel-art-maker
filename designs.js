// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height, width, color, submit, table, d, row, col;

function makeGrid() {
    d = document;
    height = $("#input_height").val();
    width = $("#input_width").val();
    color =  $(".jscolor").val();
    submit = $("#submit");
    table = $("#pixel_canvas");
    row  = $("<tr></tr>");
    col = $("<td></td>");
    if (height > 50 || width > 50 || height < 1 || width < 1) {
        if (!error.classList.contains("error")) {
            error.classList.toggle("error");
            error.innerText = "the dimension are has to be smaller than 50 and bigger than 0"
        }
    }else{
        error.innerText = "Draw ;)"
        $("div").removeClass("error");
    }
for (let x = 0; x < height; x++){
    $('#pixel_canvas').append(row);
    for(let y = 0;y < width; y++){
        row.append(col);
    }
}
}