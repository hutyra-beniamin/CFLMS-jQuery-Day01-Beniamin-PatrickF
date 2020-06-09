$(document).ready(function() {
    //Task 1
    $("[href]:not(link)").attr("href", "https://codefactory.wien/de/home/");
    //Task 2
    $("code").css("color", "red");
    //Task 3
    $("ol>li").css("background-color", "#2a7b90");
    //Task 4
    $(":input").attr("placeholder", "Express your opinion");
    //Task 5
    $("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg")
        //Task 6
    $("blockquote").css({
        "background-color": "orange",
        "font-style": "italic"
    });
    //Task 7
    $("#logo").css("color", "black");
    $(".gray").css("color", "white");
    //Task 8 
    $("span.date").remove();
    //Task 9
    $("ul.sidemenu").append("<li>New Templates</li><li>Order Template</li><li>Contact Us</li>");
    //Task10
    $("p:contains('Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.')").html("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

});