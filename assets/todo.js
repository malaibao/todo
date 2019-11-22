

//Check off specific todo by clickng
//applied to ul, listening to li only
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

/*
$("li").click(function(){
    $(this).toggleClass("completed");
})

//ON applied to all potential elements
*/

/*
$("li").click(function(){
    //if it is gray
    if($(this).css("color") === "rgb(128, 128, 128)"){  //must compare with rgb
        $(this).css({
            color: "black",
            textDecoration: "none"
        })
    }else{
        // $(this).css("color", "gray");
        // $(this).css("text-decoration", "line-through");
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        })
    }
})
*/

//Click on dustbin to delete
//$("span").click(function(event){

$("ul").on("click", "span", function(event){
    //$(this).parent().fadeOut().remove(); //wont wait til fadeOut finish
    $(this).parent().fadeOut(500, function(){
        $(this).remove();   //must remove, else 1000 hidden elements in html
    });
    event.stopPropagation(); //stop it from parent jquery
})

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
